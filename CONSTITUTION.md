# The Constitution of Symbolic Means

## A paradigm for concordant communication, executable topology, and the infinite use of finite, finely bounded mechanisms

**Status:** Founding draft  
**Version:** 0.1  
**Reference case study:** [`prereq-write-ahead-log`](prereq-write-ahead-log/)  
**Baseline artifact:** [`prereq-write-ahead-log/doc/CONTEXT.png`](prereq-write-ahead-log/doc/CONTEXT.png)

---

## Abstract

Human beings have asked natural language to do too many incompatible jobs. The same alphabetic prose that excels at metaphor, qualification, irony, indirection, emotional cadence, and the productive ambiguity of literature is also expected to identify domain entities, distinguish conditions from actions, state lawful transitions, describe machine effects, serve as an interface contract, index reusable implementations, and instruct computers without ambiguity. The result is not merely verbose documentation. It is a representational disorder in which intention is mistaken for commitment, observation for mutation, acknowledgement for durability, a noun for a command, and one author’s “save” for another author’s “flush,” “persist,” “commit,” “write,” or “synchronize.”

The paradigm established here is called **Symbolic Means**. It does not abolish words, diagrams, source code, or existing formal methods. It assigns each of them a proper office. Natural language explains. Stable symbols preserve the identity of concepts across languages and media. States declare conditions. Mechanisms declare actions. Arrows declare admissible transitions. Canvases declare scope and substrate. Executable bindings perform the mechanisms. Evidence justifies the claims. A registry makes the resulting means discoverable by what they transform rather than by the accidental words used to name them.

A **means** is finite in contract and fine in responsibility. It accepts a known kind of entity in a known condition, under declared guards and capabilities, performs one semantic promise, and yields a declared destination condition or a named failure. Programs become lawful compositions of such means. The ambition is not infinite text generation. It is the infinite use of finite means.

This Constitution defines the philosophical commitments, semantic ontology, visual grammar, executable model, editorial practice, multilingual concordance, reuse model, security boundary, governance rules, and ratification tests required to make that ambition real.

---

## Normative language

The words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are used normatively within this document.

- **MUST / SHALL** identifies a condition without which an implementation is not conformant.
- **SHOULD** identifies a condition that may be departed from only for a documented reason.
- **MAY** identifies a permitted choice.
- Explanatory passages without these terms remain part of the constitutional argument but are not, by themselves, machine-testable requirements.

---

# Preamble

A civilization advances not only when it discovers new facts, but when it invents a notation in which old facts may be handled without being continually rediscovered. Numbers did not create quantity. Musical notation did not create sound. Chemical formulae did not create matter. Circuit symbols did not create electricity. Each notation relieved natural language of a burden for which prose was never the best instrument, gave practitioners durable objects of thought, and permitted operations to be inspected, repeated, taught, criticized, and composed.

Software has acquired powerful programming languages, type systems, protocols, state machines, diagramming conventions, formal methods, package registries, and vast bodies of source code. Yet ordinary programming practice still lacks a stable, language-independent correspondence among the nouns of a field, the states in which those nouns may exist, the mechanisms that lawfully transform them, the diagrams that teach those mechanisms, the prose that explains them, the code that performs them, and the evidence that warrants trust in them.

Consequently, the industry searches for behavior by guessing words. It reads hundreds of pages to discover one transition. It treats names as if they were identities, images as if they were specifications, functions as if they were mechanisms, and successful return values as if they were physical truth. It reproduces existing behavior because the existing behavior cannot be found except by knowing in advance the vocabulary of its author.

This Constitution proceeds from a different conviction:

> A discipline becomes widely teachable and deeply reusable when its entities possess stable identities, its conditions are distinct from its actions, its actions are expressed as lawful transitions, and those transitions can be explained, rendered, executed, verified, and retrieved without dependence upon one natural language or one implementation dialect.

The purpose is not to make prose mechanical. It is to release prose from mechanical servitude.

---

# Part I — The representational problem

## Article 1 — Natural language has a proper greatness

Natural language is not defective because it admits synonyms, antonyms, metaphor, ellipsis, indirection, context, tone, and multiple levels of implication. These are among its greatest achievements. A poet may call the sea a road, a grave, a mirror, or a border, and the reader gains rather than loses. An historian may vary “king,” “sovereign,” “monarch,” and “ruler” to control cadence or sharpen a distinction. An essayist may delay a noun in order to produce judgment by discovery rather than by definition.

Technical practice suffers when the same liberties are unconsciously imported into identity, state, and command.

“Save,” “write,” “persist,” “flush,” “commit,” and “synchronize” may refer to different mechanisms, or to different layers of one mechanism, or merely to different authors’ preferred words. “Ready,” “available,” “active,” “open,” and “live” may denote distinct conditions or careless synonyms. “Sent” may mean composed, submitted, accepted by an operating system, accepted by a remote service, durably recorded, delivered, or read.

The solution is not to sterilize prose. The solution is to stop asking prose to carry the whole ontology and execution model unaided.

## Article 2 — Alphabetic confinement is not merely a translation problem

The difficulty is sometimes described as English dominance. English dominance is real in many technical settings, but replacing English with another natural language would not cure the deeper defect. The defect is the confinement of domain identity, operational role, and executable meaning inside general-purpose strings.

A practitioner who learns English gains access to documentation. That achievement is valuable. It does not, by itself, confer an understanding of causal order, failure boundaries, durability, invariants, admissible state, or the difference between an instruction and a report.

Engineering literacy SHALL be measured in mechanisms and constraints, not in fluency in the accidental language of their labels.

No natural language SHALL occupy the authoritative identity layer of Symbolic Means. English, Armenian, Mandarin, Spanish, Arabic, and every other language SHALL be renderings of concepts, not owners of them.

## Article 3 — The encoding-deprivation demonstration

To understand the present condition of programming, consider a mathematician who is not asked to invent a new mathematics and is not forbidden to reason. The mathematician is permitted to use English alone. Digits and mathematical operators are removed as a matter of encoding.

The following remain expressible:

```text
seventeen plus nine equals twenty-six
```

The loss may initially appear small. Now ask the mathematician to perform positional arithmetic, preserve alignment, substitute variables, compare two derivations, factor an expression, or inspect a proof at a glance.

```text
  347
×  26
-----
 2082
 6940
-----
 9022
```

The English-only equivalent can be narrated, but the operation ceases to be a compact, inspectable arrangement of stable tokens. Carrying, position, grouping, precedence, and substitution must migrate into sentences and memory.

The same occurs when:

```text
∀ n ∈ ℕ, n + 0 = n
```

becomes:

```text
For every natural number, adding the additive identity to that number
produces that same number.
```

The sentence is intelligible. It is also less directly substitutable, less visually comparable, and more dependent upon prose parsing. With every additional line of a proof, the tax compounds.

The point is not that mathematics becomes impossible. Rhetorical mathematics existed before modern notation, and a determined mathematician could continue. The point is that the discipline loses a large part of its practical literacy when the notation of its objects and operations is removed.

Programming languages possess punctuation, operators, types, and formal grammars. Programmers are therefore not literally deprived of symbols. The deprivation occurs one level higher: the identities and transitions of application domains remain encoded in local names, comments, diagrams, prose guides, framework conventions, and repository folklore. Braces can express a block. They cannot tell us whether “saved” means buffered, synchronized, replicated, acknowledged, or merely displayed.

In this precise sense, ordinary programmers resemble mathematicians provided with grammar but deprived of shared numerals for the things they repeatedly manipulate.

## Article 4 — A strict use of the word discipline

This Constitution uses **discipline** in a strict technical sense:

> A discipline possesses stable objects of study, teachable notation for its characteristic transformations, compositional rules, inspectable evidence, and a body of reusable means whose identity does not depend upon one practitioner’s vocabulary or one tool’s syntax.

