# Changelog

## Step 1: The Memento Contract — In-Memory Only

- **Date**: 2026-02-27
- **What I built**: A pure in-memory key-value store implementing the `Memento` API contract, backed by a JavaScript `Map` (`this._cache`), featuring synchronous reads and asynchronous (`Thenable`) writes.
- **What I learned**: The asymmetry between `get()` and `update()` is a structural necessity, not just a preference. To prevent the single-threaded Node.js Extension Host from freezing during slow disk reads, the system is forced to maintain a complete, authoritative in-memory `Map` (`this._cache`) so `get()` can return data synchronously. When `update()` is called, it immediately mutates this cache so subsequent reads are instantly accurate, but it must return a `Promise` because the expensive O(N) serialization and file writing must be delegated to background OS threads.
- **Model correction**: N/A — The in-memory map matches the expected behavior.