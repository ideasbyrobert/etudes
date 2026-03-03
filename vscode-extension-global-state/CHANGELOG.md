# Changelog

## Step 1: The Memento Contract — In-Memory Only

- **Date**: 2026-02-27
- **What I built**: A pure in-memory key-value store implementing the `Memento` API contract, backed by a JavaScript `Map` (`this._cache`), featuring synchronous reads and asynchronous (`Thenable`) writes.
- **What I learned**: The asymmetry between `get()` and `update()` is a structural necessity, not just a preference. To prevent the single-threaded Node.js Extension Host from freezing during slow disk reads, the system is forced to maintain a complete, authoritative in-memory `Map` (`this._cache`) so `get()` can return data synchronously. When `update()` is called, it immediately mutates this cache so subsequent reads are instantly accurate, but it must return a `Promise` because the expensive O(N) serialization and file writing must be delegated to background OS threads.
- **Model correction**: N/A — The in-memory map matches the expected behavior.

## Step 2: File-Backed Persistence — Naive Immediate Writes

- **Date**: 2026-03-02
- **What I built**: A `StorageBackend` using Node's built-in `fs` module that wires directly to the `Memento` cache. Every `update()` call triggers an immediate `JSON.stringify()` serialization and a full asynchronous file overwrite. I also implemented a `writeCount` tracker to explicitly observe the physical I/O cost.
- **What I learned**: Naive immediate writes expose the severe physical friction between variable-length data (JSON) and contiguous file storage. Because a file is a contiguous stream of bytes , changing a value to be longer or shorter means you cannot simply update those specific bytes in place—doing so would overwrite adjacent JSON syntax (like quotes or braces) and corrupt the file. Unlike SQL database engines that use slotted pages and pointers to manage variable-length data in place , standard file system APIs lack an "insert and shift" capability. Consequently, the only safe way to mutate a JSON file is to rewrite the entire thing from scratch. Observing five sequential, tiny key updates trigger five complete, full-file disk overwrites proved that this O(N) penalty causes catastrophic I/O amplification.
- **Model correction**: N/A — This physical constraint proves the initial hypothesis: without an application-layer write queue (debouncing) to batch these operations, the system is fundamentally unsustainable.