Under this definition, mathematics is a discipline even though it contains many schools and notations. Chemistry is a discipline even though nomenclature evolves. Music is a discipline even though traditions differ. Their practitioners can disagree while still handling many common objects and operations through durable notation.

Computer science contains mature formal disciplines. Programming-language theory, logic, automata, type theory, algorithms, information theory, and formal verification possess exact objects and methods. Software engineering also contains rigorous specialties.

The constitutional claim is narrower and more radical:

> **Programming as ordinary cross-domain construction is not yet a unified discipline.**

Its everyday unit of reuse is usually a file, function, class, package, endpoint, or snippet whose discoverability depends upon names. Its diagrams are usually non-binding. Its domain states are usually strings or enums local to a codebase. Its mechanisms are usually conflated with implementations. Its guides repeat distinctions that the language cannot preserve across projects.

This is not an accusation against programmers. It is an accusation against the representational conditions under which they work.

## Article 5 — Stagnation is not presumed to be malice

When experts endure guides stretching across hundreds of pages, when two teams use the same word for different guarantees, when a library implementing the required behavior cannot be found, or when a diagram contradicts the runtime, incompetence and bad faith MUST NOT be presumed without evidence.

A practitioner cannot be literate in a language that has not yet been invented.

The proper response is not contempt for the worker. It is construction of the missing notation.

---

# Part II — The constitutional articles

## Article 6 — Prose shall remain prose

Natural language SHALL retain freedom for explanation, persuasion, narrative, history, warning, qualification, analogy, judgment, humor, and uncertainty.

Symbolic Means MUST NOT require every sentence to become a command, every noun to become an identifier, or every human message to become a state machine.

Ambiguity MAY remain where ambiguity is expressive and harmless. It MUST NOT remain hidden where a system’s legality, safety, obligation, or physical state depends upon the distinction.

## Article 7 — Concepts precede all renderings

Every reusable semantic object MUST possess a language-independent **concept identity**.

Words, abbreviations, pictograms, shapes, spoken phrases, tactile forms, and source-code names are renderings of that identity. None is the identity itself.

A translation MAY change without changing the concept. A glyph MAY change without changing the concept. An implementation binding MAY change without changing the concept. An incompatible semantic change MUST create a new concept version or a new concept identity.

## Article 8 — Word and symbol are siblings

A semantic symbol MUST be introduced through comprehensible context. In ordinary pedagogy, the word teaches the symbol at first appearance, and the symbol thereafter preserves recognition across prose, diagrams, languages, and execution surfaces.

The word SHALL NOT be treated as a caption subordinate to the symbol. The symbol SHALL NOT be treated as ornament subordinate to the word. Both refer to the concept.

> The word teaches the face.  
> The face remembers the thing.

## Article 9 — Identity, condition, and action shall be disjoint

A **concept reference** identifies.

A **state** declares a condition.

A **mechanism** commands or describes a transformation.

A **transition** states the lawful relation among source condition, guard, mechanism, and destination condition.

These roles MUST be distinct in the semantic model, even when a renderer chooses similar visual forms.

A decorative mark MUST NOT acquire executable authority by resemblance. A mechanism MUST NOT be inferred from an image. The semantic role MUST be declared before rendering.

## Article 10 — Every executable transition shall be complete

An executable transition MUST declare:

1. the entity or entities concerned;
2. the source state or precondition;
3. any guard or required capability;
4. the mechanism;
5. the destination state or postcondition;
6. the possible named failures;
7. the relevant effects;
8. the implementation binding or explicit abstraction boundary;
9. the evidence appropriate to its maturity.

An arrow without these semantics is a drawing, not an executable transition.

## Article 11 — Shapes render semantics; they do not create them

Boxes, circles, diamonds, arrows, lanes, loops, and canvases provide a canonical visual grammar. They are not the source of truth.

A diamond is rendered because the underlying object is a mechanism. It is not a mechanism because it resembles a diamond.

This rule permits alternate shapes for accessibility, culture, medium, tactile output, audio rendering, or domain convention while preserving semantic interoperability.

## Article 12 — Explanation and execution shall remain concordant

Every important semantic occurrence in prose SHOULD be addressable from the corresponding diagram occurrence.

Every executable transition SHOULD expose its explanation, limitations, evidence, and implementation provenance.

The path MUST work in both directions: prose to topology, topology to prose, topology to code, code to evidence, and evidence back to the claim it supports.

## Article 13 — Reuse shall begin with meaning

Before new source text is generated, a conformant tool SHOULD search for existing means by semantic signature, source condition, destination condition, effects, constraints, and evidence.

The preferred order is:

1. exact reuse;
2. reuse through an existing binding;
3. lawful composition of existing means;
4. declared specialization or adaptation;
5. invention of a new means;
6. free text or code generation as a final resort.

The absence of a known English name MUST NOT make an existing mechanism undiscoverable.

## Article 14 — Illegal transitions shall be unrepresentable or rejected

Where static information is sufficient, an illegal transition SHOULD be impossible to construct.

Where legality depends upon runtime state, the runtime MUST reject the transition before the protected effect occurs.

A diagram that displays a prohibited transition MUST fail validation. A generated interface that permits one is defective.

## Article 15 — Nondeterminism shall be explicit

Real systems contain concurrency, failures, timeouts, external events, probabilistic outcomes, and incomplete knowledge. Symbolic Means does not require the world to be deterministic.

It requires alternatives to be named.

Uncertainty, nondeterminism, and failure MUST appear as explicit branches, effects, observations, or unresolved conditions. Accidental ambiguity MUST NOT be disguised as flexibility.

## Article 16 — Universality shall not mean visual exclusivity

A universal semantic identity MUST be renderable through more than sight alone.

Conformant systems SHOULD provide text labels, spoken descriptions, keyboard navigation, structured machine output, and—where relevant—tactile or haptic representations.

Color MUST NOT be the sole carrier of semantic role. A glyph MUST NOT require cultural guesswork without a taught mapping.

---

# Part III — Ontology

## Article 17 — Core terms

| Term | Definition |
|---|---|
| **Concept** | A stable, language-independent semantic identity for a kind of thing, condition, action, relation, unit, or claim. |
| **Lexeme** | A natural-language word or phrase that renders a concept in a locale and context. |
| **Glyph** | A visual rendering of a concept. A glyph identifies; it does not execute. |
| **Occurrence** | One contextual appearance of a concept, state, mechanism, or claim in prose, topology, code, evidence, or runtime trace. |
| **Entity** | A concrete or logical noun whose identity and state are tracked. |
| **State** | A proposition about the exact condition of an entity at a relevant boundary. |
| **Intent** | A requested or proposed future transformation. Intent does not prove performance or commitment. |
| **Commitment** | A state in which a declared obligation has crossed its defined admission boundary and may be relied upon under stated assumptions. |
| **Acknowledgement** | A message reporting an event or state. It is not automatically evidence of commitment. |
| **Observation** | A read, measurement, or report that does not by itself mutate the observed entity. |
| **Guard** | A predicate that must hold before a transition may fire. |
| **Capability** | Authority or resource required to perform a mechanism. |
| **Mechanism** | A typed action with declared preconditions, effects, outcomes, and one semantic promise at its exposed level. |
| **Transition** | A lawful passage from source state to destination state through a mechanism under a guard. |
| **Effect** | A declared interaction with state, I/O, time, external systems, authority, or resources. |
| **Failure** | A named outcome in which the mechanism does not establish its intended postcondition. |
| **Invariant** | A proposition that a canvas or resident entity is required to maintain. |
| **Canvas** | A bounded semantic and operational scope: one goal, one set of substrate assumptions, and an inspectable topology. |
| **Bridge** | A typed handoff from one canvas to another. |
| **Convergence** | A point that requires multiple typed source conditions before a mechanism may fire. |
| **Means** | A reusable semantic transformation, independent of any one implementation binding. |
| **Binding** | An implementation that realizes a means on a declared substrate. |
| **Evidence** | A test, proof, measurement, trace, inspection, or other warrant attached to a claim. |
| **Registry** | An index of concepts, means, bindings, evidence, versions, and provenance. |
| **Concordance** | The bidirectional correspondence among prose, symbols, topology, implementation, evidence, and execution. |

