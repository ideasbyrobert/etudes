# Relational Model Étude

## Subject

A persistent, null-free relational database engine built in Swift, from SQL text and logical relations down to pages, indexes, transactions, concurrency control, and crash recovery. Its ambition is to expose SQL-Server-class mechanisms through a deliberately smaller, incompatible product surface.

## Product Interpretation

“SQL Server without NULL” names the mechanism class and seriousness of the product, not a compatibility promise. The engine will contain SQL text, catalog metadata, constraints, planning, indexes, transactions, concurrency control, and recovery. It will not claim T-SQL syntax, bag semantics, wire-protocol compatibility, file-format compatibility, a network service, security administration, or feature parity with SQL Server.

SQL Server, PostgreSQL, SQLite, and ARIES are correspondence sources for named mechanisms. None of them is the product specification, and none is being audited by this étude.

XCTest is the first client interface. Deferring a CLI, GUI, and network server keeps the learning boundary small without reducing the database engine beneath it.

## Core Question

Can a small database engine preserve a total relational model from query text to durable bytes: representing incomplete knowledge without NULL, enforcing domains and cross-relation integrity, evaluating a useful relational language, choosing physical access paths, and making every committed transition atomic, durable, isolated, and recoverable?

A secondary question is whether the additional joins introduced by null-free schema decomposition can be offset by simpler two-valued logic, denser tuple layouts, narrower relations, indexes, and cost-based planning. That is a performance hypothesis to measure, not a conclusion to assume.

## Hypothesis

### Semantic hypothesis

Within the finite, set-valued, total-key relational core defined here, optional non-key facts and explicitly named knowledge states can be represented without NULL. The absence of a fact can be represented by the absence of a tuple in a separate relation. When an application must distinguish false, unknown, inapplicable, and not-yet-recorded propositions, those classifications can be modeled explicitly with separate relations and integrity constraints rather than being collapsed into one distinguished marker.

The proof investigation establishes closure and representational results only for the defined logical core. It does not establish that every real-world epistemic state has been modeled correctly, that every database workload is first-order, or that the future Swift implementation already conforms.

### Implementation hypothesis

Every stored tuple and every implementation-produced tuple can preserve the same totality invariant: each attribute contains exactly one value from its declared domain. Schema metadata defines the legal database states. Every load, statement, cascade, and transaction can be evaluated as a candidate transition from one legal state to another. A transition becomes visible only if its complete result satisfies all relevant domains, keys, checks, foreign keys, assertions, and transactional rules. A rejected transition leaves the previously committed logical instance unchanged. Allocator high-water marks, WAL records, and other invisible physical metadata may advance without publishing relational facts; those effects must be documented and recovered consistently.

The same logical contract can first be demonstrated transparently with JSON arrays and then preserved when the internal representation is replaced by binary pages, a buffer pool, B+ tree indexes, and a write-ahead log. If the behavior remains unchanged across those representations, the implementation will provide evidence of the physical data independence described by the ANSI/SPARC architecture.

### Transaction and recovery hypothesis

If every logical conflict, including predicate gaps, is covered by the stated locks and those locks are held through transaction end, strict two-phase locking should make committed histories conflict-serializable. Write-ahead logging, page log sequence numbers, redo, undo, and restartable recovery should ensure, under the stated storage fault model, that an acknowledged commit survives reopening while loser work does not remain in recovered state.

### Performance hypothesis

The null-free design may remove null bitmaps, null-aware comparisons, and three-valued predicate branches, but decomposition can introduce more relations and joins. Independently decomposing `k` optional attributes yields one identity relation and as many as `k` value relations; a query reconstructing every optional attribute may therefore require as many as `k` joins. This is a worst-case schema shape, not a mandatory normal form. Facts that share applicability and lifecycle may be grouped into one total relation, and a query requesting only a subset need not touch the others.

Every performance experiment compares two fixtures encoding the same finite facts: the product's decomposed total schema and a benchmark-only nullable-row control. The control is not admitted to the product model. Both fixtures use matched scalar encodings, page size, cache budget, indexes, durability policy, transaction schedule, and requested logical output. Cold-cache and warm-cache runs are reported separately. Before execution, each workload names its primary metric and tolerance. Measurements include bytes per tuple, tuple density, pages read and written, index probes, join work, WAL bytes, planning time, CPU time, elapsed time, and durable commit cost. No general performance claim is made by selecting whichever counter favors the design after measurement.

### Usability hypothesis

For a pilot cohort of at least eight participants with basic SQL and Swift competence, the null-free interface will support the same required outputs as conventional nullable SQL without forcing a sentinel or nullable domain field into the Swift client. The investigation must use a preregistered crossover design, counterbalanced condition order, and the same six tasks in both conditions: optional-fact modeling, known-versus-inapplicable classification, matched and unmatched retrieval, empty aggregation, atomic update, and dirty intake. Before the first participant, a separate protocol artifact must fix the exact prompts, scoring rubric, task denominator, definitions of hint and error, exclusions, missing-data handling, and counterbalancing sequence.

The hypothesis is supported for that cohort only if at least 80 percent of null-free tasks finish correctly without hints, median task time is no more than 125 percent of the nullable control, the error rate is no more than ten percentage points worse, and no task requires a sentinel or nullable domain field to recover the intended meaning. Query length, statement count, explicit transaction boundaries, client branching, errors, task time, and participant explanations are preserved before any conclusion is written. This is an empirical pilot, not a theorem or a claim of universal ergonomic superiority.

## Falsification Criteria

The study separates failures by the claim they challenge.

### Semantic-hypothesis falsifiers

- A valid fact within the declared model cannot be represented without a sentinel value.
- The language cannot express matched facts, unmatched facts, and explicitly modeled incomplete knowledge using joins, semi joins, anti joins, set operations, or existence predicates.

