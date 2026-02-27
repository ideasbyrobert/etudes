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

> *To be completed after implementation (Phase 4).*

## Mental Model Corrections

> *To be completed after implementation (Phase 4). Prompt questions will be provided.*

## Connections

> *To be completed after implementation (Phase 4).*

## Divergences

> *To be completed after verification against the real system.*