## Article 18 — Semantic identity and occurrence identity

A concept identity answers:

> What enduring thing is this?

An occurrence identity answers:

> Which appearance of that thing, under which local concern, is being discussed?

For example:

```text
concept:    wal.log
occurrence: wal.log@recovery.torn-tail
occurrence: wal.log@replay.source-of-truth
occurrence: wal.log@offset.address-space
```

A reader selecting the log glyph in a recovery canvas SHOULD arrive at the passage about the torn tail, not merely at a generic dictionary entry for “log.”

A secondary navigation surface MAY reveal the concept’s complete trail through the work.

## Article 19 — Claim identity

Arrows and other relations carry claims. They therefore require identities of their own.

```text
claim: wal.append.preserves-earlier-bytes
claim: wal.frame.detects-torn-payload
claim: wal.sync.precedes-acknowledgement
claim: wal.replay.reconstructs-state
```

A claim identity provides the unit by which prose, topology, code, evidence, and runtime traces can be compared.

## Article 20 — Taxonomy without lexical captivity

Concepts MAY participate in taxonomies, equivalence sets, subtype relations, part-whole relations, oppositions, units, or domain-specific ontologies.

The registry MUST distinguish:

- two lexemes that are true renderings of one concept;
- two nearby concepts carelessly treated as synonyms;
- two opposing states;
- one mechanism rendered by different verbs;
- one verb that names multiple mechanisms.

Natural-language synonymy MUST NOT automatically imply semantic identity.

---

# Part IV — The authority gradient

Symbolic Means applies from everyday communication to executable systems, but authority increases by level. A mark that is informative in a message does not thereby gain the power to mutate a database.

## Article 21 — Level 0: ornament

An ornamental symbol carries no semantic identity and no executable authority.

```text
role: ornament
```

A renderer or accessibility tool MAY ignore it. It MUST NOT be treated as a command, state, or concept merely because it resembles a known glyph.

## Article 22 — Level 1: semantic anchors in ordinary messages

A day-to-day message MAY attach stable concepts and states to ordinary prose.

Consider:

> I sent the payment.

The sentence may hide several conditions:

```text
intended → submitted → authorized → committed → settled
```

A concordant message can remain natural:

> The payment [payment glyph] has been submitted [submitted-state].

The sender need not draw a diagram. The receiver may inspect the state trail only when needed. The symbol preserves the identity of “payment”; the state prevents “submitted” from being mistaken for “settled.”

At this level, the message explains or reports. It MUST NOT execute a financial operation merely because an imperative-looking glyph appears in the text.

## Article 23 — Level 2: editorial prose

In essays, reports, manuals, and journalism, symbols MAY stabilize consequential nouns while prose retains style.

A technical editor may write “record,” “entry,” or “logged intention” for cadence, yet bind each occurrence to the same concept where the meaning is truly identical. Where the meanings differ, distinct concepts force the distinction into the open.

Editorial freedom remains. Normative ambiguity does not.

## Article 24 — Level 3: textbooks and diagrams

A textbook SHOULD introduce a symbol within explanatory prose before expecting the reader to recognize it in a topology.

Example:

> The bytes first enter the **page cache** [page-cache glyph]. Reads may already see them, but power loss may still remove them.

The later canvas may then retain only the causal skeleton:

```text
[record] → ◇ write → buffered → ◇ synchronize → durable
```

Selecting the page-cache glyph returns to the exact sentence that introduced it. Selecting the synchronization transition returns to the explanation of visibility, durability, cost, and failure.

The diagram becomes memory and navigation, not a cramped first lesson.

## Article 25 — Level 4: professional protocol

In operational disciplines, a topology may define a normative procedure without directly executing it.

Examples include:

```text
Medication: prescribed → dispensed → administered
Payment: initiated → authorized → settled
Specimen: collected → labeled → verified → analyzed
Change: proposed → reviewed → approved → deployed
```

The grammar is shared; the domain concepts are governed by experts in their own fields.

A protocol at this level MUST declare which statements are normative and which remain explanatory.

## Article 26 — Level 5: executable topology

At the executable level, mechanism nodes bind to implementations. Transitions are validated and enforced. Runtime traces refer to the same concept, occurrence, and claim identities used by the textbook.

An executable topology MUST NOT infer authority from appearance. It executes only typed mechanism objects with valid bindings and capabilities.

## Article 27 — Level 6: semantic retrieval and composition

At the highest current level, the registry can answer questions such as:

```text
Find a means that transforms:
    Record@Buffered
into:
    Record@Durable
under:
    LocalFile + OpenDescriptor
while preserving:
    StableOffset
```

The answer may be implemented in JavaScript, Rust, Swift, a database engine, an operating system service, or hardware. The mechanism is retrieved by contract rather than by the spelling of its function.

---

# Part V — Canonical visual grammar

## Article 28 — The canonical roles

The default visual grammar is:

| Semantic role | Default rendering |
|---|---|
| Entity | Box or bounded container |
| State | Circle, state capsule, or perimeter marker |
| Mechanism | Diamond |
| Transition | Directed arrow |
| Canvas | Bounded field with goal and substrate |
| Bridge | Typed transition crossing canvas boundaries |
| Feedback | Directed loop |
| Convergence | Explicit multi-input gate or mechanism |

Renderers MAY vary these forms, but MUST preserve role metadata and perceptual distinguishability.

## Article 29 — Nouns, conditions, verbs, and claims

The grammar follows a sentence-like order:

```text
ENTITY in SOURCE_STATE
    -- [GUARD] / MECHANISM -->
ENTITY in DESTINATION_STATE
```

- The **entity** supplies the noun.
- The **state** supplies the condition.
- The **mechanism** supplies the verb.
- The **guard** supplies the “if.”
- The **arrow** supplies the causal and temporal claim.
- The **canvas** supplies the world in which the claim is valid.

## Article 30 — Decorative glyphs and imperative mechanisms

A semantic glyph and a mechanism may both be visually prominent, but they belong to disjoint types.

```yaml
kind: concept-reference
concept: wal.record
```

cannot be placed where this is required:

```yaml
kind: mechanism
means: storage.synchronize
```

A conformant validator MUST reject the substitution before rendering or execution.

## Article 31 — One promise per diamond

Every mechanism exposed on a canvas SHOULD make one semantic promise.

“Fine” does not mean one diamond per instruction, syscall, or transistor. It means the mechanism has one coherent obligation at the current level of abstraction.

Examples:

- **Frame** promises an unambiguous record boundary.
- **Append** promises addition at the tail without rewriting earlier bytes.
- **Synchronize** promises passage across a declared durability boundary.
- **Truncate** promises removal beyond a declared valid boundary.
- **Replay** promises reconstruction from an ordered history.

A mechanism whose internal work is substantial MAY expand into a child canvas.

## Article 32 — Resident and transitory entities

A **transitory entity** enters a canvas, transforms, and resolves through a finite path.

A **resident entity** persists and is maintained by a feedback topology.

Every canvas SHOULD declare one primary tracked entity or one resident invariant. Other entities MAY appear as actors, infrastructure, dependencies, or bridge participants, but the reader and runtime must be able to answer whose condition the canvas chiefly governs.

Examples:

```text
Transitory: request, command, payload, recovery task
Resident: cache, queue, log, account, storage pool, replicated state
```

A resident canvas SHOULD name the invariant it maintains. A transitory canvas SHOULD name its terminal resolution states.

## Article 33 — Source and destination canvases

A canvas is a source when it emits a typed entity or condition through a bridge. It is a destination when it accepts that bridge under matching preconditions.

Source and destination are relational roles, not permanent classes.

A bridge MUST declare whether it:

- preserves concept identity;
- transforms one concept into another;
- changes authority;
- changes ownership;
- changes substrate;
- changes durability or trust level.

