# Study Framing

## Subject

The write-ahead log — an append-only file persistence mechanism with binary record framing, byte-offset indexing, and checksum-guarded crash recovery, implemented using Node.js `fs` built-in module.

## Core Question

What specific mechanical properties of sequential file appends — compared to random-access in-place mutation — enable a write-ahead log to simultaneously achieve crash recovery, data integrity verification, and write throughput that approaches the raw sequential bandwidth of the storage device? And what is the precise cost structure (fsync latency, checksum computation, replay time) that governs the boundary between data safety and performance?

## Hypothesis

> **[YOUR HYPOTHESIS HERE]**
>
> Before writing any code, document your current mental model of how a write-ahead log works. Specifically:
>
> 1. **Record format**: How do you think individual records are stored in the file? What metadata accompanies each payload?
> 2. **Write path**: What happens mechanically when a new record is appended? What makes this cheaper than modifying an existing record in place?
> 3. **Durability boundary**: When is data "safe"? What is the difference between the OS reporting a successful `write()` and the data actually surviving a power failure?
> 4. **Crash recovery**: If the process crashes mid-write, how does the system distinguish complete records from corrupted partial writes when it restarts?
> 5. **Throughput**: Why is sequential I/O fundamentally faster than random I/O on both spinning disks and SSDs?
>
> Write your answers before proceeding. They will be revisited in Phase 4.

## Scope Boundary

**Included:**
- Binary record framing: length-prefixed records with CRC-32 checksums, packed into `Buffer` objects
- Append-only sequential writes via Node.js `fs` — using file descriptors and explicit byte-offset tracking
- In-memory offset index: mapping logical sequence numbers to physical byte positions in the log file
- `fsync` as the durability primitive — the mechanical difference between "written to the OS page cache" and "durable on storage media"
- Crash recovery: re-scanning the log file from byte 0, reconstructing the in-memory index, detecting and truncating incomplete trailing records via CRC validation
- Group commit: batching multiple logical writes behind a single `fsync` call to amortize the cost of forced disk flushes

**Excluded and why:**
- **Log compaction / garbage collection**: The WAL in this study grows without bound. Truncation, checkpointing, and segment rotation are optimization concerns addressed by consumers of this prerequisite (specifically `lsm-tree`, where checkpointing the memtable allows truncating the WAL). Excluding compaction keeps the study focused on the append-only write path and crash recovery mechanism.
- **Log segmentation**: Production WALs (PostgreSQL's 16MB segment files, Kafka's configurable log segments) split the log into fixed-size segments for operational manageability. This study uses a single file to isolate the core append/recovery mechanics from file management concerns.
- **Replication**: Shipping WAL records to remote replicas is a distributed consensus concern. PostgreSQL's streaming replication sends WAL bytes to standbys; Kafka replicates log segments across brokers. Both are covered architecturally in `raft-consensus`. This study operates on a single node.
- **Logical vs. physical logging**: PostgreSQL distinguishes between logical WAL records (high-level operation descriptions for logical replication) and physical WAL records (raw page diffs for crash recovery). This study uses a simplified record model — opaque key-value payloads — to isolate the mechanical I/O properties from the semantic content of records.
- **Undo logging / ARIES recovery**: Full database recovery protocols (ARIES) combine redo and undo logs with fuzzy checkpointing. This study implements only the redo (replay-forward) path, which is sufficient to expose the core WAL mechanism and is the variant used by Redis AOF and Kafka.
- **Compression**: Record-level or segment-level compression (e.g., Kafka's `RecordBatch` compression) is a throughput optimization that obscures the raw I/O mechanics under study.

## Prerequisites

**None identified.**

Rationale: This étude is itself a prerequisite building block. All required primitives are native to Node.js:
- `fs` module provides file descriptors, `writeSync`, `readSync`, and `fsyncSync` — the complete low-level I/O surface needed.
- `crypto` module provides `crc32` (Node.js 22+) or a hand-rolled CRC-32 using the polynomial — no external library required.
- `Buffer` provides direct byte-level packing for the record frame (length prefix, CRC, payload) — this is the exact abstraction needed for binary record framing.

No data structure with non-trivial invariants is required. The in-memory index is a flat array of `{ sequenceNumber, byteOffset }` entries — explainable in under two minutes.

## Real-System Correspondence Map

This section maps each mechanism in the study to its concrete location in production systems. These correspondences will be cited during implementation (Phase 3) as each mechanism is built.

| Mechanism | PostgreSQL WAL | Redis AOF | FoundationDB |
|---|---|---|---|
| Record framing | `XLogRecord` struct in `src/include/access/xlogrecord.h` — contains `xl_tot_len` (total byte length), `xl_prev` (byte offset to previous record), and CRC-32C checksum | RESP protocol commands appended as text lines (`*3\r\n$3\r\nSET\r\n...`) — no binary framing, relies on protocol structure | Binary mutation log records in the storage engine |
| Append path | `XLogInsertRecord()` in `src/backend/access/transam/xlog.c` copies records into shared WAL buffers | `feedAppendOnlyFile()` in `src/aof.c` serializes commands and calls `aofWrite()` | Storage server appends mutations to an on-disk log before applying to the B-tree |
| fsync policy | `XLogFlush()` — called at commit; `wal_sync_method` controls `fsync`/`fdatasync`/`open_sync` strategy | `appendfsync` config: `always` (fsync every write), `everysec` (background fsync), `no` (OS decides) — directly governs the durability-throughput knob | Durable writes require disk sync before acknowledging commits to the transaction system |
| Crash recovery | `StartupXLOG()` in `xlog.c` reads forward from the last checkpoint, validates CRC per record, replays redo operations | `loadAppendOnlyFiles()` in `aof.c` replays commands sequentially; truncates trailing corrupt bytes on `aof-use-rdb-preamble no` | Replays the mutation log from the last durable snapshot to rebuild in-memory state |
| Checksum | CRC-32C computed over the record body (data + header fields), stored in `xl_crc` | No per-entry checksum; relies on file-level fsync and optional RDB checksums | CRC validation on log records during recovery |
| Group commit | `CommitTransaction()` sets LSN; `XLogFlush()` batches pending WAL writes behind a single fsync — multiple concurrent transactions share one disk flush | `everysec` mode batches all writes in a 1-second window behind a single background `fsync` | Batches durable sync across multiple concurrent commits for throughput |

## Design Pressures Discovered

> *To be completed during Phase 3 and finalized in Phase 4.*

## Mental Model Corrections

> *To be completed in Phase 4.*

## Connections

> *To be completed in Phase 4.*

## Divergences

> *To be completed after verification against the real system.*
