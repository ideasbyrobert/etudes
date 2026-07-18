# Changelog

## Step 1 — [S001] Public database construction

- **Date**: 2026-07-16
- **What I built**: A public `Database` value with a public initializer, organized under the `API` source folder, and a focused XCTest that imports `RelationalModel` through its public module boundary.
- **What I learned**: A test using ordinary `import RelationalModel` proves the real framework boundary. Both the type and its initializer must be public; `@testable import` would not prove that contract.
- **Model correction**: I initially wondered whether `API` needed to be a separate target. It is only a physical source folder; the framework target and Swift module remain `RelationalModel`.
- **Evidence**: `DatabaseConstructionTests.testPublicInitializerConstructsDatabase` passed, followed by the complete XCTest suite with 1 test and 0 failures.

## Step 2 — [S002] Boolean value

- **Date**: 2026-07-17
- **What I built**: The internal closed `Value` space with a Boolean case and synthesized equality and hashing, plus a focused XCTest that observes Boolean identity through a `Set<Value>`.
- **What I learned**: A Swift enum case can carry a typed associated value, and `Hashable` synthesis keeps equality and hashed-collection identity aligned. Swift does not promise repeatable numeric hashes across process launches, so persistent determinism must come from a later canonical encoding rather than `hashValue`.
- **Evidence**: `BooleanValueIdentityTests.testEqualBooleanValuesShareSetIdentity` passed, followed by the complete XCTest suite with 2 tests and 0 failures.

## Step 3 — [S003] Integer value

- **Date**: 2026-07-17
- **What I built**: Extended the internal closed `Value` space with an `Int64`-backed integer case and added a focused XCTest that constructs and extracts both signed 64-bit endpoints.
- **What I learned**: `Int64` makes the database's integer width part of the type contract rather than an assumption about the current platform. Enum-case pattern matching recovers the associated payload while preserving the distinction between Boolean and integer forms.
- **Evidence**: `IntegerValueBoundsTests.testSigned64BitBoundsArePreserved` passed for `Int64.min` and `Int64.max`, followed by the complete XCTest suite with 3 tests and 0 failures.