### Logical-refinement failures

- An invalid schema or database state is accepted.
- A stored or implementation-produced tuple lacks an attribute value.
- Any operator silently introduces NULL, missing fields, duplicate tuples, or three-valued logic.
- A failed load, statement, cascade, or transaction partially changes visible state.
- An index scan returns a different relation from the equivalent heap scan.
- Two physical plans for the same logical query return different relations.
- Malformed SQL, malformed JSON, or corrupted storage is accepted through silent coercion.

### Transaction and recovery contract failures

- An acknowledged commit is lost after reopening or recovery within the declared fault model.
- Loser data becomes visible or remains after recovery.
- A concurrent execution produces a history that is not equivalent to an allowed serial execution.
- A detected deadlock fails to abort and completely roll back the deterministic victim.
- Recovery cannot safely restart after recovery itself is interrupted.

### Unsupported performance hypothesis

The performance hypothesis is unsupported for a preregistered workload whenever the decomposed fixture exceeds that workload's fixed tolerance against the matched nullable-row control. A loss or inconclusive result is preserved rather than reclassified after measurement.

### Unsupported usability hypothesis

The usability hypothesis is unsupported for the pilot cohort if any preregistered threshold fails: fewer than 80 percent of null-free tasks finish correctly without hints, median task time exceeds 125 percent of the nullable control, the error rate is more than ten percentage points worse, or any task requires a sentinel or nullable domain field to recover the intended meaning. Mathematical coherence does not rescue an unusable interface.

Falsification is a result of the étude, not a reason to conceal or redefine the experiment.

## Relational Contract

### Values and domains

The initial scalar domains are BOOLEAN, INTEGER, DECIMAL, TEXT, DATE, TIMESTAMP, and BLOB.

- INTEGER is a checked signed 64-bit value.
- DECIMAL has precision from 1 through 38, scale from 0 through its precision, and checked fixed-point arithmetic. An exact result that does not fit its declared result domain fails; the engine never rounds implicitly.
- TEXT is validated UTF-8 stored and compared as bytes without Unicode normalization. Equality and ordering use unsigned lexicographic byte order unless a future collation is explicitly declared.
- DATE is a proleptic Gregorian calendar date from 0001-01-01 through 9999-12-31 without a time zone.
- TIMESTAMP is an exact UTC instant in the same year range with microsecond precision. Text input requires an explicit `Z` offset, and leap seconds are excluded.
- BLOB is an uninterpreted byte sequence.
- Floating-point NaN and infinity are not part of the initial model.
- No implicit type conversion is permitted.
- Overflow, division by zero, invalid encoding, and invalid dates are structured errors that abort the statement.

JSON import is schema-directed. JSON booleans map to BOOLEAN, integral numbers that fit map to INTEGER, and strings are validated against TEXT, canonical DECIMAL, DATE, TIMESTAMP, or base64 BLOB according to the declared domain. JSON null and nonintegral JSON numbers are rejected in the initial format.

### Tuples and relations

A heading is a finite set of uniquely named typed attributes. A tuple contains exactly one value for every attribute in its heading. A relation is a heading plus a finite set of distinct tuples. Any canonical attribute order retained for encoding, diagnostics, or presentation is representation metadata rather than relational meaning.

Base relations require an explicit, composite-capable primary key. Alternate keys may be declared with UNIQUE constraints. Surrogate identifiers may be generated by the engine, but they identify a fact or entity only inside the database and do not erase independently known business uniqueness constraints. Generated identities are monotonically allocated, never reused, and may contain gaps after failed or aborted work.

Relations have set semantics. Duplicate base tuples and duplicate query-result tuples do not exist. Projection may reduce cardinality when formerly distinct tuples become equal. If multiplicity is meaningful in reality, it must be represented explicitly as data rather than hidden in bag semantics.

Relation order is never meaningful. ORDER BY is an external presentation operation over a completed result, not part of the relation itself. LIMIT is valid only when the ORDER BY expressions establish a total order, including deterministic tie breakers.

### Absence and incomplete knowledge

NULL has no accepted semantic form in this engine: it is not a value, storage marker, or result state. The lexer and import decoder may recognize a forbidden NULL token solely to reject it precisely with a source-located diagnostic.

The absence of a tuple means only that the database does not assert that tuple. It does not universally mean false, unknown, or inapplicable. The schema must state enough facts and constraints to make the intended interpretation defensible.

For example, selective-service information may be represented by these relations:

```text
Person(PersonID)
SelectiveServiceApplicable(PersonID)
SelectiveServiceInapplicable(PersonID)
SelectiveServiceRegistration(PersonID, IsRegistered)
```

The applicability relations are mutually exclusive. Registration references the applicable relation. The schema classifies an applicable person with no known registration tuple as applicable-without-known-registration. A person in the inapplicable relation is classified as inapplicable. A person in neither relation remains unclassified for applicability unless an assertion requires every person to be classified.

This distinction is deliberate: schema decomposition must make its remaining ambiguity and completeness assumptions explicit rather than silently relocating them. The schema classifications do not by themselves prove that the modeled propositions match reality.

### Constraints

The engine contract requires exact headings, domains, checks, primary keys, alternate keys, foreign keys, and database assertions. Foreign-key components are always total; there is no NULL bypass rule.

Referential actions are NO ACTION and CASCADE for updates and deletes. SET NULL does not exist. Schema definition rejects a referential-action graph containing a CASCADE cycle. Cascades over the resulting acyclic graph are planned and validated as one transaction before any result becomes visible.

Assertions express cross-relation invariants as named queries that must return no violating tuples. Constraint evaluation is immediate in the initial engine. A constraint failure automatically aborts and rolls back the current transaction.

### Query semantics

Predicates use ordinary two-valued Boolean logic. Equality is reflexive for every value in a domain. The language contains no UNKNOWN truth value.