## Article 34 — Depth and mechanical debt

A parent canvas may hide internal mechanics only by exposing a complete interface contract.

A child canvas pays the mechanical debt of a parent mechanism.

The parent MUST declare:

- accepted source state;
- promised destination state;
- effects and failures visible at the boundary;
- assumptions delegated to the child.

The child MUST establish how that promise is achieved.

A hidden implementation is permitted. Hidden friction is not.

## Article 35 — Explicit branches and convergence

Every branch MUST name the condition that selects it.

Every merge MUST state whether it joins alternatives or requires convergence.

A transition that depends on multiple facts MUST wait until every required fact is available, unless its semantics explicitly permit partial progress.

## Article 36 — The canvas shall not become a page of prose

Nodes MAY contain short labels, symbols, units, and compact state names.

Long explanations, historical context, caveats, and evidence belong in linked prose surfaces. The topology MUST remain inspectable as a set of claims.

This is not a ban on text. It is a division of labor.

---

# Part VI — Formal semantic model

## Article 37 — Concepts and renderings

Let `CID` be the set of stable concept identities.

A concept is:

```text
c = ⟨id, version, taxonomy, renderings, provenance⟩
```

where:

- `id ∈ CID`;
- `version` identifies semantic compatibility;
- `taxonomy` relates the concept to other concepts;
- `renderings` contains lexemes, glyphs, spoken forms, and accessible alternatives;
- `provenance` records authorship, governance, and change history.

A rendering function:

```text
R(c, locale, medium, audience) → representation
```

may produce English prose, Armenian prose, an SVG glyph, an audio phrase, a tactile pattern, or another projection. Changing `R` does not change `c`.

## Article 38 — Entities and states

An entity instance is:

```text
e = ⟨instance-id, concept-id, attributes, authority⟩
```

For each entity concept `c`, let `S(c)` be the set of states that may be meaningfully asserted about it.

A state assertion is:

```text
e @ s
```

where `s ∈ S(c)`.

States SHOULD be exact enough to determine which transitions are admissible. A state named merely `active` is insufficient when the mechanism depends upon whether the entity is allocated, connected, authenticated, synchronized, or durable.

## Article 39 — Guards

A guard is a predicate:

```text
g(context, entities, capabilities, observations) → true | false | unknown
```

A transition MUST NOT fire when its guard is false.

When the guard is unknown, the topology MUST declare whether execution waits, observes, branches to an unresolved state, or fails.

## Article 40 — Mechanisms

A mechanism is a partial, effectful relation:

```text
m:
    ⟨inputs, source-states, capabilities, substrate⟩
        ⇀
    ⟨outputs, destination-states, effects, trace⟩
    ∪ named-failures
```

It is partial because not every mechanism is legal for every state, capability, or substrate.

A mechanism contract SHOULD declare:

- semantic identity;
- input concepts and states;
- output concepts and states;
- guard;
- effects;
- failure set;
- atomicity;
- idempotence;
- compensation behavior;
- concurrency assumptions;
- time and resource class where relevant;
- confidentiality and authority requirements;
- implementation bindings;
- evidence.

## Article 41 — Transitions

A transition is:

```text
τ = ⟨source, guard, mechanism, destination, failures, effects, evidence⟩
```

Execution is admissible only when:

```text
current-state satisfies source
∧ guard evaluates true
∧ required capabilities are present
∧ a compatible binding exists
```

Successful completion MUST establish the destination postcondition or report a contract violation.

## Article 42 — Composition

Two means `μ₁` and `μ₂` may compose when:

1. the outputs of `μ₁` satisfy the inputs of `μ₂`;
2. the destination states of `μ₁` entail the source states of `μ₂`;
3. the effects of `μ₁` do not violate invariants required by `μ₂`;
4. authority and ownership are compatible;
5. substrate assumptions are compatible or a bridge declares the conversion;
6. failures are handled or propagated explicitly.

Composition is written conceptually as:

```text
μ₂ ∘ μ₁
```

The result is itself a candidate means, but MUST retain provenance to its components.

## Article 43 — Universal guarded command

The constitutional form of an “if statement” is not a language keyword. It is a guarded transition:

```text
WHEN source-condition
AND guard
DO mechanism
YIELD destination-condition
OTHERWISE named-failure-or-alternative
```

Its compact rendering is:

```text
⟨Entity, Source⟩ ── [Guard] / Mechanism ──▶ ⟨Entity, Destination⟩
```

The guard grants permission. The mechanism acts. The destination states what must become true.

## Article 44 — Intent, commitment, and acknowledgement

The following MUST remain distinct:

```text
Intent:
    a request or proposed action exists.

Commitment:
    the system has crossed a declared boundary after which the obligation
    may be relied upon under stated failure assumptions.

Acknowledgement:
    a message claims that an event or state exists.
```

An acknowledgement MAY precede commitment in poorly designed systems. When it does, the topology MUST model the declared state and physical state separately.

No interface response SHALL be treated as proof of durability unless the transition contract makes that guarantee and its substrate assumptions are satisfied.

## Article 45 — Observation and imperative computation

An observation reads or measures. A command attempts an effect.

```text
observe(entity) → reported-state
command(entity@source) → entity@destination | failure
```

A function that returns data is not necessarily declarative. A function with a declarative name may perform I/O. The semantic contract, not grammatical mood or naming style, determines the role.

## Article 46 — Traces

Every executable transition SHOULD emit a semantic trace containing:

```text
transition-id
mechanism-id
binding-id
source occurrence
destination occurrence
guard result
effects
timing
outcome
evidence/version references
```

A trace is not merely a log line. It is a runtime occurrence of the same claim taught in prose and shown in topology.

---

# Part VII — Executable enforcement

## Article 47 — The graph is an intermediate representation

The authoritative executable artifact SHALL be a typed semantic graph or another representation with equivalent expressive power.

The following are projections:

- natural-language documentation;
- interactive SVG;
- print diagrams;
- source-language APIs;
- runtime state machines;
- test plans;
- traces;
- semantic search indexes.

A PNG, screenshot, prose document, or source file MAY preserve evidence or presentation, but MUST NOT be the sole source of executable semantics.

## Article 48 — Static and dynamic enforcement

A compiler SHOULD enforce:

- role separation;
- concept and state compatibility;
- complete transition contracts;
- bridge compatibility;
- capability declarations;
- reachability and unresolved states;
- prohibited cycles or unhandled terminal states;
- missing bindings;
- missing evidence required by policy.

A runtime MUST enforce facts unavailable statically:

- current state;
- actual capabilities;
- external observations;
- concurrency version;
- resource availability;
- timeout and failure behavior.

## Article 49 — Capability and effect safety

A mechanism MUST NOT execute merely because it appears on a canvas.

It requires a binding and the declared capabilities.

Examples:

```text
storage.read
storage.append
storage.truncate
network.send
account.debit
medication.administer
deployment.promote
```

Capabilities SHOULD be least-privileged and independently revocable.

Effects MUST be inspectable before execution. Hidden network, filesystem, account, medical, or administrative effects violate conformance.

## Article 50 — Concurrency

Where multiple actors may transform the same resident entity, the transition contract MUST declare a concurrency strategy, such as:

- serialization;
- compare-and-swap version;
- lock;
- transaction;
- optimistic retry;
- commutative operation;
- conflict state;
- consensus or quorum assumption.

The visual grammar need not display every low-level detail at the parent level, but the contract MUST not imply a deterministic state passage where races can invalidate it.

## Article 51 — Atomicity and compensation

A mechanism MUST declare whether it is:

- atomic at the chosen boundary;
- partially observable;
- resumable;
- idempotent;
- compensatable;
- irreversible.

A long-running transition SHOULD expose intermediate states when those states matter to safety, user expectation, recovery, or reuse.

## Article 52 — Bindings do not own means

One means MAY have many bindings:

```text
storage.synchronize
    ↳ Node.js fsync binding
    ↳ Rust std::fs binding
    ↳ PostgreSQL WAL flush binding
    ↳ device-specific binding
```

Bindings may differ in performance, platform, and failure behavior while conforming to the same semantic promise under declared assumptions.

A binding that offers a weaker guarantee MUST bind to a different means or state transition.

---

# Part VIII — The Concordance

## Article 53 — The word baptizes the symbol

A reader SHOULD NOT be presented with a dense legend of unexplained marks before encountering the concepts.

The preferred sequence is:

1. encounter the thing in context;
2. learn its name;
3. see its symbol beside the name;
4. observe its behavior;
5. meet the symbol again in a topology;
6. use the symbol as a route back to explanation.

A symbol learned in this manner is not guessed. It is remembered.

## Article 54 — Exact navigation

Every semantic occurrence SHOULD carry:

```text
concept-id
occurrence-id
surface
local context
version
```

A topology node or arrow SHOULD navigate to the smallest sufficient explanatory passage, not merely to a chapter top or global glossary.

Prose SHOULD provide reverse navigation to every important topology occurrence.

## Article 55 — Concept trail

A concordant system MAY expose the life of a concept across a work:

```text
first introduced
first placed in a state
first transformed
first used as a bridge
first bound to code
first verified
first composed elsewhere
```

This trail becomes a semantic index more useful than a list of word matches.

## Article 56 — Progressive disclosure

A novice MAY see words and symbols together.

An intermediate reader MAY collapse repeated labels.

An expert MAY operate primarily through the symbolic topology while opening prose only for qualification, evidence, or unfamiliar concepts.

All three views MUST refer to the same identities.

## Article 57 — Print, audio, and offline forms

Interactive linking is valuable but not constitutionally sufficient.

Print renderings SHOULD provide compact occurrence references, marginal anchors, or indexes.

Audio renderings SHOULD announce role, concept, state, and transition in an order that preserves the topology.

Offline artifacts SHOULD retain enough identity metadata for later reconciliation.

---

# Part IX — Reusable means

## Article 58 — The means is the primary unit of reuse

A source file is an artifact. A function is an implementation boundary. A package is a distribution boundary.

A **means** is the reusable semantic unit:

```text
Means =
    identity
  + accepted entities
  + source conditions
  + guard
  + mechanism promise
  + destination conditions
  + effects
  + failures
  + constraints
  + bindings
  + evidence
  + provenance
```

The same means may be expressed through many functions or distributed across several components.

## Article 59 — Fine and finite

A means is **finite** because its contract is bounded.

A means is **fine** because its responsibility is coherent and composable.

Excessively broad means conceal useful transitions. Excessively microscopic means drown composition in implementation detail.

The proper boundary is the smallest mechanism that makes one independently useful semantic promise at the chosen level.

## Article 60 — Behavioral discovery

A registry SHOULD support queries by:

- input concept;
- source state;
- destination state;
- required or forbidden effects;
- substrate;
- latency or resource class;
- failure behavior;
- authority;
- evidence level;
- composability;
- language or platform binding.

Examples:

```text
Payload → LengthFramedRecord
Log + Offset → Record + NextOffset
Log@TornTail → Log@Consistent
Intent@Durable + State@Current → State@Next
```

A query MUST NOT require the user to guess the implementation’s function name.

## Article 61 — Mechanism reuse before textual reuse

The deepest reuse is not copying characters. It is preserving a lawful transformation.

Two implementations may share no source text and still implement the same means.

Two functions may share nearly identical text and implement different means because their state guarantees differ.

The registry SHALL index the transformation, not merely the spelling.

## Article 62 — Composition before generation

A conformant programming assistant SHOULD attempt:

```text
goal state
    ← search for direct means
    ← search for composable path
    ← search for adaptable bindings
    ← identify exact missing transition
    ← invent only the missing means
```

This hierarchy does not forbid generation. It disciplines it.

The system MUST expose whether a result was retrieved, composed, adapted, synthesized, or newly generated.

## Article 63 — Provenance and trust

Every reusable means SHOULD reveal:

- who defined the contract;
- who supplied each binding;
- what evidence supports it;
- what assumptions limit it;
- which versions depend upon it;
- which incidents or corrections altered it.

Trust SHALL attach to contracts and evidence, not to visual polish.

## Article 64 — Limits of automatic composition

Semantic composition does not abolish design judgment, undecidability, emergent behavior, performance tradeoffs, moral responsibility, or the need for domain expertise.

The registry may find a path that is type-compatible but economically foolish, unsafe under load, legally prohibited, or contrary to the user’s purpose.

Conformant systems MUST permit constraints beyond type matching and MUST keep human responsibility visible.

---

# Part X — Editorial and pedagogical practice

## Article 65 — The introduction rule

A new symbol SHOULD appear beside its lexeme and a concrete explanation at first introduction.

A chapter SHOULD introduce no more symbols in a passage than the reader can reasonably learn from its causal context.

A symbol MUST NOT be added merely because an icon exists.

## Article 66 — The recurrence rule

After introduction, a symbol SHOULD recur consistently.

A concept SHOULD NOT change glyph casually. A glyph SHOULD NOT be reused for an unrelated concept merely because it is convenient.

Where two concepts are dangerously close, the visual system SHOULD make the distinction perceptible.

## Article 67 — The prose rule

Prose MAY use metaphor, analogy, humor, and varied diction.

Normative statements SHOULD bind their consequential nouns and transitions to semantic identities.

An editor MAY write elegant synonyms while the Concordance preserves identity. When two words conceal a real distinction, the editor MUST not collapse it for cadence.

## Article 68 — The diagram rule

A diagram SHOULD show only what must remain simultaneously inspectable:

- entities;
- relevant conditions;
- mechanisms;
- legal transitions;
- scope;
- bridges;
- invariants or goals;
- essential timing or authority boundaries.

Background explanation belongs in linked prose. Evidence belongs in an evidence surface. Implementation detail belongs in child canvases or bindings.

## Article 69 — The expert rule

Experts SHOULD be able to traverse a work by concept and mechanism rather than by page sequence alone.

A familiar symbol MUST not force the expert through repeated introductory prose. An unfamiliar or disputed occurrence MUST remain one action away from its exact context.

## Article 70 — The novice rule

A novice MUST not be required to memorize an unexplained visual dictionary before understanding the subject.

The system SHOULD permit labels, guided traces, stepwise animation, examples, and reversible navigation.

Symbolic compression is earned after understanding. It is not imposed before it.

## Article 71 — The correction rule

When an explanation, mechanism, or taxonomy is corrected, every linked occurrence SHOULD be discoverable.

A semantic change SHOULD produce a reviewable impact set across:

- prose;
- diagrams;
- bindings;
- tests;
- translations;
- downstream compositions.

This is one of the central advantages of identity beyond text.

---

# Part XI — Cross-disciplinary concordance

## Article 72 — Shared grammar, sovereign disciplines

Symbolic Means does not impose one universal ontology on every field.

Each discipline governs its own consequential nouns, states, mechanisms, constraints, and evidence.

The disciplines share a grammar of:

```text
entity
condition
guard
mechanism
transition
source
destination
failure
invariant
evidence
```

This common grammar permits interoperability without erasing expertise.

## Article 73 — Examples of shared distinctions

| Discipline | Intent | Commitment | Observation | Imperative mechanism |
|---|---|---|---|---|
| Payments | payment requested | funds settled under declared rail | balance observed | debit / settle |
| Medicine | treatment ordered | dose accepted into administration workflow | vital measured | administer |
| Publishing | revision proposed | edition released | proof inspected | publish |
| Logistics | shipment announced | carrier custody established | location scanned | transfer |
| Databases | mutation requested | log record durable | state read | apply |
| Mathematics | conjecture stated | proof admitted under a system | expression evaluated | derive / transform |

These examples are illustrative. Domain experts MUST define the exact boundaries.

## Article 74 — Translation without semantic fracture

