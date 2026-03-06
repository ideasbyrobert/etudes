# Changelog

## Step 1: The catastrophe of in-place mutation
- **Date**: 2026-03-04
- **What I built**: A naive flat-file JSON key-value store and a script that benchmarks its write scaling and simulates a mid-write crash.
- **What I learned**: The O(N) rewrite penalty and the crash corruption hole are systemic structural failures. Because `fs.writeFileSync` truncates a file to zero bytes before writing, a crash immediately after truncation permanently destroys both the old and new state. Furthermore, updating a single value requires rewriting the entire file, causing write latency to scale linearly with the total dataset size.
- **Model correction**: I previously thought data corruption from a crash meant reading garbled bytes, but the reality is often much worse: reading an entirely empty file or abruptly truncated JSON that cannot be parsed.

## Step 2: The binary record format
- **Date**: 2026-03-04
- **What I built**: Pure functions to encode a string payload into a `u32` length-prefixed `Buffer`, and to decode it back while calculating the exact byte offset of the next entry.
- **What I learned**: Big-endian integers (`UInt32BE`) safely serialize the length of a payload into exactly 4 bytes, creating a reliable boundary marker. Concatenating the header and payload buffers in memory ensures the record can later be written to disk in a single atomic system call, while calculating `nextOffset` during decoding provides O(1) traversal through a contiguous block of binary data.

## Step 3: Append entries to a file with byte-offset tracking
- **Date**: 2026-03-05
- **What I built**: A `WAL` class that opens a file descriptor, initializes its byte offset using file metadata (`fs.fstatSync`), and sequentially writes encoded binary records while tracking and returning their precise starting offsets.
- **What I learned**: By querying the file size on instantiation, the WAL can safely resume appending after a restart without losing its exact positional tracking. Passing the known byte offset into the `writeSync` positional argument formally maps the logical concept of a "message ID" to the physical reality of a byte address on disk.
- **Model correction**: I hadn't considered that the byte offset isn't something generated *after* a write; it is simply the deterministic state of the file length at the exact moment *before* the write occurs. 

## Step 4: Read a single entry at a byte offset
- **Date**: 2026-03-05
- **What I built**: A `readAt(offset)` method on the `WAL` class that performs a two-phase positional read (`fs.readSync`) to fetch the header, decode the length, and fetch the payload, returning both the data and the `nextOffset`.
- **What I learned**: Because the log is append-only, jumping to an exact byte offset completely eliminates the need for an external index. A consumer only needs to store a single integer (its current offset) to resume reading exactly where it left off, making record retrieval an O(1) operation directly against the filesystem.

## Step 5: Scan from an arbitrary offset to end-of-log
- **Date**: 2026-03-06
- **What I built**: A `scanFrom(startOffset, callback)` method that sequentially traverses the log using iterative positional reads, stopping safely at the physical end of the file.
- **What I learned**: Both database crash recovery and message broker consumer resumption rely on the exact same sequential iteration primitive. The only difference is the starting byte offset. Furthermore, the scanning loop inherently anticipates torn-write logic: by evaluating the promised payload length against the physical EOF boundary, the parser starves safely instead of throwing out-of-bounds read errors.