The relational language includes selection, projection, rename, inner join, cross join, semi join, anti join, UNION, INTERSECT, EXCEPT, EXISTS, NOT EXISTS, grouping, and aggregates. LEFT, RIGHT, and FULL OUTER JOIN do not exist because no operator may manufacture an incomplete tuple.

Null freedom requires an explicit empty-input aggregate contract; it does not mathematically force one particular choice. This language chooses: COUNT over an empty ungrouped input returns one tuple containing integer zero. SUM over an empty ungrouped input returns one tuple containing the typed additive identity for a domain on which SUM is declared. AVG, MIN, and MAX over an empty ungrouped input fail with a structured undefined-aggregate error. A grouped aggregate over an empty input returns an empty relation because no groups exist.

Aggregation consumes input tuples rather than first deduplicating the projected scalar values. Distinct input tuples may therefore contribute equal scalar values to one group. A successful aggregate statement returns complete typed tuples; an undefined aggregate, overflow, or conversion failure aborts before publication. A partial operation is not permitted to manufacture a partial tuple.

### Transaction semantics

Every statement runs in an implicit transaction unless it belongs to an explicit transaction. Any error aborts the entire current transaction, undoes its effects, and releases its locks. A caller never continues inside a transaction whose validity is uncertain.

The initial isolation contract targets serializability through strict two-phase locking. Read and write locks are held until commit or abort. Indexed predicates use key-range locks; unindexed scans hold a shared table lock. If every logical conflict, including predicate gaps, is covered by those locks, the resulting histories are conflict-serializable. A wait-for graph must eventually detect cycles and completely roll back the youngest transaction selected from each detected cycle.

The storage policy is steal/no-force. Dirty uncommitted pages may be evicted, and committed pages need not be forced at commit. Therefore the log must support both undo and redo. The write-ahead rule is absolute: the log record protecting a page change must be durable before that page may reach the database file.

## Language Boundary

The engine implements a deliberately small, custom SQL-inspired language. It is not a compatibility layer for SQL Server, SQLite, or PostgreSQL.

The first complete language includes:

- CREATE TABLE, DROP TABLE, CREATE INDEX, DROP INDEX, CREATE VIEW, DROP VIEW, CREATE ASSERTION, and DROP ASSERTION.
- INSERT, UPDATE, and DELETE.
- SELECT with expressions, aliases, WHERE, joins, EXISTS and NOT EXISTS subqueries, GROUP BY, HAVING, set operations, ORDER BY, and LIMIT.
- BEGIN, COMMIT, and ROLLBACK.
- ANALYZE and EXPLAIN.
- Positional bound parameters whose values are supplied separately from SQL text.
- Structured diagnostics with source spans for lexical, syntactic, binding, type, constraint, storage, and transaction errors.

The language deliberately rejects:

- NULL, NOT NULL, IS NULL, IS NOT NULL, COALESCE, NULLIF, and nullable columns.
- LEFT, RIGHT, and FULL OUTER JOIN.
- UNION ALL and hidden bag semantics.
- Silent type coercion.
- Nondeterministic LIMIT without ORDER BY.
- String interpolation as a parameter-binding mechanism.

## Architecture

The engine follows the lecture's separation between external, conceptual, and internal concerns.

- The language layer tokenizes SQL text, produces syntax trees, binds names and parameters, checks domains, and reports source-located errors.
- The conceptual layer stores headings, domains, keys, constraints, assertions, and views in a catalog. It produces logical relational plans independent of storage.
- The optimizer transforms logical plans into physical plans using catalog statistics and a small cost model.
- The execution layer evaluates physical operators and produces complete result relations.
- The internal layer stores the catalog, heap tuples, and indexes in 4096-byte, versioned pages with CRC32C checksums and big-endian integer fields.
- The buffer pool maps durable pages to memory and tracks pin counts, dirty state, and page log sequence numbers.
- The transaction layer coordinates locks, write-ahead logging, commit, rollback, checkpoints, and recovery.
- The WAL bridge runs the completed JavaScript append log as one internal Node.js helper process. JavaScript owns outer record framing, byte offsets, sequential scanning, torn-tail repair, and physical synchronization. Swift owns every database-specific log-record meaning.

JSON is a transparent bootstrap and interchange representation. The atomic unit is one versioned database envelope containing named relation arrays, imported against an already validated catalog. Any invalid relation rejects the whole envelope. Canonical export sorts relation names, fields by catalog encoding order, and tuples by canonical encoded values so repeated exports are byte-reproducible. Raw JSON has no legality by itself, and JSON is not the final storage engine. The same logical contract tests must pass first against the in-memory representation and later against the page-backed representation.

The totality invariant begins at the database admission boundary, not at raw byte decoding. Import may recognize omitted fields, JSON null, malformed values, and unresolved identifiers solely to produce source-located diagnostics. Unless schema-directed validation produces a legal total database transition, no relational state changes. The initial engine does not retain rejected records. A later intake subsystem may retain them in total quarantine relations keyed by an engine-generated `IntakeID`, with raw payload, provenance, validation findings, and eventual entity-resolution mappings represented as separate total facts. Such quarantine data becomes relational state only after it satisfies its own declared schema.

## Reliability Posture

The engine is designed fail-closed.

- External input is never trusted merely because it decoded.
- Every persistent structure has a magic value, format version, explicit lengths, bounds checks, and a checksum.
- Every public failure is a structured error; malformed input must not rely on a crash, force unwrap, unchecked cast, or assertion failure for control flow.
- Parsing, binding, planning, and execution are deterministic for identical text, parameters, catalog state, database state, and controlled transaction schedule.
- Every mutation has an all-or-nothing test.
- Every physical optimization is checked against a simpler logical oracle.
- Fault injection covers allocation failure, short read, short write, torn log tail, corrupted checksum, interrupted commit, interrupted checkpoint, and interrupted recovery.
- Concurrency tests use controlled schedules rather than timing guesses.
- Randomized tests record their seed so every failure is reproducible.

