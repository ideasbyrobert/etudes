# prereq-write-ahead-log

## Subject

Append-only sequential log with explicit byte-offset tracking, serving as both a crash-recovery mechanism and an offset-addressable entry store.

## Core Question

What makes sequential append to a log file both safer under crash and faster under load than in-place mutation of a data file, what is the minimum mechanism required to recover consistent state from such a log after unexpected process termination, and why does the append-only constraint make byte offsets a sufficient addressing scheme — eliminating the need for a separate index to locate entries?

## Hypothesis

I believe that an append-only, length-prefixed log can durably represent a system's current state by acting as a deterministic ledger of state transitions. This sequential ledger is mechanically safer and faster to recover from than maintaining a "current state" data file that relies on in-place overwrites. Furthermore, I believe the append-only property gives the log a structural advantage beyond durability: the byte offset of each entry is a permanent, stable address that never changes, making the log self-indexing without any auxiliary data structure.

Concretely, I expect the following mechanical behaviors:

- **Torn-Write Detection via Length Framing:** If the process dies mid-append, the WAL file will end with an incomplete record. By framing every entry with a `u32` (a strict 4-byte unsigned integer) that declares the exact payload length, the recovery parser can detect two distinct failure modes. First, if the parser cannot read a complete 4-byte length header before hitting EOF, the length frame itself was torn — it discards the partial bytes. Second, if the parser reads a complete length header but hits EOF before consuming the promised number of payload bytes, the payload was torn — it discards the header and the partial payload. In both cases, the parser truncates the file to the end of the last complete entry, restoring the log to a consistent state.

- **The Vanished-Write Problem:** There is a third failure mode distinct from torn writes. If the process calls `write()` (which only copies data into the OS page cache) but crashes before calling `fsync()`, the entry may never reach the physical storage device at all. In this case, the file on disk ends cleanly at a prior entry boundary — there is no torn record to detect. The entry simply does not exist. This means the parser will report a consistent log, but one that is missing the last committed operation. Any operation that the application treated as "successful" before the fsync boundary is, in reality, a lie. Durability requires fsync; write() alone provides only ordering.

- **The `fsync` Durability Boundary:** A standard `write()` call only pushes data into the operating system's volatile RAM page cache. `fsync` is the explicit system call that forces the OS to flush the page cache to the physical storage hardware. An entry is only genuinely durable — guaranteed to survive power loss — after `fsync` completes. Therefore, the commit protocol is: append the entry, then fsync, then acknowledge success. Any acknowledgment before fsync is a durability gamble.

- **Sequential vs. Random I/O:** Sequential appends to the end of a log file will outperform in-place updates to a data file. Appending avoids disk-head seeks (on HDDs) and minimizes write-amplification (on SSDs), whereas in-place overwrites force random I/O patterns. However, I suspect that under our per-entry fsync regime, the fsync latency will dominate the I/O pattern advantage. Each fsync forces a round-trip to the storage hardware (typically 0.5–2ms on consumer SSDs), which means the sequential advantage may be real but invisible at our measurement granularity. This is the design pressure that drives production systems toward group commit and batched fsync — amortizing the durability cost across many entries.

- **Why Not Just Fsync the Data File:** Even for a simple key-value store, in-place mutation of a data file is structurally unsafe or prohibitively expensive. If the new value differs in size from the old value, an in-place overwrite requires shifting all subsequent bytes — an O(N) operation that is itself non-atomic (a crash mid-shift corrupts the file). The alternative — fixed-size records — wastes space and caps value size. The WAL sidesteps the problem entirely: it never mutates existing bytes, only appends new ones. The in-memory `Map` is the "current state," and the log is the recipe for reconstructing it. The data file mutation problem simply does not arise.

