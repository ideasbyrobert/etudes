# Study Framing

## Subject

The persistence mechanism VS Code exposes through `ExtensionContext.globalState` — a `Memento`-backed, per-extension key-value store that serializes user-scoped data to a shared storage backend, isolates extensions by namespace, coordinates asynchronous writes, and selectively opts keys into Settings Sync.

## Core Question

When VS Code persists extension globalState, does each extension own an independent storage partition (its own file or database row), or do all extensions write into a shared storage backend that uses key prefixing to achieve logical isolation — and what are the consequences of each design for write coordination, data integrity, and Settings Sync key selection?

## Hypothesis

When an extension calls `globalState.update('myKey', value)`, the system operates as follows:

**1. Namespace Isolation (Nested Tree):**
Data is stored in a single shared JSON file organized as a nested object tree . Each extension receives a dedicated top-level branch (e.g., `"publisher.extensionName": { "myKey": "value" }`), rather than relying on flattened, concatenated string keys.

**2. Write Coordination (Debounced Batching):**
The system does not write to disk immediately upon `update()`. It updates an in-memory map and debounces the calls, waiting a short window to batch-flush the final state to disk in a single write operation. This batching mechanism acts as the primary safeguard against asynchronous write corruption. Additionally, there may be an internal prioritization queue that orders or prioritizes certain state updates before others hit the disk.

**3. Settings Sync (Separate Registry & Event Log):**
Sync status is treated as a separate architectural concern. Instead of mutating the stored value in place with metadata flags, the storage backend maintains a separate registry (such as an array) of sync-enabled keys alongside the main data. Furthermore, the synchronization process is event-driven; updates trigger events that are appended to a sync queue (conceptually similar to event sourcing) to maintain order and replayability.

## Scope Boundary

**Included:**
- The `Memento` interface (`get`, `update`, `keys`) and its behavioral contract
- Per-extension namespace isolation within a shared storage backend
- Asynchronous write coordination (how `update()` returns a `Thenable` and what that implies about write ordering and durability)
- The `setKeysForSync(keys)` mechanism — how sync eligibility is tracked and how it partitions the keyspace
- File-backed persistence (the serialization layer)

**Excluded and why:**
- **SQLite backend**: Modern VS Code (1.65+) migrated from JSON to SQLite for the storage layer (`src/vs/platform/storage/node/storageMainService.ts`). This étude uses JSON-file persistence because the design pressures we're studying — namespace isolation, write coordination, sync tagging — exist at the abstraction layer above the storage engine. The choice of SQLite vs. JSON affects performance and atomicity guarantees but not the Memento contract itself. The verification phase can test whether SQLite introduces behavioral differences.
- **Settings Sync transport**: How synced key-value pairs travel to/from Microsoft's cloud. We model only the local mechanism that marks keys as sync-eligible and separates them from local-only state. The sync transport is a separate distributed systems concern.
- **`workspaceState`**: Identical Memento interface but scoped to a workspace rather than globally. The mechanism is the same; only the storage path differs. Excluding it avoids redundancy.
- **Extension lifecycle (activation/deactivation)**: We assume the extension is active. The question of when globalState becomes available relative to `activate()` is an extension host scheduling concern, not a persistence mechanism concern.
- **Storage migration**: VS Code has migrated storage formats across versions. We study the steady-state mechanism, not the migration path.
- **Secrets storage**: `ExtensionContext.secrets` uses a separate, encrypted store (OS keychain). It is architecturally distinct from globalState.

## Prerequisites

**None identified.**

Rationale: The data structures involved are all native to JavaScript:
- The `Memento` abstraction is a thin wrapper around a `Map` with JSON serialization — its invariants and operations can be explained in under two minutes.
- The storage backend is a JSON file read/written with `fs` built-in module.
- Namespace isolation is achieved through key prefixing or separate in-memory Maps — no custom data structure required.
- Write coordination uses promises and a simple write queue — no external concurrency primitive needed.

If any of these prove more complex than expected during the development plan, we'll escalate to a prerequisite before proceeding.

## Design Pressures Discovered