This étude does not claim novelty, production readiness, security certification, or suitability for safety-critical deployment. Those claims would require independent specification, threat analysis, code review, platform qualification, long-running stress tests, and evidence outside this learning workspace. The ambition here is to build mechanisms whose guarantees are precise enough to be challenged.

### Storage fault model

Durability claims assume one Swift database process and one local Node.js WAL helper process on the same macOS host, correctly implemented Foundation and Node.js file APIs, stable filesystem naming after the required file and directory synchronization boundaries, and storage that honors successful synchronization requests. The engine must tolerate short reads and writes, termination of either process, torn or truncated WAL tails, bridge interruption, and corrupted or torn database pages detectable by checksums while the protecting WAL remains available. It does not claim survival of undetected corruption, controller lies, simultaneous loss of both database and required WAL, media destruction, kernel or filesystem defects, or Byzantine storage.

CRC32C detects accidental corruption; it does not repair it. WAL recycling may discard a protecting record only after the corresponding page state is durable and no supported recovery path still requires that record.

## Build First, Audit Later

This étude constructs and investigates Robert's own engine. Comparative vendor audits, claims about external products, and evaluations of public-safety deployments are separate later projects. Such work must begin with explicit authorization, first-order evidence, exact versions and configurations, provenance, a threat model, a responsible-disclosure process, and claim language limited to what was actually examined.

Course notes and external database documentation are correspondence sources here, not audit targets. No result in this étude establishes a claim about another organization, deployed system, or safety outcome.

## Scope Boundary

### Included

- Total scalar domains, complete tuples, and set-valued relations.
- Explicit schema decomposition for optional and incomplete facts.
- Primary, alternate, surrogate, and foreign keys.
- Check constraints, cross-relation assertions, and atomic cascades.
- Relational algebra, joins, grouping, aggregates, and views.
- A custom null-free SQL lexer, parser, binder, planner, and executor.
- JSON import and export with whole-operation validation.
- Versioned binary tuple and page formats with checksums.
- Heap files, slotted pages, a buffer pool, and free-space reuse.
- Composite-capable B+ tree indexes.
- Statistics, access-path selection, join algorithms, and cost-based planning.
- Transactions, strict two-phase locking, intention locks, row locks, range locks, lock upgrades, and deadlock detection.
- Write-ahead logging, steal/no-force buffering, checkpoints, redo, undo, compensation records, and restartable recovery.
- A local process bridge to the completed prerequisite WAL implementation.
- Deterministic fault injection, model-based testing, parser and file fuzzing, and performance measurement.

### Deferred

- A command-line interface, graphical interface, application executable, or network server. XCTest is the only interface in this étude.
- Multiple processes opening the same database concurrently.
- Authentication, authorization, encryption, key management, and auditing.
- Replication, distributed transactions, consensus, sharding, and high availability.
- MVCC and snapshot isolation; the first concurrency model is strict two-phase locking.
- ALTER TABLE, online schema migration, and online index construction.
- Stored procedures, triggers, recursive queries, window functions, and user-defined types.
- Locale-sensitive collations and floating-point domains.
- Compression, columnar storage, vectorized execution, and distributed planning.
- Backup tooling, point-in-time restore tooling, and operational administration.
- Machine-checked formal verification of the Swift implementation or certification.
- Comparative vendor auditing, external-system assessment, and public-safety deployment evaluation.

These are deferred so the first engine can make a narrow set of guarantees completely. They are not dismissed as unimportant.

## Prerequisites

### Completed prerequisite étude

`prereq-write-ahead-log` is complete and is reused as an executable prerequisite. Its JavaScript implementation remains the owner of length-framed outer records, stable byte offsets, sequential scan, fsync as the durability boundary, torn-tail repair, and replay. The relational-model engine reaches it through a thin local Node.js bridge rather than porting those already learned mechanisms into Swift.

Swift owns the database-specific payload inside each outer record: transaction identifiers, record kinds, previous-record links, page identifiers, checksums, redo information, undo information, compensation metadata, and checkpoint contents. The JavaScript layer does not interpret database meaning, and the Swift layer does not duplicate outer framing, tail repair, or physical WAL synchronization. The returned outer byte offset is the log sequence number.

This cross-language boundary is intentional. A completed prerequisite is reused when rewriting it would repeat an already completed lesson rather than expose a new mechanism. The curriculum owns the source code; the source code does not own the curriculum.

### Inlined prerequisites

- Swift enums and value semantics for closed state spaces and tentative copies.
- Codable and JSONSerialization for the initial interchange boundary.
- Data, FileHandle, and explicit integer encoding for durable bytes.
- Process, Pipe, request identifiers, and base64 payload transfer for the local Swift-to-Node WAL bridge.
- Node.js latest LTS and built-in modules for the bridge and completed WAL implementation.
- CRC32C checksumming with published test vectors as a small inlined helper.
- Throwing functions and structured error enums for fail-closed behavior.
- Swift actors and async tasks for controlled transaction concurrency.
- XCTest assertions, temporary directories, expectations, and performance measurements.
- Graph traversal for cascade planning and deadlock detection.

The lexer, parser, relational algebra, slotted pages, B+ tree, optimizer, lock manager, and recovery manager are not prerequisites to bypass. They are central mechanisms this étude exists to expose and will be built incrementally inside it.

No external package is permitted in either runtime. The Swift side uses system frameworks only. The JavaScript side uses the completed local prerequisite module and Node.js built-ins only.

## Environment and Working Agreement