A concept may have many lexemes:

```text
concept: storage.durable
English: durable
Armenian: localized lexeme
Spanish: localized lexeme
spoken form: localized spoken rendering
glyph: selected visual rendering
```

The graph remains unchanged.

Translation review SHOULD address semantic equivalence, not mere word replacement. Where a language distinguishes concepts that another language collapses, the registry SHOULD preserve the finer distinction.

## Article 75 — Learning English is not engineering education

English may remain useful, influential, and historically embedded. It MUST NOT remain the hidden admission test for handling mechanisms that are independent of English.

A practitioner who masters the entities, states, mechanisms, constraints, and evidence of a field possesses engineering knowledge even when the practitioner uses another natural language.

A practitioner who speaks flawless English but confuses buffered with durable, intention with commitment, or observation with mutation does not possess the corresponding engineering literacy.

## Article 76 — Interoperability through transitions

Cross-disciplinary reuse most often occurs at boundaries:

```text
measurement → decision
order → authorization
commitment → accounting entry
specification → manufacture
proof obligation → verification result
software event → physical act
```

Bridges between disciplines MUST declare changes in authority, evidence, units, ownership, and risk.

A shared arrow grammar does not make every transition safe. It makes the required questions visible.

---

# Part XII — Reference case study: the write-ahead log

## Article 77 — Why `CONTEXT.png` is the baseline, not the destination

The repository’s [`CONTEXT.png`](prereq-write-ahead-log/doc/CONTEXT.png) is valuable because it makes a hidden physical path visible. It contains memory states, writeback behavior, I/O submission, device cleaning, consolidation, and acknowledgement boundaries.

It also demonstrates the burden this Constitution seeks to remove:

- English names nearly every entity, state, and mechanism;
- explanatory notes compete with topology;
- the image is not a semantic source;
- nodes and arrows are not directly addressable as contracts;
- decorative and imperative marks have no machine-enforced type distinction;
- the runtime is not obliged to follow the pictured transitions;
- reusable mechanisms cannot be discovered through the image.

The artifact can testify. It cannot yet govern.

## Article 78 — The implementation already contains candidate means

The record format in [`record.js`](prereq-write-ahead-log/record.js) contains a framing means:

```text
Payload ──◇ Frame ──▶ LengthFramedRecord
```

The WAL in [`wal.js`](prereq-write-ahead-log/wal.js) contains several means:

```text
Payload ──◇ EncodeAndAppend ──▶ Record@Buffered + StableOffset

Log + StableOffset ──◇ ReadAt ──▶ Payload + NextOffset

Log + StartingOffset ──◇ Scan ──▶ OrderedPayloads + HighWaterMark

Log@TornTail ──◇ Recover ──▶ Log@Consistent
```

The key-value store in [`kv-store.js`](prereq-write-ahead-log/kv-store.js) contains the write-ahead law:

```text
MutationIntent
    → append
    → synchronize
    → apply
    → CurrentState
```

Its constructor replays the log to reconstruct memory, revealing that the in-memory map is derived state while the surviving log is the recovery source.

The detailed study and its limitations remain in [`STUDY.md`](prereq-write-ahead-log/doc/STUDY.md). The implementation history remains in [`CHANGELOG.md`](prereq-write-ahead-log/doc/CHANGELOG.md).

## Article 79 — The minimum constitutional topology

A first executable topology SHOULD expose:

```text
[MutationIntent]
        │
      ◇ Frame
        ▼
[Record @ Framed]
        │
      ◇ Append
        ▼
[Record @ Buffered]
        │
      ◇ Synchronize
        ▼
[Record @ Durable]
        │
      ◇ Apply
        ▼
[State @ Current]
```

The critical law is:

```text
Apply requires Record@Durable.
```

No legal transition exists from `Record@Buffered` directly to `Apply` when the declared guarantee is crash-safe commitment.

A generated API SHOULD therefore make premature application unavailable or reject it at runtime.

## Article 80 — Recovery topology

Recovery requires a second path:

```text
[Log @ UnknownTail]
        │
      ◇ ReadHeader
        ├── short header ──▶ [Tail @ TornHeader]
        │
        └── complete header
                │
              ◇ CheckPromisedLength
                ├── insufficient bytes ──▶ [Tail @ TornPayload]
                └── sufficient bytes ────▶ [Prefix @ Valid]
                                             │
                                           ◇ ContinueScan
```

At the first torn boundary:

```text
[Log @ TornTail] + [ValidOffset]
        │
      ◇ Truncate
        ▼
[Log @ Consistent]
        │
      ◇ Replay
        ▼
[State @ Current]
```

A torn header and a torn payload are distinct states because their detection mechanisms differ.

## Article 81 — Durability and the honesty of acknowledgement

The case study MUST distinguish:

```text
visible to reads
```

from:

```text
durable across the declared failure model
```

A write into the operating system’s page cache may satisfy the first without satisfying the second.

The transition:

```text
Buffered ──◇ Synchronize ──▶ Durable
```

must therefore carry the evidence, assumptions, and measured cost of synchronization.

An acknowledgement emitted before this transition completes MUST be modeled as a declared state that may diverge from physical reality.

## Article 82 — Example semantic source

The present JavaScript implementation does not yet expose every fine-grained means as an independent callable boundary. `WAL.append()` currently bundles framing, positional append, optional synchronization, offset advancement, and address return. A truthful semantic source must record that fact rather than pretending the desired decomposition already exists.

A prototype source may therefore distinguish fine means, composite means, and planned bindings:

```yaml
concepts:
  wal.record:
    lexemes:
      en: record
    glyph: record
  wal.log:
    lexemes:
      en: write-ahead log
    glyph: append-only-log

states:
  wal.record.framed:
    entity: wal.record
  wal.record.buffered:
    entity: wal.record
  wal.record.durable:
    entity: wal.record
  wal.state.current:
    entity: wal.state

means:
  wal.frame:
    input: wal.payload
    output: wal.record@framed
    promise: payload boundary is explicit
    binding:
      status: bound
      path: prereq-write-ahead-log/record.js
      member: Record.encode

  wal.append:
    input: wal.record@framed
    output:
      - wal.record@buffered
      - wal.offset@stable
    promise: append at tail without rewriting earlier bytes
    binding:
      status: planned
      implementation-note: extract the positional-write phase from WAL.append

  storage.synchronize:
    input: wal.record@buffered
    output: wal.record@durable
    effects:
      - filesystem.flush
    binding:
      status: planned
      implementation-note: extract the sync branch from WAL.append

  wal.encode-and-append:
    composes:
      - wal.frame
      - wal.append
    binding:
      status: composite
      path: prereq-write-ahead-log/wal.js
      member: WAL.append
      adapter: sync-false

  wal.encode-append-and-synchronize:
    composes:
      - wal.frame
      - wal.append
      - storage.synchronize
    binding:
      status: composite
      path: prereq-write-ahead-log/wal.js
      member: WAL.append
      adapter: sync-true

  wal.apply:
    input:
      - wal.record@durable
      - wal.state@current
    output: wal.state@current
    binding:
      status: bound-through-adapter
      path: prereq-write-ahead-log/kv-store.js
      member: KVStore._apply
      note: the current method does not yet enforce the durable-state type itself

transitions:
  - id: wal.intent-to-framed
    from: wal.intent@created
    via: wal.frame
    to: wal.record@framed

  - id: wal.framed-to-buffered
    from: wal.record@framed
    via: wal.append
    to: wal.record@buffered

  - id: wal.buffered-to-durable
    from: wal.record@buffered
    via: storage.synchronize
    to: wal.record@durable

  - id: wal.durable-to-applied
    from: wal.record@durable
    via: wal.apply
    to: wal.state@current
```

This schema is illustrative, not yet a ratified file format. A validator MUST refuse to call a `planned` binding executable until an adapter or refactor supplies the declared contract.

## Article 83 — What the case study must prove

The case study is successful only when it demonstrates all of the following:

1. The same concept identity appears in prose, topology, code binding, evidence, and runtime trace.
2. English labels can be replaced by another language without changing transition semantics.
3. Removing visible labels does not remove semantic identity.
4. A decorative glyph cannot occupy a mechanism slot.
5. `Apply` cannot run from `Buffered` when `Durable` is required.
6. A topology occurrence opens the exact explanatory passage.
7. The prose occurrence highlights the exact topology node or edge.
8. Recovery means are discoverable by source and destination state.
9. At least two implementations can bind to one means or one implementation can expose several finer means.
10. The current study’s exclusions—such as checksums, replication, compaction, and group commit—remain explicit rather than being hidden by the simplified topology.

---

# Part XIII — System architecture

## Article 84 — Required layers

A complete implementation SHOULD contain:

1. **Concept Registry** — identities, versions, taxonomies, lexemes, glyphs, accessibility forms.
2. **Occurrence Registry** — exact appearances across all surfaces.
3. **Means Registry** — semantic contracts and composition rules.
4. **Binding Registry** — executable implementations and substrate declarations.
5. **Evidence Registry** — tests, proofs, measurements, traces, and limitations.
6. **Topology Source** — canvases, states, mechanisms, transitions, bridges, and invariants.
7. **Validator / Compiler** — role checking, type checking, completeness, capability, and composition checks.
8. **Renderer** — prose anchors, SVG, print, audio, tactile, and editor projections.
9. **Runtime** — guarded execution and semantic traces.
10. **Semantic Search / Composer** — discovery by transformation rather than name.

## Article 85 — One semantic source, many projections

The system SHOULD generate or validate every projection against a canonical semantic source.

```text
                           ┌─ localized prose anchors
                           ├─ interactive topology
semantic source ───────────┼─ generated APIs
                           ├─ runtime enforcement
                           ├─ evidence plans
                           ├─ traces
                           └─ reuse index
```

Manual prose remains authored by humans. It binds to identities rather than being generated wholesale.

## Article 86 — Suggested repository layout

```text
symbolic-means/
  concepts/
    core.yaml
    wal.yaml
  means/
    storage.yaml
    wal.yaml
  topologies/
    wal-commit.yaml
    wal-recovery.yaml
  bindings/
    node.yaml
  prose/
    wal-durability.mdx
  evidence/
    wal-tests.yaml
    wal-benchmarks.yaml
  renderers/
  schemas/
```

The layout is advisory. Semantic equivalence matters more than file organization.

## Article 87 — Versioning

Concept and means versions MUST follow semantic compatibility, not publication date alone.

A change in wording or glyph does not require a semantic version change.

A change in precondition, effect, destination guarantee, failure set, authority, or substrate assumption MAY be breaking and SHOULD create a new version.

Existing compositions MUST remain inspectable against the versions under which they were validated.

## Article 88 — Evidence maturity

A means MAY progress through maturity levels:

| Level | Meaning |
|---|---|
| **Sketched** | Concept and intended transition exist, without complete contract. |
| **Specified** | Contract, states, effects, and failures are declared. |
| **Bound** | At least one implementation binding exists. |
| **Tested** | Repeatable evidence exercises the binding. |
| **Verified** | Stronger proof, model checking, or independently reviewed evidence supports the claim. |
| **Operational** | Runtime traces and observed behavior support use on a declared substrate. |
| **Certified** | A governing authority has admitted the means for a defined high-stakes context. |

Visual renderers MUST NOT imply a higher maturity than the registry records.

---

# Part XIV — Safety, accessibility, and governance

## Article 89 — No execution by visual accident

Untrusted documents, images, pasted symbols, screenshots, and ordinary messages MUST be inert by default.

Execution requires:

- parsed semantic identity;
- validated role;
- compatible transition;
- authorized binding;
- required capability;
- explicit invocation under policy.

A screenshot of a diamond is not a command.

## Article 90 — Accessibility is semantic redundancy

Every important semantic role SHOULD be available through multiple channels.

A screen reader SHOULD be able to announce:

```text
Entity: record.
Current state: buffered.
Mechanism: synchronize.
Destination state: durable.
Guard: descriptor open.
```

A user who cannot see the diamond must not lose the distinction between mechanism and state.

## Article 91 — Cultural and linguistic governance

No glyph set is universally self-explanatory. Communities MUST be permitted to propose and review renderings.

The concept identity remains shared while renderings may be culturally appropriate.

Core registries SHOULD be open, inspectable, versioned, and governed through public rationale. A dominant language or vendor MUST NOT silently redefine a concept used by other communities.

## Article 92 — Domain authority

Cross-disciplinary grammar does not grant outsiders authority over domain taxonomies.

Medical mechanisms require medical governance. Legal commitments require jurisdictional governance. Financial settlement states require the relevant operational definition. Safety-critical transitions require evidence and review appropriate to their consequences.

The shared language makes collaboration possible. It does not erase responsibility.

## Article 93 — Privacy and disclosure

Semantic traces can reveal more than ordinary logs because they carry stable identities and causal relations.

Conformant systems MUST support redaction, minimization, access control, and retention policies.

A concept identity MAY remain visible while instance data is protected. Evidence requirements MUST not become an excuse for indiscriminate surveillance.

## Article 94 — Open correction

The registry SHOULD preserve corrections, deprecations, disputed definitions, and superseded transitions.

A constitution of reuse must make error recoverable. It must not turn early definitions into permanent dogma.

---

# Part XV — Non-goals and boundaries

## Article 95 — This is not a universal rebus

Symbolic Means does not seek to replace sentences with strings of pictures.

Symbols identify stable concepts. Prose continues to explain relations, motives, uncertainty, exceptions, and consequence.

## Article 96 — This is not a claim that symbols are naturally unambiguous

A glyph can be misunderstood. Its precision comes from stable identity, taught context, consistent recurrence, and machine-readable role—not from visual intuition alone.

## Article 97 — This is not a ban on source code

Existing programming languages remain valuable implementation media.

The paradigm places a semantic layer above and across them so that the mechanism is not imprisoned in one syntax.

## Article 98 — This is not merely a flowchart standard

Flowcharts, statecharts, Petri nets, UML, proof assistants, domain-specific languages, visual programming systems, and formal methods contain valuable ideas.

The constitutional invention does not depend on pretending those traditions do not exist.

Its distinctive program is the closed concordance among:

1. prose-born semantic symbols;
2. language-independent identities;
3. occurrence-level navigation;
4. typed state-transition topology;
5. executable bindings;
6. evidence attached to claims;
7. behavioral retrieval of reusable means;
8. composition as the primary programming act.

Its novelty must be demonstrated by a working system, not proclaimed by omission of prior art.

## Article 99 — This is not automatic correctness

A typed graph may still encode a false model. A test may be inadequate. A binding may lie. A domain authority may be wrong.

Conformance improves inspectability, reuse, and enforcement. It does not abolish empirical reality or moral responsibility.

## Article 100 — This is not one shape for all disciplines

Shapes are canonical renderings, not metaphysical truths.

A discipline MAY use familiar domain-specific forms if semantic role metadata and interoperability remain intact.

## Article 101 — This is not the abolition of invention

The registry cannot contain what has never been conceived.

By revealing exactly which transition is missing, the paradigm gives invention a more honorable place. New work begins where reuse genuinely ends.

---

# Part XVI — Adoption program

## Article 102 — Phase I: semantic annotation

Begin with the write-ahead-log étude.

Create stable identities for:

```text
payload
record
length frame
log
offset
page cache
storage
torn header
torn payload
valid prefix
mutation intent
current state
```

Bind exact prose occurrences in `STUDY.md`.

## Article 103 — Phase II: executable topology source

Create machine-readable canvases for:

1. framing and append;
2. durability;
3. recovery;
4. replay and application.

Generate SVG rather than adopting a raster image as the semantic source.

## Article 104 — Phase III: bindings and validator

Bind the initial means to `record.js`, `wal.js`, and `kv-store.js`.

Implement validation that proves:

- decorative glyphs are inert;
- mechanism slots accept only mechanisms;
- `Apply` requires a durable record;
- recovery cannot truncate before the last valid boundary;
- every executable edge has a binding or declared abstraction.

## Article 105 — Phase IV: Concordance

Add exact navigation:

```text
prose occurrence ↔ topology occurrence
topology edge ↔ claim explanation
claim ↔ implementation binding
claim ↔ evidence
runtime trace ↔ transition
```

## Article 106 — Phase V: multilingual projection

Render the same topology with at least two natural-language lexeme sets.

The semantic graph MUST remain byte-for-byte or structurally unchanged apart from rendering references.

## Article 107 — Phase VI: means retrieval

Implement queries such as:

```text
Record@Buffered → Record@Durable
Log@TornTail → Log@Consistent
Log + Offset → Record + NextOffset
```

Demonstrate retrieval without searching for `fsync`, `recover`, or `readAt` by name.

## Article 108 — Phase VII: cross-domain transfer

Choose a second domain with clear intent, commitment, and observation boundaries.

The purpose is not to reuse WAL code. It is to prove that the transition grammar and means model travel across disciplines while domain nouns remain sovereign.

---

# Part XVII — Constitutional tests

An implementation SHALL NOT claim conformance until it can pass the following tests or document why a test lies outside its declared level.

## Test 1 — Translation invariance

Changing every visible English label to another language does not change concept identities, transition legality, bindings, or traces.

## Test 2 — Role separation

A decorative or referential glyph cannot be executed and cannot occupy a mechanism slot.

## Test 3 — Shape independence

Changing the visual shape of a mechanism under an alternate renderer does not change its semantic role.

## Test 4 — State/action distinction

The system rejects the use of a condition as a command and the use of a command as a condition.

## Test 5 — Intent/commitment distinction

A requested action cannot satisfy a transition that requires a committed state.

## Test 6 — Observation/effect distinction

An observation cannot silently mutate the observed entity.

## Test 7 — Illegal transition rejection

A transition absent from the legal topology is unrepresentable or rejected before the protected effect.

## Test 8 — Exact occurrence navigation

Selecting a symbol or arrow opens the smallest sufficient explanatory passage for that occurrence.

## Test 9 — Reverse navigation

The explanatory passage identifies and highlights the corresponding topology occurrence.

## Test 10 — Binding independence

Two implementation bindings can realize one means without changing the means identity.

## Test 11 — Behavioral retrieval

A user can find a mechanism by source state, destination state, and constraints without guessing its function name.

## Test 12 — Evidence traceability

Every verified transition leads to its evidence, and every item of evidence identifies the claim it supports.

## Test 13 — Failure explicitness

Timeouts, torn writes, permission failures, conflicts, and unknown observations appear as named outcomes rather than disappearing into prose.

## Test 14 — Accessibility equivalence

A nonvisual rendering preserves entity, state, guard, mechanism, destination, and failure distinctions.

## Test 15 — Mechanical debt

Every parent mechanism that hides relevant complexity links to a child canvas or an explicit binding contract.

## Test 16 — Prose integrity

Removing the semantic overlays leaves readable prose rather than broken rebus text.

## Test 17 — Diagram integrity

Collapsing repeated prose labels leaves an inspectable topology rather than an unexplained collection of icons.

## Test 18 — Reuse provenance

A composed program retains the identities, versions, constraints, and evidence of the means from which it was built.

## Test 19 — Runtime concordance

A runtime trace can highlight the exact path taken through the same topology shown to the reader.

## Test 20 — Invention boundary

When no lawful composition satisfies a goal, the system identifies the missing transition rather than fabricating an unmarked substitute.

---

# Part XVIII — Constitutional declaration

The alphabet is one of humanity’s great instruments. It should not be punished for failing to be every other instrument as well.

Words can carry memory, grief, humor, judgment, and possibility. They can explain why a mechanism exists, whom it protects, what it costs, where it fails, and whether its use is just. But when the same words are forced to serve as permanent identifiers, state labels, commands, executable contracts, search keys, and proofs of physical truth, their richness becomes operational uncertainty and their variation becomes technical indirection.

A mature symbolic practice does not exile language. It gives language companions.

The concept supplies identity.  
The word supplies human meaning.  
The glyph supplies recognition.  
The state supplies condition.  
The guard supplies permission.  
The diamond supplies action.  
The arrow supplies lawful consequence.  
The canvas supplies the world.  
The binding supplies execution.  
The evidence supplies warrant.  
The registry supplies memory.

Then programming changes character.

The practitioner no longer begins by producing another body of text whose names must compete with every name already written. The practitioner begins with a desired transformation, searches the known means, composes what is lawful, examines what is missing, and invents only where the world has not yet supplied an adequate mechanism.

This does not make creation finite. It makes waste finite.

A means is small enough to understand, strict enough to trust, free enough to travel, and stable enough to be found again. Its implementation may change. Its language may change. Its shape may change. Its semantic promise remains available for composition.

That is the constitutional aim:

> **Not the infinite generation of textual machinery, but the infinite use of finite, finely bounded means.**

And that is the literacy by which programming may become a discipline.

---

# Appendix A — Minimal contract template

```yaml
means:
  id: domain.mechanism
  version: 1

  accepts:
    entities:
      - concept: domain.entity
        state: source-state

  guard:
    all:
      - predicate: required-condition

  requires:
    capabilities:
      - capability.identifier
    substrate:
      - substrate.identifier

  performs:
    promise: one semantic obligation
    effects:
      - effect.identifier

  yields:
    entities:
      - concept: domain.entity
        state: destination-state
    outputs:
      - concept: domain.output

  failures:
    - failure.identifier

  properties:
    atomicity: declared-boundary
    idempotence: true | false | conditional
    compensation: none | means-id
    concurrency: strategy
    time-class: optional
    resource-class: optional

  bindings:
    - id: binding.identifier
      implementation: repository/path
      member: symbol
      version: commit-or-package-version

  evidence:
    - id: evidence.identifier
      kind: test | proof | benchmark | trace | inspection

  explanation:
    first-occurrence: prose.occurrence-id
```

# Appendix B — Minimal transition template

```yaml
transition:
  id: domain.source-to-destination

  subject:
    concept: domain.entity

  from:
    state: source-state

  when:
    guard: guard.identifier

  via:
    means: domain.mechanism

  to:
    state: destination-state

  otherwise:
    - failure.identifier

  explanation:
    occurrence: prose.occurrence-id

  topology:
    canvas: canvas.identifier
    occurrence: topology.occurrence-id
```

# Appendix C — Editorial introduction template

```md
The **<lexeme>** <glyph concept="concept.id" occurrence="prose.id">
is <plain explanation of what the thing is>.

It matters here because <causal role>.

It is not the same as <nearest dangerous confusion>.
```

# Appendix D — Review questions

Before admitting a concept:

1. Is this an enduring semantic distinction or merely a preferred word?
2. Does another concept already possess the same contract?
3. Can the concept be taught without relying on its glyph?
4. Can its glyph be rendered accessibly?
5. Does translation preserve or reveal a finer distinction?

Before admitting a means:

1. What exact source condition does it accept?
2. What one promise does it make?
3. What exact destination condition does it establish?
4. What can fail?
5. What effects occur?
6. Which substrate assumptions are hidden?
7. Is the means already present under another name?
8. What evidence warrants reuse?
9. Can it compose without violating authority or invariants?
10. Which prose passage teaches it honestly?

Before admitting an executable canvas:

1. Is every role typed?
2. Is every branch explicit?
3. Is every bridge compatible?
4. Is every mechanism bound or deliberately abstract?
5. Are intent, observation, acknowledgement, commitment, and physical state distinguished?
6. Can the same canvas be rendered in another language?
7. Can a reader move from every consequential arrow to its explanation?
8. Can the runtime reject every pictured-illegal transition?