- **Offset Stability as Zero-Cost Addressing:** In an append-only file, once an entry is written at byte offset X, that entry will be at byte offset X for the lifetime of the file. No bytes before it will ever be inserted, deleted, or resized. This makes the byte offset a permanent, content-independent identifier — the equivalent of a primary key — generated for free at write time (it is just the file's length before the append). In a mutable file, any insertion or deletion shifts subsequent bytes, invalidating all previously-recorded offsets and necessitating a separate index (e.g., a B-tree) to map logical identifiers to physical positions. The append-only log needs no such index. This is the structural property that allows a downstream system like Kafka to use the byte offset as a message ID: consumers store a single integer (their current offset) and can resume consumption from any point in the log by seeking directly to that byte position.

## Scope Boundary

This study intentionally excludes the following. Each exclusion is a simplification with known consequences.

**Log compaction / segmentation.** Production WALs do not grow forever. PostgreSQL creates checkpoints (`CreateCheckPoint()` in `xlog.c`) that allow old WAL segments to be recycled. Redis performs AOF rewrite (`rewriteAppendOnlyFile()` in `aof.c`). Kafka splits the log into time- or size-bounded segments (`LogSegment` in `log/LogSegment.scala`) enabling efficient retention enforcement. Excluded because compaction addresses a separate design pressure — space reclamation vs. recovery completeness — that is orthogonal to the core append-and-replay mechanism. Consequence: our log grows without bound.

**Concurrent writers.** PostgreSQL serializes WAL insertions using `WALInsertLock`, an array of LWLocks managed in `xlog.c`. Kafka partitions are single-writer by design (only the partition leader appends). We use a single writer to isolate the sequential I/O mechanism from concurrency control. Consequence: no contention, no need for insertion locking.

**Group commit / batched fsync.** PostgreSQL batches multiple transactions' durability guarantees through `XLogFlush()` and the `commit_delay` GUC parameter. Redis offers `appendfsync` with modes `always`, `everysec`, and `no`. Kafka uses `log.flush.interval.messages` and `log.flush.interval.ms` to batch fsyncs. We fsync per entry to expose the raw cost of durability. Consequence: our throughput will be significantly lower than a production WAL that amortizes fsync across multiple entries.

**Log shipping / replication.** WAL records can be streamed to replicas (PostgreSQL streaming replication via `walsender.c`, FoundationDB's log server role, Kafka ISR replication). Excluded because replication is a distributed systems concern, not a local I/O mechanism.

**Full CRC checksumming.** PostgreSQL computes CRC-32C for each WAL record (via `pg_crc32c` defined in `pg_crc32c.h`). Kafka computes CRC-32C per record batch (`DefaultRecordBatch` in `record/DefaultRecordBatch.java`). We use length-prefixed entries for torn-write detection instead. This catches truncation (process died mid-write) but not bit-rot or silent data corruption. The gap is deliberate: our study targets crash recovery, not storage-layer fault tolerance.

**Consumer offset persistence.** Kafka consumers persist their offsets externally (historically in ZooKeeper, now in the `__consumer_offsets` internal topic). Our WAL exposes the read-at-offset and scan-from-offset interface, but does not persist consumer cursors. That is a downstream concern for the `kafka-partitioning` étude.

## Prerequisites

None. This is a prerequisite étude (depth 0). All dependencies are inlined:

- **Key-value state**: A JavaScript `Map` serving as the in-memory state that the log protects. No invariants beyond get/set/delete. Inlined.
- **Binary entry encoding**: Length-prefixed `Buffer` operations (`writeUInt32BE`, `readUInt32BE`, `Buffer.alloc`). Straightforward serialization with no complex invariants. Inlined.
- **File I/O**: Node.js built-in `fs` module (synchronous operations for clarity, then async where the mechanism demands it). No external dependency.

## Module Interface

This étude is a reusable building block. It must export a clean API via `module.exports` that downstream études (`lsm-tree`, `kafka-partitioning`) can `require()`. The interface must support:

- **`append(entry)`** → returns the byte offset where the entry was written.
- **`readAt(offset)`** → returns the entry at that offset and the offset of the next entry.
- **`scanFrom(offset, callback)`** → iterates entries sequentially from a given offset.
- **`replay()`** → scans from offset 0, reconstructing state. Alias for `scanFrom(0, ...)` specialized for crash recovery.

## Brand Mapping

- **Redis AOF** (Append Only File): `src/aof.c` — Redis logs every write command as a protocol-formatted string appended to the AOF file. Recovery replays the file as a sequence of commands. Corresponds to our replay-from-zero recovery path.
- **PostgreSQL WAL** (Write-Ahead Log): `src/backend/access/transam/xlog.c` — PostgreSQL writes WAL records before modifying data pages. Each record has a Log Sequence Number (LSN) that is its byte offset in the WAL stream. Recovery replays WAL from the last checkpoint's LSN. Corresponds to both our offset-tracking and recovery mechanisms.
- **Kafka Log**: `core/src/main/scala/kafka/log/LogSegment.scala` — Kafka appends record batches to segment files. Each batch has a base offset. Consumers fetch by offset, and the broker seeks directly to the byte position. Corresponds to our read-at-offset and scan-from-offset interface.
- **FoundationDB**: Uses a distributed WAL architecture where transaction logs are written to dedicated log server processes before being applied to storage servers.

## Design Pressures Discovered

*To be completed after implementation.*

## Mental Model Corrections

*To be completed after implementation.*

## Connections

*To be completed after implementation.*

## Divergences

*To be completed after verification against the real system.*