- The project is an Xcode framework with an XCTest target.
- The language mode is Swift 6.
- Node.js latest LTS executes the reused WAL implementation through an internal helper process.
- The supported platform is macOS only.
- Foundation and XCTest are the only Swift frameworks used. The JavaScript bridge uses Node.js built-ins only.
- There is no application executable target, CLI, GUI, network server, or back door around the tests. The Node.js WAL helper is an internal engine component, not a product interface.
- All new Swift and JavaScript uses Allman braces and contains no comments.
- The user types every line of implementation code and every changelog entry, runs every test, and performs every commit.
- Codex may reconcile study and planning documents only when the user explicitly requests it. For implementation, Codex supplies only the current focused failing test, the minimum production-code delta, the exact Xcode test action, the expected observation, and the mechanism explanation.

A Swift actor may coordinate lock-manager state, but complete transaction execution must not be serialized inside one actor. The concurrency study requires independently scheduled transactions whose lock requests interact through that coordinator.

Every construction experiment follows this loop:

1. Add one focused failing XCTest.
2. Run only that test and observe the intended failure.
3. Type the minimum production code that addresses the failure.
4. Run the focused test until it passes.
5. Run the complete test suite.
6. Update CHANGELOG.md with what was built, learned, and corrected.
7. Explain the mechanism before beginning the next step.

No construction experiment begins until the previous experiment is green and understood. If a capability milestone cannot fit in one sitting, it is decomposed before implementation rather than rushed.

## Stable Behavioral Interface

Tests will eventually exercise a small public boundary:

- Create or open a database in a supplied directory.
- Execute one SQL statement with separately bound positional values.
- Begin an explicit transaction and execute statements through it.
- Commit or roll back the transaction.
- Receive exactly one statement result: a complete result relation, an explicitly ordered result sequence, an affected-row count, a schema-change acknowledgement, or a structured error.
- Close and reopen the database without changing logical behavior.

Internal types and names may evolve, but these behaviors remain the contract shared by the in-memory and persistent implementations.

Matched and unmatched facts are obtained through separate well-typed SELECT statements. The mathematical pair used to describe their partition is not a first-class query result and does not create a heterogeneous family-of-relations API. When both results must describe the same database state, the caller executes both statements inside one explicit transaction. Whether this two-query workflow is pleasant enough is an empirical usability question.

## Changelog Format

CHANGELOG.md is a learning journal, not a git log. The user adds one entry only after a construction experiment's focused test and full suite pass, or after an investigation experiment preserves its fixed method and raw observations:

```text
## Milestone M, Experiment E: Experiment Name

**Date**: YYYY-MM-DD
**What I built**: One sentence.
**What I learned**: The mechanism and design pressure exposed by the experiment.
**Model correction**: Optional; what I previously misunderstood.
**Evidence**: The focused test, full-suite result, fault schedule, or measurement that supports the entry.
```

## Capability Roadmap

The numbered entries below are dependency-ordered product capabilities, not one-sitting implementation steps. When a milestone becomes current, it is decomposed into construction or investigation experiments small enough to satisfy the methodology gate. Only the current focused experiment is supplied to the actual étude.

Assurance is introduced with the mechanism it observes rather than bolted on at the end. The relational core grows a model oracle, the parser grows recorded-seed generators, every file boundary grows deterministic fault injection, every index and join grows a metamorphic comparison, and every lock mode grows a controlled schedule. Phase G completes those matrices across the integrated engine.

### Manual starting gate

Before Swift mechanism work begins, Robert manually adopts and revises the framing through Environment and Working Agreement, writes the hypothesis in his own words, and changes at least one roadmap ordering decision. The only initial implementation horizon is Capability Milestone 1, decomposed into its first focused red-green experiment.

### Phase A: Total relational state

1. **Establish the XCTest harness.** Expose the smallest library value and verify it from the test target. Observable: one intentional red test becomes green and the full suite runs without an executable.
2. **Represent total scalar values.** Introduce the closed value space without a null case. Observable: valid values compare deterministically and there is no way to construct NULL.
3. **Enforce domains.** Add BOOLEAN, INTEGER, DECIMAL, TEXT, DATE, TIMESTAMP, and BLOB validation with checked operations. Observable: mismatched, overflowing, or malformed values fail without changing state.
4. **Represent headings and complete tuples.** Require exact attribute names and one value per attribute. Observable: missing, unknown, or duplicate attributes are rejected.
5. **Represent relations with set semantics.** Store distinct tuples under one heading. Observable: inserting an existing base tuple is an error, while relational operators eliminate duplicates rather than creating hidden multiplicity.
6. **Enforce primary and alternate keys.** Support single and composite keys. Observable: duplicate key tuples are rejected atomically.
7. **Enforce checks.** Evaluate named two-valued predicates over candidate tuples. Observable: a failed check identifies its constraint and preserves the prior relation.
8. **Create the catalog and surrogate identities.** Register schemas and generate stable identifiers when declared. Observable: identities remain stable when business attributes change and are not silently reused.
9. **Enforce foreign keys.** Validate references to primary or alternate keys across relations. Observable: dangling references fail and total composite references require every component.
10. **Make insertion atomic across the database.** Validate a candidate database transition before publishing it. Observable: any domain, key, check, or reference failure implemented so far leaves every relation unchanged.
11. **Make update and delete atomic.** Revalidate all affected invariants before publishing changes. Observable: multi-row failure rolls back every affected tuple.
12. **Implement NO ACTION and CASCADE.** Plan multi-relation referential effects over the schema's acyclic cascade graph. Observable: a cascade commits completely or leaves the database untouched.
13. **Implement selection, projection, and rename.** Produce new complete relations without mutating inputs. Observable: the GTOnline Atlanta-and-salary query returns only the requested attributes.
14. **Implement UNION, INTERSECT, and EXCEPT.** Require compatible headings and set semantics. Observable: incompatible operands fail and valid operations contain no duplicates.
15. **Implement cross and inner joins.** Combine only matching complete tuples. Observable: joins produce complete tuples with the expected heading and cardinality.
16. **Implement semi joins, anti joins, EXISTS, and NOT EXISTS.** Express presence and absence without padded rows. Observable: unmatched facts are returned as complete tuples from the preserved relation.
17. **Implement grouping and aggregates.** Enforce the chosen empty-input behavior. Observable: COUNT and SUM return zero where defined, while empty AVG, MIN, and MAX fail explicitly.
18. **Add cross-relation assertions.** Require named violation queries to return an empty relation. Observable: mutually exclusive applicability relations and other business invariants are enforceable after the required relational operators exist.
19. **Import and export JSON atomically.** Treat the versioned database envelope and its relation arrays as untrusted interchange state. Observable: an envelope containing JSON null, malformed rows, or one invalid relation changes nothing, and canonical export is byte-reproducible.

