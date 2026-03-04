# Changelog

## Step 1: The catastrophe of in-place mutation
- **Date**: 2026-03-04
- **What I built**: A naive flat-file JSON key-value store and a script that benchmarks its write scaling and simulates a mid-write crash.
- **What I learned**: The O(N) rewrite penalty and the crash corruption hole are systemic structural failures. Because `fs.writeFileSync` truncates a file to zero bytes before writing, a crash immediately after truncation permanently destroys both the old and new state. Furthermore, updating a single value requires rewriting the entire file, causing write latency to scale linearly with the total dataset size.
- **Model correction**: I previously thought data corruption from a crash meant reading garbled bytes, but the reality is often much worse: reading an entirely empty file or abruptly truncated JSON that cannot be parsed.