- **Read latency vs. write durability**: The single-threaded extension host cannot block on disk reads, so the in-memory cache becomes the authoritative read path (`get()` is synchronous). But writes must eventually reach disk for durability. This tension produces the split architecture: synchronous cache mutation for reads, async deferred flush for writes.
- **Write frequency vs. I/O cost**: Every `update()` logically wants its data persisted. But JSON serialization is O(total_store_size) per write—you can't patch a JSON file in place. With dozens of extensions updating on every keystroke, naive immediate writes produce catastrophic I/O amplification. The debounce window (100ms) is the tuning knob: shorter windows risk I/O storms, longer windows risk data loss on crash.
- **Multi-tenant isolation vs. shared-state coordination**: Extensions must not see each other's keys (isolation), but they all write to the same backend (coordination). Decentralized write ownership causes race conditions (store corruption and silent data loss). Centralizing the in-memory store at the host level solves coordination but means every flush serializes every extension's data, even those that didn't change.
- **Sync selectivity vs. architectural simplicity**: Extensions must control which keys travel to the cloud. Event sourcing would give precise change tracking but solves the wrong problem for kilobytes of state. A declarative registry combined with a point-in-time snapshot is simpler and structurally superior—consistency is guaranteed by definition, since the snapshot is atomic.
- **Notification immediacy vs. persistence lifecycle**: Change events fire before the flush, anchored to the in-memory mutation, not the disk write. This decouples reactive consumers from I/O latency but means a listener can act on state that hasn't been durably persisted yet.

## Mental Model Corrections

- **Nested Trees vs. Flat Keys**: My initial hypothesis assumed a nested JSON tree. The implementation proved that for *correctness* under JSON serialization, the shape doesn't matter, because the full-store serialization makes the write atomic regardless of depth. However, flat prefixed keys are not just cosmetic; they are the required structural bridge to a relational database. By flattening the keyspace (e.g., `"publisher.extension.key"`), the real VS Code was able to migrate to SQLite and execute single-row `UPDATE` commands, completely eliminating the O(total_store_size) full-store serialization penalty observed in Step 2.
- **The Priority Queue is a Logical Impossibility**: I predicted a priority queue for ordering updates within a batch, assuming discrete disk operations. This was falsified. Because the flush mechanism serializes the entire store atomically (`JSON.stringify`), per-key ordering is structurally impossible to observe. The entire state tree hits the disk as a single contiguous byte block.
- **Event Sourcing Solves the Wrong Problem**: I predicted an event-sourced sync queue. This was falsified. I originally assumed that if the state grew to megabytes, the I/O cost of full snapshots would force an append-only log architecture. This was fundamentally flawed. The I/O cost of large state is solved by migrating to a storage engine that supports per-key writes (like SQLite), not by event sourcing. Event sourcing exists to reconstruct state from a history of changes—it is chosen when a system needs auditability, temporal queries, or multi-consumer replay. The deeper reason snapshots win here is that no consumer of `globalState` needs history. Nobody asks what a UI toggle's value was ten minutes ago.
- **Decentralized Disk Management is Bankrupt**: The Step 3 race condition exposed that allowing independent abstractions (`Memento`) to issue raw, concurrent `fs` commands against the same file is fatally flawed. The architecture requires a centralized, shared in-memory object to act as the single source of truth and a structural choke point for disk I/O.

## Connections

- **Write-ahead logging (WAL) in databases**: The tension between write frequency and I/O cost exists in every persistence system. Databases solve it with WAL (append-only log, periodic checkpoint). VS Code solves it with write coalescing (debounced full-store flush). WAL preserves individual write ordering and enables specific transaction recovery; the debounce discards intermediate states and only persists the final snapshot. WAL is necessary when ordering matters; debounce is sufficient when only the latest state matters.
- **React's `setState` batching**: React batches multiple `setState` calls within an event handler into a single re-render—the exact same pattern as batching multiple `update()` calls into a single flush. Both systems decouple the synchronous mutation from the expensive side effect (DOM render / file write), utilizing a deferred execution model to coalesce work within a time window.
- **Kubernetes ConfigMaps and Secrets**: The sync registry (`setKeysForSync`) partitions state into "travels across boundaries" and "stays local"—the same architectural split as Kubernetes separating ConfigMaps (shared configuration) from Secrets (local-only sensitive data). Both are declarative: you label data for its transport scope, and the infrastructure respects the label.
- **The Observer pattern and event-driven invalidation**: `onDidChangeStorage` is a textbook Observer. But the specific choice to emit *before* the flush mirrors cache invalidation in distributed systems, where you invalidate the cache entry immediately on write rather than waiting for the physical write to propagate. The design prioritizes the consistency of notifications over strict durability guarantees.

## Divergences

> *To be completed after verification against the real system.*