### Phase B: Text becomes relational intent

20. **Tokenize the language.** Recognize identifiers, keywords, literals, operators, parameters, and exact source spans. Observable: malformed characters produce located lexical errors.
21. **Parse scalar expressions and predicates.** Build an AST with precedence and two-valued logic. Observable: ambiguous or incomplete expressions fail at the correct span.
22. **Parse SELECT and relational operators.** Cover joins, grouping, set operations, order, and limit as milestone-level grammar slices. Observable: accepted text produces a deterministic syntax tree and rejected NULL or OUTER JOIN syntax fails deliberately.
23. **Parse DDL, DML, and transaction statements.** Cover the declared language boundary. Observable: each statement kind has a typed syntax representation rather than string inspection.
24. **Bind base names and parameters.** Resolve base relations, attributes, aliases, and separately supplied positional values against the catalog. Observable: missing and ambiguous names fail before execution, and hostile parameter text remains data.
25. **Type-check expressions and results.** Derive domains without coercion. Observable: invalid comparisons and arithmetic fail before reading or mutating data.
26. **Build logical plans.** Translate bound syntax into relational operators independent of storage. Observable: equivalent surface forms produce the same logical intent.
27. **Execute logical plans in memory.** Connect SQL text to the relational core. Observable: parsed queries and mutations match the direct relational API.
28. **Add views and text-level assertions.** Store derived definitions in the catalog, extend binding only after core execution exists, and reject dependency cycles. Observable: views remain virtual, assertions govern mutations, and cyclic definitions fail before execution.

### Phase C: Relations become durable pages

29. **Define a storage contract.** Place the in-memory implementation behind the same behavior expected from persistence. Observable: one contract test suite runs against the memory backend.
30. **Encode and decode values and tuples.** Define explicit, versioned binary layouts and bounds checks. Observable: every supported value round-trips byte-for-byte and malformed encodings fail closed.
31. **Define the database header and page identity.** Record magic bytes, format version, page size, database identity, and checkpoint location. Observable: incompatible or corrupted headers are rejected before page access.
32. **Build checksummed slotted pages in memory.** Store variable-length tuples with stable slot identifiers and compactable free space. Observable: insertion, deletion, compaction, and checksum failure are independently testable without file-system state.
33. **Build the page-file boundary.** Allocate, read, write, and reuse fixed-size pages with short-I/O handling and synchronization points. Observable: page bytes survive close and reopen, and every I/O boundary is fault-injectable.
34. **Build the buffer pool over the page file.** Add pin counts, dirty tracking, deterministic clock eviction, and explicit flush control. Observable: pinned pages cannot be evicted and clean reloads preserve bytes.
35. **Build buffered heap relations and persist the catalog.** Store stable record identifiers, relation tuples, and schema metadata over protected buffered pages. Observable: the shared storage contract suite passes against both memory and disk backends. This capability is decomposed into separate heap, catalog, and contract experiments when reached.

### Phase D: Durable transactions and recovery

36. **Bridge to the completed WAL and encode database log records.** Run the completed JavaScript module through a local Node.js adapter for outer framing, append offsets, scanning, torn-tail repair, and synchronization. Encode checksummed database payloads in Swift with transaction IDs, record kinds, previous-record links, page IDs, and log sequence numbers. Observable: complete records cross the bridge and scan deterministically, torn outer tails are repaired by the reused WAL, and corrupted inner records are rejected by Swift.
37. **Add transaction identity, lifecycle, and explicit abort.** The in-memory oracle may publish candidate copies; the persistent backend records logged in-place changes with undo information. Observable: explicit rollback restores logical relations and catalog state without pretending steal/no-force pages were isolated copies.
38. **Log page mutations and previous-record chains.** Associate each persistent change with its transaction and `prevLSN`. Observable: the complete history of one transaction can be traversed backward without scanning unrelated records.
39. **Enforce write-ahead page flushing.** Add page LSNs and prevent a dirty page from reaching disk before its protecting log record. Observable: an injected ordering violation is detected by the test harness.
40. **Establish the durable commit boundary.** Flush a commit record before acknowledging success and synchronize required naming metadata for newly created files. Observable: injected failure before durability is never reported as committed.
41. **Implement recovery analysis and idempotent redo.** Reconstruct transaction and dirty-page state, choose the redo start, and repeat history only when a page LSN shows the change is absent. Observable: winners, losers, and redo starting points are identified, and running redo twice produces identical pages. This milestone becomes separate analysis and redo experiments when reached.
42. **Implement undo and compensation records.** Reverse loser transactions while recording restartable progress. Observable: recovery interrupted during undo can restart and finish correctly.
43. **Add fuzzy checkpoints and safe WAL recycling.** Bound recovery work and reclaim only log segments no supported recovery path still needs. Observable: reopening from a checkpoint yields the same state and never removes required recovery records. Checkpoint construction and recycling are separate experiments within this milestone.

### Phase E: Indexes and physical planning

Milestones 44 through 47 develop index structures against isolated disposable fixtures. An index is not registered for query use or treated as durable database state until transactional heap-index maintenance is established in Milestone 48.

44. **Build B+ tree leaf pages.** Search and insert ordered key-to-record entries. Observable: lookup and range scan match a heap-scan oracle.
45. **Add internal nodes and splits.** Grow the tree while preserving separator and sibling invariants. Observable: forced multi-level splits retain every entry in sorted order.
46. **Add deletion, redistribution, merge, and root contraction.** Rebalance underfull pages and contract the root safely. Observable: adversarial deletion sequences preserve reachability and ordering. Each structural case becomes its own focused experiment when reached.
47. **Support composite, unique, and non-unique indexes.** Encode deterministic keys and duplicate record identifiers where allowed. Observable: each index agrees with the corresponding relation and constraint.
48. **Maintain indexes transactionally.** Log heap and index changes as one atomic unit. Observable: abort and crash recovery never leave an index disagreeing with its heap.
49. **Implement physical scans and unary operators.** Add heap scan, index scan, filter, project, aggregate, in-memory sort, and then separately spillable external sort. Observable: every physical operator matches its logical oracle, and temporary spill files are cleaned after success and failure.
50. **Implement physical join algorithms.** Add nested-loop, index nested-loop, hash, and merge variants one algorithm and join kind at a time for inner, semi, and anti joins. Observable: every algorithm returns the same relation for the same logical join.
51. **Collect statistics.** Record cardinality, distinct counts, ranges, compact histograms, and presence rates for optional-fact relations through ANALYZE. Observable: estimates are inspectable and refresh after data changes.
52. **Choose access paths by cost.** Compare heap scans with primary-key, foreign-key, and secondary-index probes using estimated I/O and CPU work. Inline views and eliminate unused optional-fact joins before costing. Observable: plan choice changes predictably with data and statistics while results do not.
53. **Choose join order and algorithms by cost.** Use dynamic programming for small join sets and a deterministic fallback for larger ones. Permit join elimination only when declared keys and references prove it sound. Observable: EXPLAIN exposes every chosen or eliminated join and its justification without executing the query.

### Phase F: Serializable concurrency

54. **Add table locks and strict two-phase locking.** Hold shared and exclusive locks through transaction end. Observable: controlled schedules prevent dirty reads and lost updates.
55. **Add wait-for deadlock detection.** Every blocking table-lock request enters a wait-for graph, and detected cycles choose the youngest victim. Observable: the first blocking lock manager terminates controlled deadlocks and completely rolls back exactly one victim.
56. **Add intention and row locks.** Support IS, IX, S, SIX, and X table modes with S and X row modes. Observable: compatible transactions proceed while conflicting ones wait under the already terminating lock manager.
57. **Add lock upgrades and key-range locks.** Add upgrade rules, indexed predicate ranges, and insertion gaps as separate experiments. Observable: upgrades do not create unhandled cycles and controlled schedules prevent phantoms without requiring every indexed read to lock the whole table.
58. **Integrate locks, WAL, indexes, and recovery.** Exercise concurrent commits, aborts, cascades, and crashes. Observable: every completed history matches a serial reference history and reopens consistently.
59. **Add group commit.** Allow several ready transactions to share one durable WAL flush without weakening individual commit acknowledgement. Observable: durable throughput improves while crash tests preserve the same commit boundary.

### Phase G: Assurance and completion

60. **Complete the deterministic fault-injection matrix.** Fail every meaningful storage and recovery boundary one at a time using the injection points introduced with each mechanism. Observable: each injected fault either preserves the last commit or produces a structured corruption error.
61. **Complete parser and persistent-format fuzzing.** Generate malformed SQL, JSON, WAL, pages, and indexes with recorded seeds, extending the generators introduced with each format. Observable: the engine rejects bad input without hangs, traps, or silent acceptance.
62. **Complete model-based state-transition testing.** Compare generated command sequences against the simple in-memory reference model grown with the relational core. Observable: logical and persistent states agree after every accepted or rejected operation.
63. **Complete metamorphic query testing.** Compare transformations introduced with each access path and operator, including scan versus index, join algorithms, and safe optimizer rewrites. Observable: all equivalent plans return the same relation.
64. **Measure the null-free performance hypothesis.** Compare the decomposed design with the benchmark-only nullable-row control using matched facts, scalar encodings, page size, cache budget, indexes, durability policy, transaction schedule, and logical output. Vary optional-fact density, requested facts, grouped versus per-attribute decomposition, read/write mix, and reconstruction width. Record bytes per tuple, tuple density, pages read and written, index probes, join work, WAL bytes, planning time, CPU time, elapsed time, and durable commit cost. Observable: every workload applies its preregistered primary metric and tolerance and reports where the design wins, loses, or remains inconclusive.
65. **Measure the usability hypothesis.** Before execution, preserve a protocol artifact that fixes the exact prompts, scoring rubric, task denominator, definitions of hint and error, exclusions, missing-data handling, and counterbalancing sequence. Then run the counterbalanced six-task crossover with at least eight participants who have basic SQL and Swift competence, comparing conventional nullable SQL and the null-free interface over the same facts and required outputs. Observable: raw task time, query length, statement count, transaction boundaries, client branching, errors, and participant explanations are preserved before applying all four fixed thresholds.
66. **Complete the GTOnline integration study.** Create the null-free schema, import realistic JSON, execute relational queries and mutations, run concurrent transactions, close, recover, and reopen. Observable: one test narrative crosses every layer from SQL text to durable bytes while preserving every invariant.

## Completion Evidence

The étude is complete only when:

- Every capability milestone has been decomposed into completed construction or investigation experiments with the required evidence and changelog entries.
- The full XCTest suite passes against every applicable backend.
- No production value, tuple, storage, or result path can admit NULL or an incomplete tuple; the lexer and decoder may classify forbidden input only for rejection.
- Logical, indexed, optimized, and persistent executions agree on result relations.
- Rejected operations preserve the exact prior committed logical snapshot; documented allocator, WAL, and physical metadata may change without altering visible relational facts.
- Crash matrices provide reproducible fault-injection evidence that acknowledged commits survive and loser transactions disappear at every tested boundary within the declared fault model.
- Controlled concurrent schedules are serializable and deadlocks terminate.
- Corruption and malformed input fail closed.
- Performance findings apply preregistered metrics and tolerances to matched decomposed and benchmark-only nullable fixtures.
- Usability findings apply the preregistered cohort, tasks, control, measures, and thresholds rather than being inferred from the mathematical model.
- Design Pressures Discovered, Mental Model Corrections, and Connections are completed from the changelog.
- Divergences remains reserved for the separate real-system verification project.

## Real-System Correspondence and Research Anchors

These sources guide precise comparisons. They do not make this engine compatible with any one system.

- The local `03_Fundamentals_of_Databases_Notes.tex` supplies the relational structures-constraints-operations model, the distinction between integrity and consistency, surrogates, the ANSI/SPARC levels, metadata, and the DBMS component pipeline.
- Codd's [Relational Completeness of Data Base Sublanguages][1] supplies the classical equivalence boundary between relational algebra and domain-independent first-order relational calculus.
- Date and Darwen's [The Third Manifesto][2] is direct language-design lineage for relations whose attributes always contain values from their declared domains, two-valued logic, and explicit aggregate contracts without NULL.
- Darwen's [How To Handle Missing Information Without Using NULL][3] is a closer construction precedent for separating known values, unknown applicability, and inapplicability into constrained relations with atomic multiple assignment. It is author-hosted exposition rather than a peer-reviewed proof.
- Codd's [Missing information (applicable and inapplicable) in relational databases][4] records the historical A-mark and I-mark distinction. This study preserves the distinction through named relations rather than distinguished markers inside tuples.
- [Anchor Modeling][5] supplies industrial precedent for highly decomposed, evolving schemas built around anchors, attributes, and ties. The optional-fact encoding resembles sixth-normal-form decomposition, but no relation is called 6NF until its declared join dependencies show that it has no nontrivial join dependency.
- Franconi and Tessaris's [Relational algebra and calculus with SQL null values][6] formalizes partial tuples and an equivalent horizontal decomposition into total relations.
- Libkin and Peterfreund's [SQL Nulls and Two-Valued Logic][7] supplies a formal two-valued treatment for a substantial SQL core and keeps comparison with nullable SQL separate from Codd's classical theorem.
- Yisu Remy Wang's [No More Nulls!][8] provides direct research precedent for eliminating NULL through absent relational entries and two-valued semantics. This étude differs by requiring explicit, application-visible relations and by forbidding incomplete result tuples and outer joins. Wang is precedent, not a discharged proof obligation.
- [Soufflé][9] relations and [Datomic][10] datoms are implementation analogies for typed tuple sets and immutable atomic facts. They are neither formal ancestors of this design nor evidence that its parser, storage, transactions, or usability are correct; Datomic permits `nil` in tuple slots and is not a fully null-free precedent.
- The completed `prereq-write-ahead-log` supplies both the learned and executable append, fsync, framing, replay, offset, and torn-tail mechanisms through the local bridge.
- PostgreSQL's [write-ahead logging documentation][11] is a verification target for the write-ahead rule, redo, durable commit, and group commit.
- PostgreSQL's [database page layout][12] is a verification target for fixed pages, slot directories, page LSNs, checksums, and stable record identifiers.
- The original [ARIES paper][13] is the verification target for analysis, redo, undo, compensation records, and restartable recovery.
- SQLite's [database file format][14], [query planner][15], and [testing strategy][16] are verification targets for B-trees, persistent formats, plan selection, fault injection, and fuzzing.
- SQL Server's [transaction locking and row-versioning guide][17] is a verification target for lock modes, intention locks, conversion, granularity, and deadlock behavior. This étude chooses locking, not row versioning.

Every implementation experiment must cite the exact source section or source file that corresponds to the mechanism being exposed. If no precise correspondence is found, the changelog must say so rather than inventing one.

## Observations

Record what each failing test, passing test, injected fault, and measurement teaches.

## Design Pressures Discovered

Complete from the changelog after implementation.

## Mental Model Corrections

Complete from the changelog after implementation.

## Connections

Complete from the changelog after implementation.

## Divergences

*To be completed after verification against real systems.*

[1]:	https://db.dobo.sk/wp-content/uploads/2015/11/Codd_1972_Relational_Completeness.pdf
[2]:	https://doi.org/10.1145/202660.202667
[3]:	https://www.dcs.warwick.ac.uk/~hugh/TTM/Missing-info-without-nulls.pdf
[4]:	https://doi.org/10.1145/16301.16303
[5]:	https://doi.org/10.1016/j.datak.2010.10.002
[6]:	https://arxiv.org/abs/2202.10898
[7]:	https://doi.org/10.1145/3584372.3588661
[8]:	https://arxiv.org/abs/2307.15751
[9]:	https://souffle-lang.github.io/program
[10]:	https://docs.datomic.com/
[11]:	https://www.postgresql.org/docs/current/wal-intro.html
[12]:	https://www.postgresql.org/docs/current/storage-page-layout.html
[13]:	https://dl.acm.org/doi/10.1145/128765.128770
[14]:	https://www.sqlite.org/fileformat.html
[15]:	https://www.sqlite.org/queryplanner.html
[16]:	https://www.sqlite.org/testing.html
[17]:	https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver17