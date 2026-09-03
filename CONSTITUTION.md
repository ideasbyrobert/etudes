# The Constitution of Symbolic Means

## Founded on the One Rule: a paradigm for conditions, mechanisms, evidence, time, continuity, concordant communication, and the infinite use of finite means

**Status:** Consolidated founding draft  
**Version:** 0.2  
**Reference implementation:** [`prereq-write-ahead-log`](prereq-write-ahead-log/)  
**Baseline artifact:** [`prereq-write-ahead-log/doc/CONTEXT.png`](prereq-write-ahead-log/doc/CONTEXT.png)  
**Companion teaching text consolidated into this draft:** *The One Rule*

---

## Abstract

Human beings have asked natural language to do too many incompatible jobs. The same prose that excels at metaphor, qualification, humor, indirection, emotional cadence, and the productive ambiguity of literature is also expected to identify domain entities, distinguish conditions from actions, state lawful transitions, describe effects, serve as an interface contract, index reusable implementations, and instruct computers without ambiguity. The result is not merely verbose documentation. It is a representational disorder in which intention is mistaken for commitment, acknowledgement for reality, observation for mutation, a date for a cause, a noun for a command, and one author’s “save” for another author’s “write,” “flush,” “persist,” “commit,” or “synchronize.”

This Constitution joins two parts of one invention.

The first is **the One Rule**:

> **Nothing happens until everything it requires is already true.**

Its teachable form is:

> **Conditions enable mechanisms. Mechanisms produce conditions.**

Its operational form is a firing rule: a mechanism may fire only when its branch is active, every required source condition is assessed true, every sustained source condition remains valid, the acting party can present evidence satisfying the mechanism’s policy, and the explicit guard permits the transition.

The second part is **Symbolic Means**: the semantic and representational practice by which that firing rule becomes teachable, multilingual, executable, verifiable, and reusable. Natural language explains. Stable concept identities preserve meaning across languages and media. Words and symbols render those concepts as siblings. States declare conditions. Diamonds render mechanisms. Arrows render lawful transitions. Canvases declare one coherent world, tracked entity, goal, mode, and substrate. Bindings perform mechanisms. Evidence permits results to be admitted. Append-only history preserves continuity. A registry makes means discoverable by what they transform rather than by the accidental words used to name them.

A **means** is finite in contract and fine in responsibility. It accepts known entities in known conditions, under declared guards, actors, evidence policies, capabilities, and substrate assumptions; it performs one semantic promise; and it yields declared destination conditions or named failures. Programs become compositions of means. Plans become causal models rather than wish lists. Dates become outputs of topology and honest duration classes rather than inputs that pretend to command reality. The present becomes a fold over an append-only history. The frontier becomes the exact boundary of what the current model, evidence, ownership, and guards permit now.

The ambition is not to replace prose with pictures, nor to replace source code with diagrams, nor to claim that any isolated ingredient is unprecedented. The ambition is to close the circuit among prose, symbols, topology, execution, evidence, history, and retrieval so that the same semantic identity can be explained in a message, taught in a textbook, rendered on a canvas, enforced by a runtime, found in a registry, and reused through another implementation without dependence upon one natural language or one codebase’s local vocabulary.

The constitutional aim is therefore:

> **Not the infinite generation of textual machinery, but the infinite use of finite, finely bounded means.**

---

## Normative language

The words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are used normatively.

- **MUST / SHALL** identifies a condition without which an implementation is not conformant.
- **SHOULD** identifies a condition that may be departed from only for a documented reason.
- **MAY** identifies a permitted choice.
- Explanatory passages without these terms remain part of the constitutional argument but are not, by themselves, machine-testable requirements.

The rhetorical form of the One Rule is universal. Its formal application is model-relative: a mechanism can be correctly enabled only if its real prerequisites have been represented. A graph that omits a requirement may still be wrong while satisfying its own syntax. Conformance improves semantic discipline; it does not grant omniscience.

---

# Preamble

A civilization advances not only when it discovers new facts, but when it invents a notation in which old facts may be handled without being continually rediscovered. Numbers did not create quantity. Musical notation did not create sound. Chemical formulae did not create matter. Circuit symbols did not create electricity. Each notation relieved natural language of a burden for which prose was never the best instrument, gave practitioners durable objects of thought, and permitted operations to be inspected, repeated, taught, criticized, and composed.

Put a hand on a table. The table does not remain beneath the hand because reality has printed the word *supported*. It remains because the physical relations required for support continue to hold. The instant they cease to hold, the table falls.

Consider a shrine rebuilt through generations, a bowl repaired without erasing its fracture, or an étude practiced until the hand can reliably perform what it once could not. Continuity does not always mean preserving the same material untouched. It often means making a condition true again while retaining the history of how it was lost, restored, and maintained.

Consider two people divided by war. “Soon” is not a mechanism. A calendar does not issue a visa, preserve a livelihood, open a door, or maintain a life together. The useful question is not first *When will the outcome arrive?* but *What must be true immediately before the outcome can become true?* Once those requirements are named, action, waiting, evidence, uncertainty, and time become legible.

The same law appears in a storage device. A machine may say *Saved* while bytes remain in volatile memory. An institution may say *Received* while an authoritative decision does not yet exist. These systems differ in material, scale, actors, and duration. They need not share nouns. They can nevertheless share a causal grammar:

```text
condition → mechanism → condition
```

A declaration is not the condition it resembles. A schedule is not the cause it predicts. A record of the past is not permission to rewrite the past. A small request may entail enormous hidden work. A thing waiting on an external actor is not necessarily failing. A sustained truth is not merely stored; it is maintained.

Software has acquired powerful programming languages, type systems, protocols, state machines, diagramming conventions, formal methods, package registries, and vast bodies of source code. Yet ordinary programming still lacks a stable, language-independent correspondence among the nouns of a field, the conditions in which those nouns may exist, the mechanisms that lawfully transform them, the evidence that permits their results to be admitted, the diagrams that teach them, the prose that explains them, the code that performs them, the history that preserves them, and the registry by which they may be found again.

Consequently, the industry searches for behavior by guessing words. It reads hundreds of pages to discover one transition. It treats names as identities, images as specifications, functions as mechanisms, return values as physical truth, and repeated implementation as invention. Existing behavior is often reproduced because it cannot be found except by knowing in advance the vocabulary of its author.

This Constitution proceeds from a different conviction:

> A discipline becomes widely teachable and deeply reusable when its entities possess stable identities, its conditions are distinct from its actions, its actions are expressed as evidence-governed transitions, its time is derived from causality, its history is append-only, and its means can be explained, rendered, executed, verified, and retrieved without dependence upon one natural language or one implementation dialect.

The purpose is not to make prose mechanical. It is to release prose from mechanical servitude.

---

# Part I — The governing rule and the representational problem

## Article 1 — The One Rule

The governing rule is:

> **Nothing happens until everything it requires is already true.**

For a conformant model, this means:

> No mechanism SHALL be treated as enabled until every represented prerequisite of that mechanism is satisfied under the current branch, validity, evidence, actor, capability, and guard conditions.

The rule does not say that desire, urgency, repetition, scheduling, or confidence are worthless. It says none of them may substitute for a missing prerequisite.

A date does not enable a mechanism. A status label does not establish a condition. An intention does not prove a commitment. An acknowledgement does not become physical truth by being optimistic. A mechanism fires because the conditions that enable it hold.

## Article 2 — Reality is not made of statements

Reality is made of conditions holding under whatever sustains them.

A statement MAY report a condition. A promise MAY describe a future condition. An interface MAY announce a condition. None is identical to the condition itself.

A conformant system SHALL distinguish:

```text
declared condition
```

from:

```text
physical, institutional, logical, or otherwise authoritative condition
```

when the distinction can affect safety, legality, durability, obligation, or action.

Nothing real is announced into existence. Everything real is achieved or held into existence by the relations and mechanisms it requires.

## Article 3 — Achievement and maintenance are different causal forms

Some conditions are achieved once and remain historically achieved. Other conditions remain true only while maintenance continues.

A visa may have been issued. A livelihood may later lapse. A record may have been durably written. A replicated invariant may later be lost. A person may have arrived. A life together may still require housing, health, legal status, care, and income to remain valid.

The grammar SHALL distinguish:

- **achievement**, which records that something occurred; and
- **sustained validity**, which records whether a condition continues to hold now.

Keeping is not mere storage. Keeping is action.

## Article 4 — Goals shall be written as conditions, not calendars

Ordinary plans begin with tasks and dates:

```text
file the form
wait for review
move next year
finish on the fifteenth
```

Tasks are useful verbs, but they do not by themselves expose what permits the verbs to occur. Dates are useful projections, but they do not make prerequisites true.

A linear goal SHALL be expressed as an outcome condition.

A cybernetic goal SHALL be expressed as a maintained property.

The governing question is:

> **What must be true immediately before this condition can become true?**

The question SHALL be repeated until the chain reaches declared baselines or externally determined conditions.

## Article 5 — Natural language has a proper greatness

Natural language is not defective because it admits synonyms, antonyms, metaphor, ellipsis, indirection, context, tone, uncertainty, and multiple levels of implication. These are among its greatest achievements.

A poet may call the sea a road, a grave, a mirror, or a border, and the reader gains rather than loses. An historian may vary *king*, *sovereign*, *monarch*, and *ruler* to control cadence or sharpen a distinction. An essayist may delay a noun so that understanding arrives as discovery rather than definition.

Technical practice suffers only when the same freedoms are unconsciously imported into identity, condition, and command.

“Save,” “write,” “persist,” “flush,” “commit,” and “synchronize” may name different mechanisms, different layers of one mechanism, or merely different authors’ preferred words. “Ready,” “available,” “active,” “open,” and “live” may denote distinct conditions or careless synonyms. “Sent” may mean composed, submitted, accepted, durably recorded, delivered, or read.

The solution is not to sterilize prose. The solution is to stop asking prose to carry the whole ontology and execution model unaided.

## Article 6 — Alphabetic confinement is not merely a translation problem

English dominance is real in many technical settings, but replacing English with another natural language would not cure the deeper defect. The defect is the confinement of domain identity, operational role, and executable meaning inside general-purpose strings.

A practitioner who learns English gains access to documentation. That achievement is valuable. It does not, by itself, confer an understanding of causal order, failure boundaries, durability, invariants, admissible state, evidence policy, or the difference between an instruction and a report.

Engineering literacy SHALL be measured in mechanisms, conditions, constraints, evidence, and effects—not in fluency in the accidental language of their labels.

No natural language SHALL occupy the authoritative identity layer of Symbolic Means. English, Armenian, Mandarin, Spanish, Arabic, and every other language SHALL be renderings of concepts, not owners of them.

## Article 7 — The encoding-deprivation demonstration

To understand the present condition of programming, consider a mathematician who is not asked to invent a new mathematics and is not forbidden to reason. The mathematician may use English alone. Digits and mathematical operators are removed as a matter of encoding.

The mathematician can still write:

```text
seventeen plus nine equals twenty-six
```

The loss may initially appear small. Now require positional arithmetic, aligned multiplication, substitution, comparison of derivations, factorization, or a proof whose repeated structure must be inspected at a glance.

```text
  347
×  26
-----
 2082
 6940
-----
 9022
```

The English-only equivalent can be narrated, but the operation ceases to be a compact, inspectable arrangement of stable tokens. Carrying, position, grouping, precedence, and substitution migrate into sentences and memory.

Likewise:

```text
∀ n ∈ ℕ, n + 0 = n
```

can be paraphrased as:

```text
For every natural number, adding the additive identity to that number
produces that same number.
```

The sentence is intelligible. It is also less directly substitutable, less visually comparable, and more dependent upon prose parsing. With every additional line, the tax compounds.

The point is not that mathematics becomes impossible. Rhetorical mathematics existed before modern notation, and a determined mathematician could continue. The point is that a discipline loses practical literacy when the notation of its characteristic objects and operations is removed.

Programming languages possess punctuation, operators, types, and formal grammars. Programmers are therefore not literally deprived of symbols. The deprivation occurs one level higher: the identities and transitions of application domains remain encoded in local names, comments, diagrams, guides, framework conventions, and repository folklore. Braces can express a block. They cannot tell us whether *saved* means buffered, synchronized, replicated, acknowledged, or merely displayed.

In this precise sense, ordinary programmers resemble mathematicians provided with grammar but deprived of shared numerals for the things they repeatedly manipulate.

## Article 8 — A strict use of the word discipline

This Constitution uses **discipline** in a strict technical sense:

> A discipline possesses stable objects of study, teachable notation for its characteristic transformations, compositional rules, inspectable evidence, and a body of reusable means whose identity does not depend upon one practitioner’s vocabulary or one tool’s syntax.

Mathematics is a discipline although it contains many schools and notations. Chemistry is a discipline although nomenclature evolves. Music is a discipline although traditions differ. Their practitioners can disagree while still handling many common objects and operations through durable notation.

Computer science contains mature formal disciplines. Programming-language theory, logic, automata, type theory, algorithms, information theory, and formal verification possess exact objects and methods. Software engineering also contains rigorous specialties.

The constitutional claim is narrower and more radical:

> **Programming as ordinary cross-domain construction is not yet a unified discipline.**

Its everyday unit of reuse is usually a file, function, class, package, endpoint, or snippet whose discoverability depends upon names. Its diagrams are usually non-binding. Its domain conditions are usually strings or enums local to a codebase. Its mechanisms are usually conflated with implementations. Its guides repeatedly explain distinctions that the language cannot preserve across projects.

This claim concerns the representational condition of ordinary practice. It is not a denial of existing science, craft, or excellence.

## Article 9 — Stagnation shall not be presumed to be malice

When experts endure guides stretching across hundreds of pages, when two teams use the same word for different guarantees, when a library implementing the required behavior cannot be found, or when a diagram contradicts the runtime, incompetence and bad faith MUST NOT be presumed without evidence.

A practitioner cannot be literate in a language that has not yet been invented.

The proper response is not contempt for the worker. It is construction of the missing notation, contracts, evidence, and means.

---

# Part II — Semantic identity, sibling renderings, and the authority gradient

## Article 10 — Concepts precede all renderings

Every reusable semantic object MUST possess a language-independent **concept identity**.

Words, abbreviations, pictograms, shapes, spoken phrases, tactile forms, source-code names, and vendor assets are renderings of that identity. None is the identity itself.

A translation MAY change without changing the concept. A glyph MAY change without changing the concept. A binding MAY change without changing the means. An incompatible semantic change MUST create a new concept version, means version, or identity.

## Article 11 — Word and symbol are siblings

A semantic symbol MUST be introduced through comprehensible context. In ordinary pedagogy, the word teaches the symbol at first appearance, and the symbol thereafter preserves recognition across prose, diagrams, languages, and execution surfaces.

The word SHALL NOT be treated as a caption subordinate to the symbol. The symbol SHALL NOT be treated as ornament subordinate to the word. Both refer to the concept.

> **The word teaches the face.**  
> **The face remembers the thing.**

A symbol is not universal because every observer can guess it without instruction. It becomes portable because its concept identity is stable, its introduction is taught, its recurrence is consistent, its translations remain concordant, and its accessible renderings preserve the same role.

## Article 12 — Identity, condition, and action shall be disjoint

A **concept reference** identifies.

A **condition assertion** says what currently holds, does not hold, or is not honestly known about an entity.

A **mechanism** acts or inquires.

A **transition** states the lawful relation among source conditions, branch, actor, guard, evidence policy, mechanism, destination conditions, effects, and failures.

These roles MUST be distinct in the semantic model, even when a renderer chooses related visual forms.

A decorative mark MUST NOT acquire executable authority by resemblance. A mechanism MUST NOT be inferred from an image. The semantic role MUST be declared before rendering.

## Article 13 — Authority increases by level

Symbolic Means applies from ordinary communication to executable systems, but semantic and executable authority increase by level.

A mark that helps a reader recognize a payment in a message does not thereby gain the authority to debit an account. A diamond in a textbook does not thereby become a command. A command becomes executable only when its typed semantic object, binding, guard, evidence, actor, capability, and invocation policy permit it.

The levels are cumulative in meaning but not automatic in authority.

## Article 14 — The seven levels

### Level 0 — Ornament

An ornamental symbol carries no semantic identity and no executable authority.

```text
role: ornament
```

A renderer or accessibility tool MAY ignore it. It MUST NOT be treated as a command, state, or concept merely because it resembles a known glyph.

### Level 1 — Semantic anchors in ordinary messages

A day-to-day message MAY attach stable concepts and conditions to ordinary prose.

> The payment [payment glyph] has been submitted [submitted condition].

The sender need not draw a topology. The recipient may inspect the state trail only when needed. The symbol preserves the identity of the payment; the condition prevents *submitted* from being mistaken for *settled*.

At this level, the message explains or reports. It MUST NOT execute a financial operation merely because an imperative-looking glyph appears in the text.

### Level 2 — Editorial prose

In essays, reports, manuals, journalism, and long-form explanation, symbols MAY stabilize consequential nouns while prose retains style.

An editor may write *record*, *entry*, or *logged intention* for cadence while binding each occurrence to the same concept where the meaning is truly identical. Where meanings differ, distinct identities force the distinction into the open.

Editorial freedom remains. Normative ambiguity does not.

### Level 3 — Textbooks and diagrams

A textbook SHOULD introduce a symbol within explanatory prose before expecting the reader to recognize it in a topology.

> The bytes first enter the **page cache** [page-cache glyph]. Reads may already see them, but power loss may still remove them.

The later canvas may retain the causal skeleton:

```text
[record] → ◇ write → buffered → ◇ synchronize → durable
```

Selecting the page-cache glyph returns to the exact sentence that introduced it. Selecting the synchronization transition returns to the explanation of visibility, durability, cost, evidence, and failure.

The diagram becomes memory and navigation, not a cramped first lesson.

### Level 4 — Professional protocol

In operational disciplines, a topology may define a normative procedure without directly executing it.

Examples include:

```text
Medication: prescribed → dispensed → administered
Payment: initiated → authorized → settled
Specimen: collected → labeled → verified → analyzed
Change: proposed → reviewed → approved → deployed
Petition: filed → received → adjudicated → decided
```

The grammar is shared; the domain concepts are governed by experts in their own fields.

### Level 5 — Executable topology

At the executable level, mechanism nodes bind to implementations. Transitions are validated and enforced. Runtime traces refer to the same concept, occurrence, and claim identities used by the textbook.

An executable topology MUST NOT infer authority from appearance. It executes only typed mechanism objects with valid bindings, guards, evidence, actors, and capabilities.

### Level 6 — Semantic retrieval and composition

At the highest current level, a registry may answer:

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

The answer may be implemented in JavaScript, Rust, Swift, a database engine, an operating-system service, or hardware. The means is retrieved by contract rather than by the spelling of its function.

## Article 15 — Universality shall not mean visual exclusivity

A universal semantic identity MUST be renderable through more than sight alone.

Conformant systems SHOULD provide text labels, spoken descriptions, keyboard navigation, structured machine output, and—where relevant—tactile or haptic representations.

Color MUST NOT be the sole carrier of semantic role. A glyph MUST NOT require cultural guesswork without a taught mapping. A nonvisual rendering MUST preserve the distinction among entity, condition, mechanism, transition, guard, evidence, destination, and failure.

## Article 16 — Explanation and execution shall remain concordant

Every important semantic occurrence in prose SHOULD be addressable from the corresponding topology occurrence.

Every executable transition SHOULD expose its explanation, limitations, evidence, implementation provenance, and runtime history.

The path MUST work in both directions:

```text
prose ↔ symbol occurrence ↔ topology ↔ claim ↔ means ↔ binding ↔ evidence ↔ trace
```

A change to one surface SHOULD produce a reviewable impact set across every other surface that shares the same identities.

---

# Part III — Ontology of conditions, mechanisms, evidence, and continuity

## Article 17 — Core terms

| Term | Definition |
|---|---|
| **Concept** | A stable, language-independent semantic identity for a kind of thing, condition, action, relation, unit, policy, or claim. |
| **Lexeme** | A natural-language word or phrase that renders a concept in a locale and context. |
| **Glyph** | A visual rendering of a concept. A glyph identifies; it does not execute. |
| **Occurrence** | One contextual appearance of a concept, condition, mechanism, claim, or means in prose, topology, code, evidence, or runtime history. |
| **Claim** | A proposition asserted by a relation, transition, explanation, or evidence item. |
| **Entity** | A concrete or logical noun whose identity and condition are tracked. |
| **State type** | A named condition that may meaningfully be asserted about an entity concept. |
| **Condition assertion** | An entity–state proposition with an assessed valuation and epistemic grade. |
| **Baseline** | A condition accepted as given or externally determined for a canvas, with no internal producing mechanism. |
| **Intermediate condition** | A condition on a causal path that carries no special monotonicity, maintenance, gate, or goal role unless one is declared. |
| **Achievement condition** | A condition recording that an event or transformation occurred; its historical achievement is monotone. |
| **Sustained condition** | A condition whose present validity must continue to be maintained and may lapse. |
| **Gate** | A condition whose admission requires a nontrivial evidence policy; not merely a visual shape. |
| **Outcome** | The goal condition of a linear canvas. |
| **Maintained property** | The invariant or set of sustained conditions governed by a cybernetic canvas. |
| **Assessed valuation** | The model author’s current assessment: true, false, or honestly unassessed. |
| **Epistemic grade** | The strength of support for an assessment: unknown, possible, probable, or known. |
| **Proposed dependency** | A hypothesized causal relation not yet admitted into enablement. |
| **Inquiry** | A mechanism that changes knowledge without directly changing the external world condition. |
| **Intent** | A requested or proposed future transformation. Intent does not prove performance or commitment. |
| **Commitment** | A condition in which a declared obligation has crossed its defined admission boundary and may be relied upon under stated assumptions. |
| **Acknowledgement** | A message reporting acceptance, observation, or progress. It is not automatically authoritative evidence of commitment. |
| **Observation** | A read, measurement, or report that does not by itself mutate the observed entity. |
| **Actor** | The entity or party that owns and may perform a mechanism. |
| **Guard** | An explicit predicate over the current configuration that must permit a mechanism to fire. |
| **Evidence policy** | The rule describing what support an actor must present before produced conditions may be admitted. |
| **Mechanism** | A typed action or inquiry with source conditions, actor, guard, evidence policy, effects, outcomes, and one semantic promise at its exposed level. |
| **External process** | A mechanism owned and activated by an entity other than the owner of the tracked entity. |
| **Deposit state** | A condition in which the tracked entity has exhausted its currently owned actions and waits for an external mechanism. |
| **Branch** | A preserved causal alternative with an active, preserved, or rejected status. |
| **Decision** | A mechanism that changes branch status while preserving the history and rationale of alternatives. |
| **Transition** | A lawful passage from source conditions to destination conditions through a mechanism under branch, guard, evidence, and actor constraints. |
| **Effect** | A declared interaction with state, I/O, time, external systems, authority, or resources. |
| **Failure** | A named outcome in which the intended postcondition is not established. |
| **Invariant** | A proposition a canvas or resident entity is required to maintain. |
| **Payload** | The size or magnitude of the initiating entity or request. |
| **Work** | The actual substrate effort required by a mechanism. |
| **Amplification** | A declared disproportion between work and payload. |
| **Duration class** | An honest interval or class of elapsed time associated with a mechanism; not a promised completion date. |
| **Canvas** | One coherent causal model with one tracked entity, one goal or maintained property, one mode, and one declared substrate. |
| **Mode** | Linear for arrival at an outcome; cybernetic for continued validity of maintained properties. |
| **Bridge** | A typed handoff from one canvas to another. |
| **Convergence** | A transition requiring several source conditions or bridge outputs before firing. |
| **Frontier** | The current set of enabled mechanisms, external deposits, and sustained conditions at risk. |
| **History** | The append-only sequence of admitted model mutations and evidence-bearing events. |
| **Means** | A reusable semantic transformation independent of any one implementation binding. |
| **Binding** | An implementation that realizes a means on a declared substrate. |
| **Evidence** | An artifact, confirmation, test, proof, measurement, trace, attestation, or other warrant admitted under a policy. |
| **Registry** | An index of concepts, occurrences, claims, means, bindings, evidence, versions, and provenance. |
| **Concordance** | The bidirectional correspondence among prose, symbols, topology, implementation, evidence, history, and execution. |

## Article 18 — Semantic identity, occurrence identity, and claim identity

A concept identity answers:

> What enduring thing is this?

An occurrence identity answers:

> Which appearance of that thing, under which local concern, is being discussed?

A claim identity answers:

> Which proposition is this sentence, edge, mechanism contract, evidence item, or runtime event asserting?

For example:

```text
concept:    wal.log
occurrence: wal.log@recovery.torn-tail
occurrence: wal.log@replay.source-of-truth
claim:      wal.sync.precedes-durable-admission
```

A reader selecting the log glyph in a recovery canvas SHOULD arrive at the passage about the torn tail, not merely at a generic dictionary entry for *log*.

## Article 19 — A state belongs to exactly one entity

Every state type SHALL belong to exactly one entity concept. Every condition assertion SHALL identify the entity instance whose condition it concerns.

A state does not contain another state. A vague container such as “the process is in a state containing several states” MUST be decomposed until each condition belongs to the thing whose condition it actually is.

This is the perimeter rule: truth must have an owner.

## Article 20 — Baselines expose assumptions

A baseline is accepted as given or externally determined for the canvas. It has no producing mechanism inside that canvas.

Every producer-less condition MUST be declared as:

- baseline given;
- baseline externally determined; or
- unsupported.

A producer-less state that is not declared is a hidden assumption.

The war in a personal strategy, the existence of an already-created file, or the initial physical condition of a device may serve as baselines. Declaring them does not prove them; it identifies the boundary at which this canvas begins.

## Article 21 — Intermediate conditions, achievement, sustained validity, gates, and outcomes

An intermediate condition marks a relevant point on a causal path without, by itself, claiming historical monotonicity, continued maintenance, evidentiary admission, or goal status.

An achievement condition records that something occurred. Once admitted, its historical occurrence SHALL NOT be erased.

A sustained condition records what remains valid now. It MAY lapse. A lapse changes present validity without deleting prior attestation or completed achievement.

A gate is a condition whose producing mechanisms require a nontrivial evidence policy. It cannot become admitted because a card was dragged, a checkbox was selected, or a user feels confident.

An outcome is the goal of a linear canvas and SHALL be written as a condition rather than a date.

A maintained property is the goal of a cybernetic canvas and SHALL identify what must continue to hold.

These roles are not necessarily exclusive. A condition may be both an outcome and a gate, or both an achievement and the entry condition of a successor maintenance canvas. The semantic source SHALL represent the distinctions required by the model rather than forcing every condition into one mutually exclusive bucket.

## Article 22 — Truth assessment and knowledge are separate dimensions

For every relevant condition `s`, the model SHALL record an assessed valuation:

```text
α(s) ∈ {1, 0, ?}
```

where:

- `1` means assessed true;
- `0` means assessed false;
- `?` means not honestly assessed.

The model SHALL also record an epistemic grade:

```text
unknown < possible < probable < known
```

The valuation says what the author currently assesses. The grade says how strongly that assessment is supported.

A confident interface MUST NOT collapse “entered as true” into “known to be true.”

When a mechanism requires several source conditions, the sanctioned aggregate epistemic grade is no stronger than the weakest required condition. Informal confidence percentages MUST NOT be multiplied down a chain and presented as case strength without a separately justified probabilistic model.

## Article 23 — Inquiries and proposed dependencies

An inquiry is a mechanism whose primary product is knowledge rather than world change.

It MAY move a condition’s epistemic grade from unknown toward known while leaving the external condition unchanged. Its answer MAY require the canvas to be redrawn because discovering reality can expose a false dependency, a missing branch, or an invalid assumption.

A proposed dependency is a hypothesis. It MUST NOT participate in enablement until admitted through the relevant review and evidence process.

This permits the model to say:

> We suspect `A` is required for `B`.

without allowing the suspicion to control the frontier as though it were established.

## Article 24 — Guards and evidence policies are different

A guard expresses a situational constraint over the current configuration.

An evidence policy expresses what support the actor must present before the mechanism’s produced conditions may be admitted.

The minimal evidence-policy language is:

```text
p ::= ⊤ | self | artifact | external | p ∧ p
```

where:

- `⊤` means no additional evidence is required beyond the mechanism’s other conditions;
- `self` admits self-attestation;
- `artifact` requires a produced artifact;
- `external` requires confirmation from an authoritative external party;
- `p ∧ p` requires composite evidence.

The policy MUST match the party that controls the truth.

Evidence is not documentation attached after the event. It is part of the firing rule.

## Article 25 — A mechanism is not merely a verb

A mechanism transforms required source conditions into produced conditions or changes knowledge under declared constraints.

A mechanism is not complete until the model can answer:

- what enables it;
- which branch contains it;
- who owns it;
- which guard applies;
- what evidence the actor must present;
- what effects it performs;
- what conditions it produces;
- what may fail;
- how much work the substrate may require;
- whether its duration is honestly known;
- which means contract and binding realize it.

A verb in a task list is an intention. A mechanism is a causal contract.

## Article 26 — Intent, commitment, acknowledgement, and observation shall remain distinct

The following roles MUST remain separate:

```text
Intent:
    a request or proposed action exists.

Commitment:
    the system has crossed a declared boundary after which the obligation
    may be relied upon under stated assumptions.

Acknowledgement:
    a message reports acceptance, progress, or state.

Observation:
    a read or measurement reports without necessarily mutating.
```

An intention cannot satisfy a transition requiring commitment.

An acknowledgement MAY precede commitment. When it does, the declared and authoritative conditions MUST be modeled separately.

An observation MUST NOT silently acquire imperative effects.

## Article 27 — Interface-lie pairs name semantic gaps

Many systems announce a state before the corresponding physical or authoritative condition exists.

Examples include:

```text
operating-system acknowledgement ∥ physical durability
receipt issued ∥ petition adjudicated
payment submitted ∥ funds settled
status page reassurance ∥ verified institutional condition
```

The word **lie** names the structural gap, not necessarily malicious intent. The interface may accurately report that it accepted responsibility. The danger appears when the consumer treats that acknowledgement as the final state it resembles.

For an interface-lie pair, only a mechanism with an evidence policy strong enough to establish the authoritative condition may close the gap.

Reassurance does not close it. Repetition does not close it. A more optimistic date does not close it.

## Article 28 — Decisions preserve alternatives

A decision mechanism changes branch status.

A chosen branch becomes active. Other branches SHOULD remain preserved unless a later append explicitly rejects or supersedes them.

Preservation is not indecision. It is conservation of rationale.

A future change in baselines, evidence, policy, or risk may make a preserved route relevant again. Deleting it would force a successor to rediscover the rejected world from memory.

## Article 29 — Waiting is a condition, not a personal failure

A tracked entity may reach a condition in which every mechanism owned by its actor has been exhausted and all consuming mechanisms belong to external actors.

This is a **deposit state**.

A dirty page waits for writeback. A petition waits for adjudication. A payment waits for settlement. The tracked entity is parked and must be pulled by a mechanism owned elsewhere. The external mechanism behaves as an event listener governed by its own conditions and actor; it is not a scheduled servant of the waiting entity.

A conformant frontier SHALL show:

- that the entity is not presently able to move itself;
- which external actor owns the next mechanism;
- which evidence or guard remains missing;
- whether the deposit is bounded, at risk, or capable of starving.

Generic labels such as *pending* or *delayed* SHOULD be replaced by the exact deposit, owner, and missing condition.

## Article 30 — Amplification is part of the mechanism’s public meaning

A small payload may induce very large work.

A few kilobytes may require megabytes of flash operations. A one-page filing may trigger months of institutional process. A small source edit may rebuild a large dependency graph. A tiny request may cause a distributed quorum, cache invalidation, and replication.

Payload and work SHALL be recorded separately where their distinction matters.

When:

```text
work / payload
```

exceeds the declared threshold, the amplification SHALL become part of the mechanism’s public signature rather than a footnote.

The correct question is not merely “Why is this small request taking so long?” It is “What work does this substrate require in order to honor it?”

## Article 31 — A canvas expresses one coherent truth

A canvas is one coherent causal model. It has:

- one tracked entity;
- one outcome or maintained property;
- one mode;
- one declared substrate and authority boundary;
- a finite set of entities, conditions, mechanisms, branches, bridges, and evidence policies.

“One truth per canvas” does not mean the author is omniscient. It means the canvas presents one coherent account while representing uncertainty explicitly through valuation, epistemic grade, inquiry, and proposed dependency.

Distinct substrates or genuinely different physical truths require distinct canvases connected by explicit bridges.

## Article 32 — Linear and cybernetic modes shall not be conflated

A linear canvas models arrival at an outcome.

A cybernetic canvas models the continued validity of a maintained property.

Arrival and preservation are not the same operation. A terminal node in a linear canvas MAY instantiate a successor cybernetic canvas.

Visual feedback loops MAY render recurring maintenance, but a conformant formal model SHALL distinguish repeated time-indexed maintenance from a same-version causal cycle that allows a condition to produce itself.

## Article 33 — Bridges and convergence connect sovereign canvases

A canvas is a source when it emits a typed entity or condition. It is a destination when it accepts that output under matching preconditions.

A bridge MUST declare whether it:

- preserves concept identity;
- transforms one concept into another;
- changes authority or ownership;
- changes substrate;
- changes durability, validity, or trust;
- carries evidence;
- requires convergence with other bridges.

A convergence mechanism SHALL NOT fire until every required incoming entity or condition exists in the required state, unless its semantics explicitly permit partial progress.

## Article 34 — Means, bindings, evidence, registries, and concordance

A means is the reusable semantic transformation.

A binding is one implementation of that means on a declared substrate.

Evidence warrants the binding, claim, condition admission, or means maturity.

The registry preserves identities, versions, taxonomies, occurrences, claims, means, bindings, evidence, and provenance.

The Concordance joins every surface so that explanation, topology, execution, and history remain mutually navigable.

A source file is not a means. A function is not automatically a means. A picture is not a means. A means may be implemented by several files, exposed by several functions, or realized by several platforms.

---

# Part IV — Visual grammar and the concordance of words with symbols

## Article 35 — The canonical visual roles

The default visual grammar is:

| Semantic role | Canonical rendering |
|---|---|
| Entity | Box or bounded container |
| Condition / state | Circle, capsule, or perimeter marker |
| Mechanism | Diamond |
| Transition | Directed arrow |
| Canvas | Bounded field with goal, mode, and substrate |
| Bridge | Typed transition crossing canvas boundaries |
| Feedback | Directed recurrence or maintenance loop |
| Convergence | Explicit multi-input gate or mechanism |
| Concept rendering | Glyph placed within or beside the semantic role it identifies |

Renderers MAY vary these forms, but MUST preserve role metadata and perceptual distinguishability.

## Article 36 — Shapes render semantics; they do not create them

A diamond is rendered because the underlying object is a mechanism. It is not a mechanism because it resembles a diamond.

A box is rendered because the underlying object is an entity boundary. It does not become an entity by being rectangular.

A concept glyph and a mechanism diamond may both be visually prominent, but they belong to disjoint semantic kinds:

```yaml
kind: concept-reference
concept: wal.record
```

cannot be substituted for:

```yaml
kind: mechanism
means: storage.synchronize
```

A conformant validator MUST reject that substitution before rendering or execution.

This rule permits alternate shapes for accessibility, culture, medium, tactile output, audio rendering, or domain convention while preserving semantic interoperability.

## Article 37 — The visual sentence

The grammar follows a sentence-like order:

```text
ENTITY in SOURCE_CONDITION
    -- [GUARD + EVIDENCE] / MECHANISM -->
ENTITY in DESTINATION_CONDITION
```

- The **entity** supplies the noun.
- The **condition** supplies what currently holds.
- The **mechanism** supplies the action.
- The **guard** supplies the situational “if.”
- The **evidence policy** supplies the admissibility requirement.
- The **actor** supplies ownership of the action.
- The **arrow** supplies the causal and temporal claim.
- The **canvas** supplies the world in which the claim is asserted.

Entities SHALL NOT touch directly in a causal graph. Causality passes through condition and mechanism:

```text
condition → mechanism → condition
```

This forces every causal claim to name what must hold, what acts, and what becomes true afterward.

## Article 38 — One promise per diamond

Every mechanism exposed on a canvas SHOULD make one semantic promise.

“Fine” does not mean one diamond per instruction, syscall, keystroke, or transistor. It means the mechanism has one coherent obligation at the current level of abstraction.

Examples:

- **Frame** promises an unambiguous record boundary.
- **Append** promises addition at the tail without rewriting earlier bytes.
- **Synchronize** promises passage across a declared durability boundary.
- **Adjudicate** promises an authoritative decision under an institutional policy.
- **Truncate** promises removal beyond a declared valid boundary.
- **Replay** promises reconstruction from ordered history.
- **Inquire** promises epistemic progress without pretending to alter the world.

A mechanism whose internal work is substantial MAY expand into a child canvas.

## Article 39 — Resident and transitory entities

A **transitory entity** enters a canvas, transforms, and resolves through a finite path.

A **resident entity** persists and is maintained through repeated mechanisms and validity attestations.

Every canvas SHOULD declare one primary tracked entity or one resident invariant. Other entities MAY appear as actors, infrastructure, dependencies, or bridge participants, but the reader and runtime must be able to answer whose condition the canvas chiefly governs.

Examples:

```text
Transitory: request, command, payload, petition, recovery task
Resident: cache, queue, log, account, clean-block pool, livelihood, lawful status
```

A resident canvas SHOULD name the invariant it maintains. A transitory canvas SHOULD name its resolution conditions.

## Article 40 — One truth per canvas

Each canvas SHALL have one mode, one goal or maintained property, one tracked entity, and one declared substrate boundary.

Every mechanism on the canvas SHALL touch the tracked entity’s perimeter directly or through a typed bridge whose effect on that entity is explicit.

Where two realities differ because their substrate assumptions differ, they SHALL be modeled on separate canvases. Comparison occurs by fixing shared baselines and outcomes and inspecting the divergent mechanisms between them.

The layout MUST NOT smuggle a preference into semantics. Spatial elegance is subordinate to causal truth.

## Article 41 — Source and destination canvases

A source canvas emits a typed entity, condition, evidence item, or commitment through a bridge.

A destination canvas accepts that output only when its declared input contract matches.

Source and destination are relational roles, not permanent classes.

The bridge SHALL state what crosses:

```text
entity
condition assertion
evidence
commitment
authority
ownership
substrate
```

A bridge that changes any of these SHALL declare the transformation rather than implying continuity by proximity.

## Article 42 — Depth and mechanical debt

A parent canvas may hide internal mechanics only by exposing a complete interface contract.

A child canvas pays the mechanical debt of a parent mechanism.

The parent MUST declare:

- accepted source conditions;
- promised destination conditions;
- visible effects and failures;
- evidence requirements;
- time or work classes where material;
- assumptions delegated to the child.

The child MUST establish how the promise is achieved.

A hidden implementation is permitted. Hidden friction is not.

## Article 43 — Branches and convergence shall be explicit

Every branch MUST name the decision or condition that controls its status.

Every merge MUST state whether it:

- joins alternatives;
- requires all inputs;
- accepts any input;
- admits a quorum;
- preserves unresolved alternatives; or
- represents a comparison rather than execution.

A transition that depends on several conditions SHALL wait until each required condition is satisfied under the active branch, unless the declared semantics explicitly permit partial firing.

## Article 44 — The canvas shall not become a page of prose

Nodes MAY contain concise labels, symbols, units, condition names, actor marks, evidence marks, and compact duration classes.

Long explanations, historical context, caveats, warnings, proofs, and measurements belong in linked prose and evidence surfaces.

The topology MUST remain inspectable as a set of causal claims.

This is not a ban on text. It is a division of labor.

## Article 45 — The word introduces the symbol

A reader SHOULD NOT be presented with a dense legend of unexplained marks before encountering the concepts.

The preferred sequence is:

1. encounter the thing in ordinary context;
2. learn its lexeme;
3. see its glyph beside the lexeme;
4. observe its behavior;
5. meet the glyph again in a topology;
6. use the glyph as a route back to explanation.

A symbol learned in this manner is not guessed. It is remembered.

A new symbol SHOULD NOT be introduced merely because an icon exists. It should be admitted because the concept recurs, the distinction matters, and the symbol relieves rather than increases cognitive burden.

## Article 46 — Every occurrence shall remain navigable

Every consequential occurrence SHOULD carry:

```text
concept-id
occurrence-id
claim-id where applicable
surface
local context
semantic version
```

A topology node or arrow SHOULD navigate to the smallest sufficient explanatory passage, not merely to a chapter top or global glossary.

Prose SHOULD provide reverse navigation to every important topology occurrence.

A concordant system MAY expose a concept trail:

```text
first introduced
first asserted as a condition
first transformed
first used as a bridge
first bound to code
first verified
first composed elsewhere
```

## Article 47 — Progressive disclosure preserves both novice and expert fluency

A novice MAY see words and symbols together.

An intermediate reader MAY collapse repeated labels.

An expert MAY operate primarily through symbolic topology while opening prose only for qualification, evidence, or unfamiliar concepts.

All views MUST refer to the same identities and transitions.

A novice MUST NOT be required to memorize an unexplained visual dictionary before understanding the subject. An expert MUST NOT be forced to reread introductory prose merely to locate a familiar mechanism.

## Article 48 — Accessibility is semantic redundancy

Interactive linking is valuable but not constitutionally sufficient.

A screen reader SHOULD be able to announce:

```text
Entity: record.
Current condition: buffered.
Mechanism: synchronize.
Evidence policy: external substrate confirmation.
Destination condition: durable.
```

Print renderings SHOULD provide occurrence references, marginal anchors, or indexes.

Audio renderings SHOULD announce role, concept, source condition, guard, mechanism, destination, and failure in an order that preserves the topology.

Offline artifacts SHOULD retain enough identity metadata for later reconciliation.

---

# Part V — Firing, evidence, the frontier, time, and continuity

## Article 49 — The unified firing rule

A mechanism `m` is enabled in configuration `c` exactly when all of the following hold:

1. the branch containing `m` is active;
2. every required source condition is assessed true;
3. every sustained source condition is currently valid;
4. the acting party can present evidence satisfying `m`’s evidence policy now;
5. the explicit guard permits firing in the current configuration;
6. every required capability is present;
7. a compatible binding exists when execution is requested.

Nothing else enables it.

A date does not enable it. Urgency does not enable it. The number of times a status has been checked does not enable it. A favorable story about the future does not enable it.

## Article 50 — Firing changes the admitted configuration

When an enabled mechanism fires successfully, the system SHALL:

- establish its produced conditions;
- admit and bind the evidence used;
- update epistemic grades as justified;
- record declared effects and outputs;
- append the firing record to history;
- update branch status when the mechanism is a decision;
- emit a semantic trace;
- either establish every promised postcondition or report a contract violation.

A mechanism that performs a world effect but lacks authoritative evidence of the resulting condition MUST NOT silently mark the condition true. It may instead record intent, command issuance, acknowledgement, or an unresolved observation state.

## Article 51 — Guards and evidence fail differently

A mechanism may be blocked because:

- a source condition is false;
- a source condition is honestly unknown;
- a sustained condition has lapsed;
- required evidence does not exist;
- the actor cannot present the evidence now;
- the branch is inactive or preserved;
- the guard is false;
- a capability is absent;
- no compatible binding exists;
- a resource is unavailable;
- an external process owns the next action.

“Blocked” is not one undifferentiated status. The cause SHALL be named.

## Article 52 — The frontier is what reality currently permits

The **frontier** is the exact boundary between what the modeled reality permits now and what it does not yet permit.

It contains:

- every enabled mechanism;
- every deposit state waiting for external firing;
- every sustained condition currently at risk;
- every unresolved inquiry whose answer could change enablement.

The frontier answers:

1. What can be acted on now?
2. What is waiting on someone else?
3. What must be maintained before it lapses?
4. What knowledge should be acquired because it changes the causal model?

A conventional task list displays intentions. The frontier displays current affordances, ownership, risk, and evidence.

## Article 53 — Reachability, liveness, boundedness, and deadlock

Once a plan and a machine share the same firing semantics, the following questions become available at every scale:

- **Reachability:** can the outcome still be reached from the current configuration?
- **Liveness:** can a required mechanism eventually become enabled, or can it starve indefinitely?
- **Boundedness:** can a deposit, queue, liability, or pending accumulation grow without limit?
- **Deadlock:** is there a reachable configuration in which no required progress mechanism can fire?
- **Safety:** can any firing violate a declared invariant?
- **Maintenance:** which sustained conditions require action before lapse?

These are not decorative metaphors imported from computing. They are questions asked of the same causal form.

## Article 54 — Time is output, never causal input

A date does not make a prerequisite true.

A schedule is a projection from causal structure, duration assumptions, branch status, and current configuration. It is not an input capable of overriding them.

Mechanisms MAY carry duration classes appropriate to their substrate:

```text
nanoseconds
microseconds
milliseconds
seconds
days
weeks
months
years
```

A duration class SHOULD denote an interval or distribution, not false precision. A scenario—optimistic, expected, or pessimistic—selects a representative value according to declared policy.

## Article 55 — Projection shall refuse false precision

For each active mechanism, projection SHALL:

1. find the latest finishing prerequisite;
2. begin only after that prerequisite is available;
3. add the selected duration for the mechanism;
4. propagate the result forward;
5. when several active mechanisms can produce a condition, use the earliest admissible producer under the branch policy;
6. identify the longest causal chain into the goal as the critical path.

With baselines at time zero:

```text
est(m) = max fin(s) over all required source conditions s of m
fin(m) = est(m) + duration(m)
fin(s) = min fin(m) over admissible active producers m of s
```

The goal projection is defined only when every mechanism on every active path into the goal has a defined duration class or an explicitly supported stochastic model.

If required duration information is missing, the system SHALL return the responsible mechanisms rather than inventing a completion date.

That is not a failure of scheduling. It is scheduling refusing to lie.

## Article 56 — Real temporal constraints are conditions

Filing windows, expiration dates, market hours, statutory deadlines, lease terms, certificate validity, token expiry, and maintenance intervals are real temporal constraints.

They SHALL be represented as conditions or guards with validity intervals.

A real window can enable or close a gate. A desired date changes only the projection scenario.

Changing a duration class MAY alter the projected date and critical path. It MUST NOT silently alter:

- the topology;
- required conditions;
- current enabledness;
- evidence validity;
- branch status;
- gate integrity.

A missed date means “recompute from the current configuration,” not “reality violated the plan.”

## Article 57 — History shall be append-only

The model borrows the write-ahead log’s discipline:

> Write the intent before or atomically with the model effect. Never erase history. Reconstruct the present by replay.

History `H` is an append-only sequence of records. Its length is the current model version.

Every model mutation—assessment, evidence admission, firing, branch selection, lapse, correction, topology revision, rejection, or supersession—SHALL append a record.

Nothing is silently deleted. Alternatives may be preserved, rejected, or superseded, but those changes are themselves records.

## Article 58 — The present is a fold

Let the initial configuration be `c₀`, the history be `H`, and `apply` be the deterministic function that applies one valid record.

Then:

```text
current configuration = fold(apply, c₀, H)
```

The present is reconstructible from the admitted history.

The log is the truth of what the system has admitted, not an omniscient transcript of the external world. External truth remains subject to evidence, authority, inquiry, and correction.

Memory is a cache of the log. Derived views such as frontier, projection, current branch, and sustained validity MUST be reproducible from the relevant semantic source and history.

## Article 59 — Interruption shall not eat the state of the work

An append-only continuity system SHOULD survive:

- process crash;
- lost device or restarted service;
- interruption of a project;
- a lost week or year;
- handoff to another person or team;
- reversal of belief;
- correction of the model;
- departure of the strategist who once held the rationale in memory.

The successor should inherit the causal record, including what was tried, rejected, corrected, and why—not a cleaned-up story that requires the past to be rediscovered.

## Article 60 — Lapse preserves history

When a sustained condition lapses, current validity changes and a record is appended.

Earlier attestation is not removed. Completed achievement conditions are not rewritten as though they never occurred.

The crack remains visible even after repair.

## Article 61 — Alternatives shall not collapse into one magic score

Branches SHOULD be compared component by component across dimensions such as:

- number of mechanisms;
- duration class or projected duration;
- unresolved epistemic conditions;
- number of external dependencies;
- evidence strength;
- amplification;
- irreversible decisions;
- authority and risk;
- operational cost.

One branch may be faster but more externally dependent. Another may be slower but epistemically stronger. A single score can hide the structure of the tradeoff.

The model SHOULD define a partial order where appropriate. Genuinely incomparable branches SHALL remain incomparable until a chooser supplies an explicit policy outside the neutral causal model.

When comparing routes, shared baselines and outcomes SHOULD remain spatially fixed while divergent mechanisms move around those anchors.

## Article 62 — Revision shall change reality, not flatter the estimate

A mechanism may become persistently overloaded. Its work may exceed the capacity implied by its duration or resource class. A route may be structurally impossible.

The sanctioned response is not to shorten the estimate until the projection looks acceptable.

The response is invention:

- introduce a new entity;
- introduce a new mechanism;
- split the work;
- create a new branch;
- change the substrate;
- redraw the canvas;
- append the new version.

> **Do not make a bad arrow faster. Design a new reality.**

Changing the estimate of an overloaded mechanism is tuning the description. Introducing a new causal structure is repairing the system.

---

# Part VI — The formal spine

## Article 63 — Two layers form one constitutional system

The consolidated paradigm has two formal layers.

The **causal layer** describes entities, conditions, mechanisms, evidence, branches, time, history, and firing.

The **semantic-concordance layer** gives those elements stable identities, multilingual renderings, exact occurrences, claims, reusable means, bindings, evidence provenance, and cross-surface navigation.

The causal layer answers:

> What may happen, why, and what becomes true?

The semantic-concordance layer answers:

> What is this thing across languages and artifacts, where has it appeared, how is it implemented, what evidence supports it, and where can the same means be reused?

Neither layer is sufficient alone.

## Article 64 — Concepts and renderings

Let `CID` be the set of stable concept identities.

A concept is:

```text
q = ⟨id, version, taxonomy, renderings, provenance⟩
```

where:

- `id ∈ CID`;
- `version` identifies semantic compatibility;
- `taxonomy` relates the concept to other concepts;
- `renderings` contains lexemes, glyphs, spoken forms, tactile forms, and accessible alternatives;
- `provenance` records authorship, governance, and change history.

A rendering function:

```text
R(q, locale, medium, audience) → representation
```

may produce English prose, Armenian prose, an SVG glyph, an audio phrase, a tactile pattern, or another projection. Changing `R` does not change `q`.

## Article 65 — Canvas signature

A causal canvas is represented as:

```text
C = ⟨E, S, M, B, σ, b, pre, post, actor, φ, π, ℓ,
     ⟨p, w⟩, Λ, mode, g, τ⟩
```

where:

- `E` is the finite set of entities;
- `S` is the finite set of state types or condition propositions;
- `M` is the finite set of mechanisms;
- `B` is the finite set of branches;
- `σ : S → E` assigns every state to exactly one entity;
- `b : M → B` assigns each mechanism to a branch;
- `pre(m)` gives the required source conditions of mechanism `m`;
- `post(m)` gives the produced conditions of mechanism `m`;
- `actor(m)` names the acting entity or party;
- `φ(m)` is the explicit guard;
- `π(m)` is the evidence policy;
- `ℓ(m)` is a partial duration-class map;
- `p(m)` and `w(m)` record payload and work;
- `Λ` is the set of interface-lie pairs;
- `mode ∈ {linear, cybernetic}`;
- `g` is the outcome or maintained property;
- `τ` is the tracked entity.

The canvas signature is the formal causal spine. Semantic identities, occurrences, claims, means, bindings, and evidence provenance are attached through the concordance layer rather than forced into the tuple itself.

## Article 66 — Configuration

A configuration is:

```text
c = ⟨α, κ, v, β, W, cap, obs⟩
```

where:

- `α : S → {1, 0, ?}` is assessed valuation;
- `κ : S → K` is epistemic grade, with `K = {unknown, possible, probable, known}`;
- `v` gives current validity of sustained conditions;
- `β : B → {active, preserved, rejected}` gives branch status;
- `W` is the admitted evidence set;
- `cap` is the set of available capabilities and authorities;
- `obs` is the current set of relevant observations.

The additions `cap` and `obs` make executable authority and observation explicit while preserving the teaching model’s original dimensions.

## Article 67 — History and version

History is:

```text
H = [r₀, r₁, …, rₙ]
```

and the current version is:

```text
version(H) = |H|
```

A model mutation carries an expected version and commits only when the expected version equals the current history length.

Rejection, preservation, supersession, correction, and lapse are appends, never deletions.

For local model state, the record and its model effect SHOULD commit atomically. For external world effects that cannot be made atomic with the local history, the system SHALL distinguish command intent, command issuance, acknowledgement, observation, authoritative evidence, and admitted result rather than pretending that one local append controls the remote world.

## Article 68 — Enabledness

A mechanism `m` is enabled in configuration `c` when:

```text
enabled(m, c) ⇔
    β(b(m)) = active
    ∧ ∀s ∈ pre(m), α(s) = 1
    ∧ ∀s ∈ sustained(pre(m)), v(s) = valid
    ∧ presentable(actor(m), evidenceSatisfying(π(m), W), c)
    ∧ φ(m, c) = true
    ∧ requiredCapabilities(m) ⊆ cap
```

When execution is requested, enabledness additionally requires a compatible binding for the declared substrate.

A proposed dependency does not enter `pre(m)` until admitted. An unknown guard is not true. The model SHALL declare whether unknown causes waiting, inquiry, alternative branching, or failure.

## Article 69 — Firing

Successful firing is a transition:

```text
fire(m, c, e) → ⟨c′, r, trace⟩
```

where:

- `e` is the evidence presented;
- `e` satisfies `π(m)`;
- produced conditions in `post(m)` are updated in `α`;
- `κ` is raised only as justified;
- sustained validity `v` is updated where applicable;
- branch status `β` is updated when `m` is a decision;
- effects are recorded;
- a history record `r` is appended;
- a semantic trace is emitted;
- the promised postconditions hold in `c′`, or a named failure or contract violation is returned.

## Article 70 — Inquiry and deposit

An inquiry mechanism `i` satisfies:

```text
worldDelta(i) = 0
knowledgeDelta(i) ≥ 0
```

Its primary effect is epistemic.

A condition `s` is a deposit for tracked entity `τ` when every mechanism consuming `s` is owned by an actor other than the owner of `τ`, or when every locally owned consumer is disabled and the next admissible mechanism is external.

The exact deposit definition MAY be refined by domain policy, but waiting ownership MUST remain explicit.

## Article 71 — Derived frontier

The frontier is:

```text
F(c) = {m ∈ M | enabled(m, c)}
       ∪ depositStates(c)
       ∪ sustainedStatesAtRisk(c)
       ∪ consequentialInquiries(c)
```

The first term is executable opportunity. The second is honest external waiting. The third is maintenance urgency. The fourth is epistemic leverage.

## Article 72 — Derived projection

Choose a scenario value within each declared duration class. Walk the active acyclic causal graph in topological order.

```text
est(m) = max fin(s) for s ∈ pre(m)
fin(m) = est(m) + durationScenario(ℓ(m))
fin(s) = min fin(m) over admissible active producers m of s
```

Projection of goal `g` exists only when all mechanisms on all required active paths into `g` possess sufficient duration information.

Otherwise:

```text
project(g, c) → MissingDurationSet
```

rather than a fabricated date.

## Article 73 — Derived fold

The present configuration is:

```text
c = fold(apply, c₀, H)
```

Every derived view SHALL be reproducible from the canonical canvas, initial configuration, history, and admitted evidence, subject to declared external observations.

## Article 74 — Means contract

A means is a reusable semantic contract:

```text
μ = ⟨id, version, accepts, guard, actor, policy, capabilities,
     substrate, promise, effects, yields, failures, properties,
     bindings, evidence, provenance⟩
```

where:

- `accepts` declares entities and source conditions;
- `guard` declares situational permission;
- `actor` declares ownership;
- `policy` declares evidence admissibility;
- `capabilities` declares authority and resources;
- `substrate` declares physical, institutional, or computational assumptions;
- `promise` is one semantic obligation;
- `effects` declares interactions;
- `yields` declares destination conditions and outputs;
- `failures` names alternatives to successful postconditions;
- `properties` declares atomicity, idempotence, compensation, concurrency, time, and resource classes;
- `bindings` identifies implementations;
- `evidence` warrants maturity;
- `provenance` preserves authorship and correction.

## Article 75 — Transition contract

A transition is:

```text
θ = ⟨subject, source, branch, guard, evidence-policy, means,
     destination, failures, effects, claim-id, occurrence-id⟩
```

Execution is admissible only when:

```text
current configuration satisfies source
∧ branch is active
∧ guard is true
∧ evidence can satisfy the policy
∧ required capabilities are present
∧ a compatible binding exists
```

Successful completion MUST establish the destination postcondition or expose a contract violation.

## Article 76 — Composition

Two means `μ₁` and `μ₂` may compose when:

1. the outputs of `μ₁` satisfy the inputs of `μ₂`;
2. the destination conditions of `μ₁` entail the source conditions of `μ₂`;
3. evidence strength is sufficient for the next admission boundary;
4. the effects of `μ₁` do not violate invariants required by `μ₂`;
5. authority, actor, and ownership are compatible;
6. substrate assumptions are compatible or a bridge declares the conversion;
7. failure outcomes are handled or propagated;
8. the composition does not smuggle a proposed dependency into admitted causality.

Conceptually:

```text
μ₂ ∘ μ₁
```

The result is itself a candidate means but MUST retain provenance to its components.

## Article 77 — The universal guarded command

The constitutional form of an “if statement” is not a language keyword. It is an evidence-governed transition:

```text
WHEN source conditions hold
AND the active branch admits the path
AND the actor can present required evidence
AND the guard holds
AND the capabilities exist
DO the mechanism
YIELD destination conditions
OTHERWISE a named unresolved state or failure
```

Its compact rendering is:

```text
⟨Entity, Source⟩ ── [Branch ∧ Guard ∧ Evidence] / Mechanism ──▶ ⟨Entity, Destination⟩
```

The guard grants situational permission. The evidence policy grants admissibility. The actor supplies agency. The mechanism acts. The destination declares what must become true.

## Article 78 — Structural axioms

### Axiom 1 — Perimeter

Every state belongs to exactly one entity. States do not contain states.

**Purpose:** prevent ambiguous ownership of truth.

### Axiom 2 — Mediation

Every mechanism has at least one source and one target condition. Entities never touch directly; causality is condition → mechanism → condition.

**Purpose:** force causal claims to expose prerequisites and transformation.

### Axiom 3 — Explicit constraint

Every mechanism has an actor, guard, and evidence policy. Every branch or merge consumes a named constraint.

**Purpose:** make ambiguity a modeling error rather than a runtime surprise.

### Axiom 4 — One truth per canvas

Each canvas has one mode, one goal or maintained property, one tracked entity, and one substrate boundary.

**Purpose:** prevent one picture from conflating different physical or institutional truths.

### Axiom 5 — Baseline support

Every state without an internal producer is declared baseline, externally determined, proposed, or unsupported.

**Purpose:** expose assumptions.

## Article 79 — Temporal and historical axioms

### Axiom 6 — Monotone achievement; append-only lapse

Achievement states, once admitted, remain historically established. Sustained states may lose current validity, but their attestation history only grows.

**Purpose:** distinguish arrival from maintenance without falsifying the past.

### Axiom 7 — Acyclic active causality

The union of active and preserved causal dependency flow SHALL be acyclic within one model version over non-rejected branches.

Cybernetic maintenance is represented through repeated time-indexed validity, recurrence operators, and append-only attestations rather than by allowing an achievement condition to prove itself through a same-version causal cycle.

**Purpose:** preserve strict causal order and make projection and replay tractable.

### Axiom 8 — Time is derived

Duration assumptions may alter projections but not topology, enabledness, evidence validity, or gate integrity.

**Purpose:** prevent calendars from masquerading as causes.

### Axiom 9 — Append-only linearized history

Every model mutation appends one record against an expected version. Rejection and supersession are appends, never deletions.

**Purpose:** preserve continuity and prevent concurrent changes from silently producing incompatible realities.

### Axiom 10 — Refusal of false precision

A projection exists only when required active duration information exists. Otherwise the system returns the responsible unknowns.

**Purpose:** make uncertainty a first-class result.

## Article 80 — Evidence, cost, and comparison axioms

### Axiom 11 — Evidence-gated admission

A produced condition may be admitted only through a firing whose evidence satisfies the mechanism’s policy.

**Purpose:** answer why the model is permitted to treat a condition as true.

### Axiom 12 — Interface-lie integrity

For each declared/authoritative lie pair, any mechanism establishing the authoritative state requires evidence controlled by the relevant authority or substrate.

**Purpose:** ensure that reassurance cannot collapse a semantic gap.

### Axiom 13 — Amplification declaration

When work divided by payload exceeds the chosen threshold, the ratio or class becomes part of the public mechanism signature.

**Purpose:** prevent the substrate’s central cost from disappearing behind an interface.

### Axiom 14 — No collapse

Branch comparison is componentwise across declared dimensions. The core theory defines no universal linear score.

**Purpose:** preserve real tradeoffs rather than hiding them inside an arbitrary weighting formula.

### Axiom 15 — Proposed dependencies are inert

A hypothesized dependency does not contribute to enabledness until admitted.

**Purpose:** prevent suspicion from governing operation as fact.

## Article 81 — Semantic and executable axioms

### Axiom 16 — Identity precedes rendering

Words, symbols, shapes, source names, and spoken forms render concepts; they do not own them.

**Purpose:** permit translation and alternate media without semantic fracture.

### Axiom 17 — Role separation

Concept reference, condition, mechanism, transition, evidence, and ornament are disjoint semantic roles.

**Purpose:** make execution by visual accident impossible.

### Axiom 18 — Concordance

Every consequential occurrence can be traced to its concept, claim, explanation, topology, means, binding, evidence, version, and runtime history as applicable.

**Purpose:** prevent documentation, diagrams, and execution from drifting into different stories.

### Axiom 19 — Binding independence

A means may possess several bindings, and a binding may expose several means, without transferring semantic ownership to one implementation.

**Purpose:** preserve mechanism reuse across languages and platforms.

### Axiom 20 — Illegal transitions are rejected

A transition absent from the admitted topology is unrepresentable or rejected before the protected effect occurs.

**Purpose:** make the diagram govern rather than merely testify.

## Article 82 — The theorem obligations

The following are obligations of the consolidated model. This draft states them as theorems to be proved, model-checked, or otherwise justified by a conformant implementation; it does not claim that this Markdown document itself constitutes a machine-checked proof.

### Theorem 1 — Gate integrity

A gate marked true has a recorded producing mechanism and evidence satisfying its policy.

### Theorem 2 — Authoritative closure

For an interface-lie pair, the declared/authoritative gap closes only through evidence admitted under the authoritative policy.

### Theorem 3 — Inactive exclusion

An inactive or preserved branch does not contribute enabled mechanisms or alter the active projection.

### Theorem 4 — Time independence

Duration and scenario changes can alter projections but not causality, enabledness, or gate validity.

### Theorem 5 — Refusal of false precision

A projection returns a value exactly when the required active durations are defined under the selected projection policy; otherwise it returns the responsible unknowns.

### Theorem 6 — Continuity

The canonical semantic source, initial configuration, admitted external observations, and append-only history are sufficient to reconstruct the model’s present configuration, frontier, and derived views after interruption or handoff.

### Theorem 7 — Lapse preserves history

A sustained condition can become invalid without erasing prior attestation or completed achievements.

### Theorem 8 — Linearized safety

Only one model mutation advances a given version. Concurrent topology changes cannot jointly enter as one silently inconsistent history step.

### Theorem 9 — Branching is declarative

Conditionality resides in branch status, prerequisites, guards, evidence policies, and named failures. Replay contains no hidden ad hoc branch outside the admitted record semantics.

### Theorem 10 — One rule, multiple scales

The same enabledness predicate may govern substrate physics, system and protocol mechanics, projects, institutions, and personal strategy while domain concepts, actors, evidence, work, and duration classes change.

### Theorem 11 — Translation invariance

Changing human-language renderings without changing semantic identities does not alter transition legality, bindings, history, or traces.

### Theorem 12 — Visual-role safety

Changing the renderer or glyph set cannot grant executable authority to an inert semantic role.

### Theorem 13 — Behavioral retrievability

A means indexed by its semantic contract can be found without knowledge of its implementation’s local name, subject to registry completeness and query adequacy.

### Theorem 14 — Provenance-preserving composition

A composed means retains the identities, versions, assumptions, failures, evidence, and bindings of its components or explicitly records every justified abstraction over them.

---

# Part VII — Executable topology, concordance, and system architecture

## Article 83 — The graph is an intermediate representation

The authoritative executable artifact SHALL be a typed semantic graph or another representation with equivalent expressive power.

The following are projections of that source:

- natural-language documentation;
- interactive SVG;
- print diagrams;
- audio and tactile renderings;
- source-language APIs;
- runtime state machines;
- validation plans;
- evidence plans;
- traces;
- semantic search indexes;
- project frontiers and time projections.

A PNG, screenshot, prose document, or source file MAY preserve evidence or presentation, but MUST NOT be the sole source of executable semantics.

The graph does not replace authored prose. It provides the identities and causal contracts to which authored prose binds.

## Article 84 — Static and dynamic enforcement divide responsibility

A compiler or validator SHOULD enforce facts available before execution:

- role separation;
- concept and state compatibility;
- state ownership;
- baseline declaration;
- complete transition contracts;
- branch and bridge compatibility;
- evidence-policy presence;
- capability declarations;
- acyclicity of admitted same-version causal flow;
- unreachable outcomes and orphan states;
- prohibited or unhandled terminal states;
- missing bindings;
- missing evidence required by policy;
- illegal attempts to place ornament or concept glyphs in mechanism positions;
- semantic-version incompatibility.

A runtime MUST enforce facts available only in the current configuration:

- current valuation and sustained validity;
- branch status;
- actual capabilities and authority;
- evidence availability and presentability;
- external observations;
- resource availability;
- concurrency version;
- timeout and failure behavior;
- postcondition satisfaction;
- trace and history emission.

## Article 85 — Capabilities and effects are constitutional facts

A mechanism MUST NOT execute merely because it appears on a canvas.

It requires an admitted means, a compatible binding, the current source conditions, the required actor and capabilities, a satisfied evidence policy, and explicit invocation under policy.

Examples of capabilities include:

```text
storage.read
storage.append
storage.synchronize
storage.truncate
network.send
account.debit
medication.administer
petition.adjudicate
deployment.promote
```

Capabilities SHOULD be least-privileged and independently revocable.

Effects MUST be inspectable before execution. Hidden filesystem, network, account, medical, institutional, or administrative effects violate conformance.

## Article 86 — Concurrency shall be modeled rather than wished away

Where multiple actors may transform the same resident entity, the means contract MUST declare a concurrency strategy, such as:

- serialization;
- expected-version compare-and-swap;
- lock;
- transaction;
- optimistic retry;
- commutative operation;
- conflict state;
- quorum or consensus assumption;
- domain-specific adjudication rule.

The visual grammar need not display every low-level detail at the parent level, but the contract MUST NOT imply a deterministic passage where races can invalidate it.

Concurrent world effects and concurrent model admissions are distinct. A system MAY serialize its history while the external world remains concurrent and only partially observable.

## Article 87 — Atomicity, idempotence, compensation, and irreversibility shall be declared

Every executable means MUST declare whether it is:

- atomic at the chosen boundary;
- partially observable;
- resumable;
- idempotent;
- compensatable;
- irreversible.

A long-running mechanism SHOULD expose intermediate conditions when they matter to safety, user expectation, recovery, or reuse.

Compensation MUST NOT be described as reversal when the original effect remains historically real. A refund does not erase a debit. A correction does not erase the mistake. A rollback of model state does not necessarily undo an external side effect.

## Article 88 — External effects require an honesty boundary

A local runtime cannot make every external action atomic with its local append-only history.

When a mechanism crosses an external boundary, the model SHOULD distinguish:

```text
intent recorded
command issued
command acknowledged
external condition observed
authoritative evidence admitted
result committed in the model
```

A local history record may truthfully establish that a command was issued. It MUST NOT establish that the remote world reached the desired condition unless the required evidence supports that claim.

This is the executable counterpart of the interface-lie rule.

## Article 89 — Bindings do not own means

One means MAY have many bindings:

```text
storage.synchronize
    ↳ Node.js fsync binding
    ↳ Rust file synchronization binding
    ↳ database WAL-flush binding
    ↳ device-specific binding
```

Bindings may differ in platform, latency, failure behavior, and physical assumptions while conforming to one semantic promise under declared constraints.

A binding that offers a weaker guarantee MUST bind to a different means or destination condition.

Conversely, one implementation function MAY contain several candidate means. The semantic decomposition SHOULD expose those means without pretending that the current source boundary already enforces them independently.

## Article 90 — Runtime traces are semantic occurrences

Every executable transition SHOULD emit a semantic trace containing:

```text
history version
transition identity
mechanism and means identity
binding identity and version
source occurrence
destination occurrence
branch status
guard result
evidence references
actor and capabilities
effects
timing and work
outcome or named failure
postcondition result
```

A trace is not merely a log line. It is a runtime occurrence of the same claim taught in prose and rendered in topology.

The trace MUST distinguish declaration from evidence, attempt from completion, and completion from durable or authoritative commitment.

## Article 91 — The Concordance is bidirectional

A conformant work SHOULD support:

```text
prose occurrence ↔ concept and claim
topology node or edge ↔ exact prose context
claim ↔ means contract
means ↔ implementation binding
claim and binding ↔ evidence
runtime trace ↔ transition occurrence
history record ↔ reconstructed configuration
```

Navigation SHOULD preserve spatial and reading context. On a wide screen, the canvas may remain visible while the exact passage opens beside it. On a small screen, the passage may open in a sheet while preserving a return path to the originating node or edge.

A generic glossary is useful but insufficient. Exact occurrence navigation is required where the local role differs across appearances.

## Article 92 — The architecture has distinct registries

A complete implementation SHOULD contain:

1. **Concept Registry** — identities, versions, taxonomies, lexemes, glyphs, spoken forms, accessible renderings.
2. **Occurrence Registry** — exact appearances across prose, topology, code, evidence, and history.
3. **Claim Registry** — propositions carried by edges, mechanisms, explanations, and proofs.
4. **Canvas Registry** — entities, conditions, mechanisms, branches, bridges, goals, modes, and substrates.
5. **Means Registry** — reusable semantic contracts and composition rules.
6. **Binding Registry** — executable implementations, adapters, platform versions, and substrate assumptions.
7. **Evidence Registry** — artifacts, attestations, tests, proofs, measurements, traces, and limitations.
8. **History Store** — append-only model mutations with expected versions.
9. **Validator / Compiler** — role, type, policy, completeness, capability, acyclicity, and composition checks.
10. **Renderer** — prose anchors, SVG, print, audio, tactile, and editor projections.
11. **Runtime** — guarded execution, evidence admission, postcondition checks, traces, and append-only updates.
12. **Semantic Search / Composer** — discovery by transformation rather than name.
13. **Frontier and Projection Engine** — enabledness, deposits, risks, inquiries, reachability, and honest time derivation.

## Article 93 — One semantic source supports many projections

The system SHOULD generate or validate every projection against a canonical semantic source.

```text
                           ┌─ localized prose anchors
                           ├─ interactive topology
                           ├─ print / audio / tactile views
semantic source ───────────┼─ generated APIs
                           ├─ runtime enforcement
                           ├─ evidence plans
                           ├─ traces and history
                           ├─ frontier and projection views
                           └─ reuse index
```

Manual prose remains authored. It binds to identities rather than being generated wholesale.

A renderer MAY omit visual detail for clarity. It MUST NOT omit semantic distinctions required for correctness.

## Article 94 — Suggested repository layout

```text
symbolic-means/
  concepts/
    core.yaml
    domain.yaml
  canvases/
    domain-linear.yaml
    domain-maintenance.yaml
  means/
    domain.yaml
  transitions/
    domain.yaml
  bindings/
    node.yaml
    rust.yaml
  prose/
    teaching.mdx
  evidence/
    artifacts.yaml
    tests.yaml
    benchmarks.yaml
  history/
    events.jsonl
  schemas/
  validators/
  renderers/
  runtime/
  search/
```

The layout is advisory. Semantic equivalence matters more than file organization.

## Article 95 — Versioning follows semantic compatibility

Concept and means versions MUST follow semantic compatibility, not publication date alone.

A change in wording, typography, or glyph does not require a semantic version change.

A change in source conditions, evidence policy, guard, effect, destination guarantee, failure set, authority, actor, or substrate assumption MAY be breaking and SHOULD create a new version.

Existing histories and compositions MUST remain inspectable against the versions under which they were validated.

A topology correction SHALL be appended to history rather than rewriting prior executions as though they occurred under the new model.

## Article 96 — Evidence maturity shall be visible

A means MAY progress through maturity levels:

| Level | Meaning |
|---|---|
| **Sketched** | Concept and intended transition exist without a complete contract. |
| **Specified** | Conditions, actor, guard, evidence policy, effects, failures, and promise are declared. |
| **Bound** | At least one implementation binding exists. |
| **Tested** | Repeatable evidence exercises the binding. |
| **Verified** | Stronger proof, model checking, or independent review supports the claim. |
| **Operational** | Runtime traces and observed behavior support use on a declared substrate. |
| **Certified** | A governing authority has admitted the means for a defined high-stakes context. |

Visual renderers MUST NOT imply a higher maturity than the registry records.

An evidence item SHALL identify the claim or binding it supports. A verified-looking badge without traceable evidence is ornament.

## Article 97 — No execution by visual accident

Untrusted documents, images, pasted symbols, screenshots, and ordinary messages MUST be inert by default.

Execution requires:

- parsed semantic identity;
- validated role;
- compatible and enabled transition;
- admitted means;
- authorized binding;
- required capability and actor;
- satisfied evidence and guard policy;
- explicit invocation under security policy.

A screenshot of a diamond is not a command.

A glyph copied from a textbook is not a capability.

An arrow drawn by an unauthorized user is not an admitted transition.

## Article 98 — Accessibility, privacy, and minimization are constitutional

Semantic traces and concordant occurrences can reveal more than ordinary logs because they carry stable identities and causal relations.

Conformant systems MUST support appropriate:

- redaction;
- minimization;
- access control;
- evidence confidentiality;
- retention limits;
- pseudonymous or scoped instance identities;
- separation of public concept identity from private entity data.

Evidence requirements MUST NOT become an excuse for indiscriminate surveillance.

Accessibility and privacy are not afterthoughts. They are constraints on every rendering, registry, and runtime.

## Article 99 — Governance follows domain authority

No glyph set is universally self-explanatory. Communities MUST be permitted to propose, teach, review, and revise renderings.

Core registries SHOULD be open, inspectable, versioned, and governed through public rationale where safety and privacy permit.

Cross-disciplinary grammar does not grant outsiders authority over domain truth.

Medical mechanisms require medical governance. Legal commitments require jurisdictional governance. Financial settlement conditions require the relevant operational definition. Safety-critical transitions require evidence and review appropriate to their consequences.

The shared language makes collaboration possible. It does not erase responsibility.

---

# Part VIII — Reusable means and programming as composition

## Article 100 — The means is the primary unit of reuse

A source file is an artifact. A function is an implementation boundary. A class is an organizational boundary. A package is a distribution boundary. An endpoint is a network boundary.

A **means** is the reusable semantic unit:

```text
Means =
    identity
  + accepted entities
  + source conditions
  + branch and guard
  + actor and evidence policy
  + required capabilities
  + substrate assumptions
  + one mechanism promise
  + destination conditions
  + effects and failures
  + temporal and work properties
  + bindings
  + evidence
  + provenance
```

The same means may be expressed through many functions or distributed across several components.

## Article 101 — Fine and finite are complementary

A means is **finite** because its contract is bounded.

A means is **fine** because its responsibility is coherent and composable.

Excessively broad means conceal useful transitions. Excessively microscopic means drown composition in implementation detail.

The proper boundary is the smallest mechanism that makes one independently useful semantic promise at the chosen level while exposing the effects and failures needed by its consumers.

## Article 102 — Discovery shall be behavioral

A registry SHOULD support queries by:

- input concept;
- source condition;
- destination condition;
- actor and authority;
- evidence policy;
- required or forbidden effects;
- substrate;
- duration and work class;
- amplification;
- failure behavior;
- atomicity and idempotence;
- maturity and evidence level;
- composability;
- language or platform binding.

Examples:

```text
Payload → LengthFramedRecord
Log + Offset → Record + NextOffset
Log@TornTail → Log@Consistent
Record@Buffered → Record@Durable
Petition@Filed → Petition@Adjudicated under external evidence
Knowledge@Unknown → Knowledge@Known without world mutation
```

A query MUST NOT require the user to guess the implementation’s function name.

## Article 103 — The deepest reuse is not textual

The deepest reuse is preserving a lawful transformation.

Two implementations may share no source text and still realize the same means.

Two functions may share nearly identical text and realize different means because their source conditions, effects, evidence, or destination guarantees differ.

The registry SHALL index the mechanism, transition, and taxonomy—not merely the character sequence used to implement them.

Character encoding is necessary for storage. It is not the object of reuse.

## Article 104 — Composition shall precede generation

A conformant programming assistant SHOULD proceed in this order:

```text
desired condition
    ← search for a direct means
    ← search for a lawful composition
    ← search for compatible bindings
    ← search for an explicit adaptation
    ← identify the exact missing transition
    ← invent only the missing means
    ← generate implementation text only where necessary
```

This hierarchy does not forbid generation. It disciplines it.

The system MUST expose whether a result was retrieved, composed, adapted, synthesized, or newly invented.

Unmarked generation that impersonates established reuse violates provenance.

## Article 105 — A goal becomes a graph query

Instead of asking only:

> Which package has a function named `save`?

one may ask:

```text
Find a path from:
    MutationIntent@Created
into:
    State@CurrentAndRecoverable
under:
    crash-safe local persistence
```

The registry may discover:

```text
Frame → Append → Synchronize → Apply
```

When the entire path exists, the system composes known means.

When only part exists, it reuses the known prefix and suffix and identifies the missing transition.

When no lawful path exists, the absence becomes an exact invention boundary.

## Article 106 — Provenance and trust travel with composition

Every reusable means SHOULD reveal:

- who defined the contract;
- which domain authority admitted it;
- who supplied each binding;
- what evidence supports it;
- which assumptions limit it;
- which versions depend upon it;
- which incidents or corrections altered it;
- whether its source was retrieved, adapted, or generated.

A composed program MUST retain the identities, versions, constraints, evidence, and failures of its parts or explicitly justify every abstraction that hides them.

Trust SHALL attach to contracts, evidence, and governance—not to visual polish or verbal confidence.

## Article 107 — Automatic composition has limits

Semantic composition does not abolish:

- false models;
- undecidability;
- emergent behavior;
- distribution and partial failure;
- economic and environmental cost;
- legal prohibition;
- moral responsibility;
- domain expertise;
- invention.

A type-compatible path may be economically foolish, unsafe under load, illegal, socially harmful, or contrary to the user’s purpose.

Conformant systems MUST permit constraints beyond type matching and MUST keep human responsibility visible.

## Article 108 — Programming changes when means are stable

The practitioner no longer begins by producing another body of text whose names must compete with every name already written.

The practitioner begins with:

1. the entity and desired condition;
2. the current configuration and frontier;
3. the known means and evidence;
4. the lawful compositions;
5. the exact missing transition;
6. the decision whether adaptation, redesign, or invention is warranted.

Programming then becomes the infinite use of finite, finely bounded means.

This does not eliminate code. It changes code from the primary language of discovery into one family of executable bindings for semantically identified mechanisms.

## Article 109 — Shared grammar brings disciplines closer without dissolving them

Symbolic Means does not impose one universal ontology on every field.

Each discipline governs its own consequential entities, conditions, mechanisms, evidence, units, and authority.

The disciplines share a grammar of:

```text
entity
condition
valuation
knowledge
actor
guard
evidence policy
mechanism
transition
source
destination
failure
invariant
history
frontier
```

This common grammar permits interoperability without erasing expertise.

## Article 110 — Learning English is not engineering education

English may remain useful, influential, and historically embedded. It MUST NOT remain the hidden admission test for handling mechanisms independent of English.

A practitioner who masters the entities, conditions, mechanisms, constraints, evidence, and effects of a field possesses engineering knowledge even when the practitioner uses another natural language.

A practitioner who speaks flawless English but confuses buffered with durable, intention with commitment, receipt with adjudication, or observation with mutation does not possess the corresponding engineering literacy.

## Article 111 — Cross-disciplinary bridges require more, not less, precision

Cross-disciplinary reuse most often occurs at boundaries:

```text
measurement → decision
order → authorization
commitment → accounting entry
specification → manufacture
proof obligation → verification result
software event → physical act
petition decision → travel permission
arrival → maintained life conditions
```

Bridges between disciplines MUST declare changes in authority, evidence, units, ownership, privacy, and risk.

A shared arrow grammar does not make every transition safe. It makes the required questions visible.

---

# Part IX — Editorial practice, modeling method, and teaching for ownership

## Article 112 — Prose shall remain prose

Natural language SHALL retain freedom for explanation, persuasion, narrative, history, warning, qualification, analogy, judgment, humor, uncertainty, and emotional consequence.

Symbolic Means MUST NOT require every sentence to become a command, every noun to become an identifier, or every human message to become a state machine.

Ambiguity MAY remain where it is expressive and harmless. It MUST NOT remain hidden where legality, safety, obligation, physical state, evidence, or admissible action depends upon the distinction.

The semantic overlay should leave readable prose when removed. A text that collapses into an incomprehensible rebus has failed to preserve the proper office of language.

## Article 113 — The introduction rule

A new symbol SHOULD appear beside its lexeme and a concrete explanation at first introduction.

The introduction SHOULD answer:

- what the concept is;
- why it matters here;
- what nearest dangerous confusion it must not be mistaken for;
- which entity owns the relevant condition;
- where the reader will meet it again.

A chapter SHOULD introduce no more symbols in a passage than the reader can reasonably learn from its causal context.

## Article 114 — The recurrence rule

After introduction, a symbol SHOULD recur consistently.

A concept SHOULD NOT change glyph casually. A glyph SHOULD NOT be reused for an unrelated concept merely because it is convenient.

Where two concepts are dangerously close, the visual system SHOULD make the distinction perceptible.

Repeated occurrences MAY suppress their visible lexeme for an experienced reader, but the semantic identity and accessible label MUST remain available.

## Article 115 — The editorial rule

Prose MAY use metaphor, analogy, humor, varied diction, and deliberate indirection.

Normative statements SHOULD bind consequential nouns, conditions, mechanisms, and claims to semantic identities.

An editor MAY write elegant synonyms while the Concordance preserves identity. When two words conceal a real distinction, the editor MUST NOT collapse it for cadence.

A synonym in prose is not automatically semantic equivalence. An antonym in prose is not automatically a formally opposing state. Editorial beauty remains answerable to causal truth.

## Article 116 — The diagram rule

A diagram SHOULD show only what must remain simultaneously inspectable:

- entities;
- relevant conditions;
- mechanisms;
- legal transitions;
- branches and convergence;
- tracked entity and goal;
- mode and substrate;
- bridges;
- invariants;
- essential evidence, timing, ownership, or amplification marks.

Background explanation belongs in linked prose. Detailed evidence belongs in an evidence surface. Implementation detail belongs in child canvases or bindings.

The diagram MUST not be forced to introduce every noun it uses. The textbook should have taught the symbols before the canvas asks them to act.

## Article 117 — The expert and novice rules

Experts SHOULD be able to traverse a work by concept, condition, mechanism, and claim rather than by page sequence alone.

A familiar symbol MUST not force the expert through repeated introductory prose. An unfamiliar or disputed occurrence MUST remain one action away from its exact context.

Novices MUST not be required to memorize an unexplained visual dictionary before understanding the subject.

The system SHOULD permit labels, guided traces, stepwise animation, examples, reversible navigation, and progressive removal of redundant words.

Symbolic compression is earned after understanding. It is not imposed before it.

## Article 118 — The correction rule

When an explanation, mechanism, taxonomy, evidence policy, or binding is corrected, every linked occurrence SHOULD be discoverable.

A semantic change SHOULD produce a reviewable impact set across:

- prose;
- diagrams;
- conditions and transitions;
- bindings;
- tests and proofs;
- translations;
- histories;
- downstream compositions.

Correction SHALL be appended rather than silently overwriting the fact that the earlier model was once believed or used.

## Article 119 — Teaching follows comprehension, not formal intimidation

The recommended teaching order is:

1. see the One Rule in ordinary reality;
2. learn conditions and mechanisms through concrete examples;
3. distinguish evidence, knowledge, waiting, and interface lies;
4. derive the frontier and time;
5. understand append-only continuity;
6. build and operate canvases;
7. only then read the formal signature, axioms, and theorem obligations;
8. finally bind and compose executable means.

The formalism is not the first lesson. It is the consequence of refusing to let the lesson become vague.

## Article 120 — The twelve-pass modeling procedure

A canvas SHOULD be built in passes rather than by attempting to represent every distinction at once.

### Pass 1 — Write the outcome as a condition

Do not begin with a date or aspiration. Write what must be true.

```text
Weak:   Move next year.
Strong: The move is legally, financially, and practically enabled.
```

### Pass 2 — Choose the tracked entity

Name the thing whose transformation or maintenance the canvas follows.

Examples: data, record, petition, livelihood, payment, specimen, account, person, resident system.

### Pass 3 — Choose one mode

Use linear mode for arrival. Use cybernetic mode for continued validity.

Do not force “reach the condition” and “keep the condition true” into one indistinguishable flow.

### Pass 4 — Declare baselines

List every condition accepted without an internal producer. Mark whether it is given, externally determined, proposed, or unsupported.

### Pass 5 — Name intermediate conditions

Ask repeatedly:

> What must be true immediately before the outcome can become true?

Repeat for every prerequisite until the chain reaches baselines.

### Pass 6 — Insert mechanisms

Between every required source condition and every produced condition, name the mechanism that performs the transformation.

Do not connect entities directly.

### Pass 7 — Assign branches, actors, guards, capabilities, and evidence policies

For every mechanism, record:

- which branch contains it;
- who can act;
- which capabilities are required;
- what situational constraint must hold;
- what evidence the actor must present;
- which condition that evidence is permitted to establish.

### Pass 8 — Grade knowledge

For every condition, separate assessed valuation from epistemic grade.

Mark unknowns honestly. Add inquiries where knowledge, not world change, is the missing product.

### Pass 9 — Identify deposits, external processes, and amplification

Mark where the tracked entity must wait for another actor. Name the external mechanism. Record payload and work separately. Declare disproportionate amplification.

### Pass 10 — Add branches without erasing alternatives

Represent decisions as branch-status changes. Preserve alternatives and rationale. Do not prematurely collapse comparison into one score.

### Pass 11 — Assign duration classes and derive time

Attach honest duration classes only where supported. Leave unknown classes undefined. Compute projections; never invent precision merely to complete a chart.

### Pass 12 — Compute the frontier and append the record

Show:

- enabled mechanisms;
- external deposits;
- sustained conditions at risk;
- unresolved inquiries that block progress;
- missing evidence;
- overloaded mechanisms that may require redesign.

Append every admitted change. The canvas and its derived views should be reproducible from history.

## Article 121 — The mechanism card

A learner or reviewer SHOULD be able to specify one mechanism with a compact card:

```text
Name / concept identity:
Means identity and version:
Branch:
Actor:
Source conditions:
Sustained sources that must remain valid:
Guard:
Required capabilities:
Evidence policy:
Produced conditions:
Effects:
Named failures:
Atomicity / idempotence / compensation:
Duration class:
Payload:
Work:
Amplification declared?:
Irreversible decision?:
Binding status:
Evidence maturity:
First explanatory occurrence:
```

The card prevents a verb from masquerading as a complete causal model.

## Article 122 — The daily operating questions

A completed canvas SHOULD answer these questions whenever its frontier is computed:

1. Which conditions are assessed true, false, and unknown?
2. Which assessments are known, probable, possible, or unknown?
3. Which mechanisms are enabled now?
4. Which mechanisms are blocked, and by exactly what?
5. Which deposits are waiting on external actors?
6. Which sustained conditions are at risk?
7. Which evidence items are missing?
8. Which inquiries would increase useful knowledge?
9. Which active path contains an undefined duration class?
10. Which branch comparisons remain genuinely incomparable?
11. Which mechanism is overloaded enough to require redesign?
12. What history record should be appended next?
13. Which known means can satisfy the next required transition?
14. Which missing transition is a genuine invention boundary?

The answer to “What should I do today?” is derived from the frontier, ownership, risk, evidence, and available means—not selected from an arbitrary priority list.

## Article 123 — Diagnostic exercises

### Exercise 1 — Replace “delayed”

Choose one stuck process. Do not use the words *delayed*, *blocked*, *pending*, or *waiting* until you have named:

- the tracked entity;
- its current condition;
- the next mechanism;
- the missing source condition;
- the actor who controls it;
- the required evidence;
- the guard or capability that prevents firing.

### Exercise 2 — Find an interface lie

Identify a system that announces a condition before the corresponding authoritative condition exists. Draw the two conditions separately. Name the evidence policy allowed to close the gap.

### Exercise 3 — Turn a date into a condition

Take a goal written as a date. Rewrite it as an outcome condition. Work backward until every immediate prerequisite is named. Attach duration classes and derive the date rather than assuming it.

### Exercise 4 — Separate achievement from maintenance

Choose a goal that appears terminal. Ask what must remain true after arrival. Create a successor cybernetic canvas.

### Exercise 5 — Preserve a rejected route

Model a decision with at least two branches. Activate one and preserve the other. Record why. Later change one baseline and ask whether the preserved route becomes relevant.

### Exercise 6 — Model an inquiry

Choose an uncertainty that contaminates several downstream assumptions. Create an inquiry whose product is knowledge. State how its answer could redraw the canvas.

### Exercise 7 — Refuse false precision

Leave one necessary duration class undefined. Run projection. The correct output is the responsible mechanism, not a fabricated completion date.

### Exercise 8 — Find amplification

For one small request, estimate payload and actual work. If the ratio is large, make it part of the public mechanism signature.

### Exercise 9 — Simulate interruption

Stop the project or process. Return using only the canonical source and append-only history. Ask whether the frontier reconstructs without a conversation with the earlier operator.

### Exercise 10 — Redesign an overloaded arrow

Find one mechanism whose work cannot fit its current class. Do not shorten the estimate. Introduce a new entity, mechanism, branch, or substrate and append the redesigned canvas.

### Exercise 11 — Translate without semantic change

Replace every visible English lexeme with another language or alternate accessible rendering. Verify that legality, bindings, history, and traces remain unchanged.

### Exercise 12 — Retrieve without naming

Find a needed mechanism by source condition, destination condition, evidence, effects, and substrate without searching for the author’s function or package name.

## Article 124 — Ownership criteria

A learner owns the paradigm when the learner can:

- state the One Rule without turning it into a slogan detached from prerequisites;
- name entities, conditions, and mechanisms;
- identify the exact missing condition behind “stuck”;
- distinguish acknowledgement from authoritative reality;
- assign evidence according to who controls the truth;
- separate valuation from epistemic grade;
- represent waiting as a deposit state;
- derive time from topology and honest duration classes;
- distinguish achievement from maintenance;
- reconstruct the present from append-only history;
- compute the frontier;
- preserve alternatives without collapsing them to a score;
- redesign overloaded causality rather than cosmetically accelerating it;
- use concept and occurrence identities across prose and topology;
- distinguish a glyph from a command;
- retrieve and compose means by contract;
- apply the same firing rule at more than one scale without erasing domain sovereignty.

At that point, shapes and symbols are no longer decorations. They are compressed statements of a causal discipline the learner already understands.

---

# Part X — Worked applications and the write-ahead-log case study

## Article 125 — Ordinary communication: “I sent it”

A day-to-day message often compresses several conditions into one verb.

> I sent the payment.

A truthful state trail may be:

```text
Payment@Intended
    → ◇ Submit
Payment@Submitted
    → ◇ Authorize
Payment@Authorized
    → ◇ Settle
Payment@Settled
```

The message may remain brief while attaching the payment concept and the exact condition being reported.

The symbol preserves identity. The condition prevents the recipient from mistaking *submitted* for *settled*. The message remains prose; it does not execute merely by displaying the glyph.

## Article 126 — The word “Saved”

A machine says *Saved*. The interface has spoken in the grammar of completion.

The work may still be in volatile memory. It may be parked among dirty pages. A background mechanism may not yet have fired. A storage device may still need to read, erase, merge, remap, and program a much larger region before the small write becomes durable.

The model therefore distinguishes:

```text
Declared condition: interface reports saved.
Authoritative condition: data is durable under the declared failure model.
```

The distance between them is not a minor implementation detail. It is the semantic gap in which loss occurs.

Truth costs more than acknowledgement because acknowledgement may stop at the interface. Truth must pass through every required layer.

## Article 127 — The word “Received”

A petition is filed. An institution says *Received*.

Receipt is not adjudication. The petition may be deposited in a queue. An adjudicator unknown to the petitioner may eventually act under an institutional policy. A small filing may trigger months of hidden work. Only an authoritative result permits the desired condition to be admitted.

The receipt is the *Saved* of the institution.

The claim is not that a government is literally a storage device. The claim is that one firing semantics can model the causal structure of both:

- conditions hold or do not hold;
- mechanisms fire only when prerequisites hold;
- declarations may precede authoritative reality;
- evidence closes the gap;
- deposits wait on external actors;
- small intentions may trigger large hidden work;
- the frontier is determined by what is enabled now.

## Article 128 — A human-life strategy requires several canvases

A strategy for two people separated by war SHOULD not be forced into one undifferentiated task list.

### Canvas L — The petition becoming a visa

```text
Mode: linear
Tracked entity: petition, becoming an issued visa
Baseline: war / separation
Outcome: visa issued
```

A teaching-level path may include:

```text
gather evidence
→ engage counsel
→ choose pathway
→ file
→ deposit: government review
→ receipt issued ∥ petition adjudicated
→ approval gate under external evidence
→ interview routing
→ medical examination
→ consular review
→ visa issued
```

### Canvas W — The livelihood

```text
Mode: linear
Tracked entity: livelihood
Outcome: a role that survives the move
```

Immigration and employment are different substrates with different actors, conditions, and evidence. They require separate canvases.

### Convergence bridge

The move mechanism is an AND-join. It cannot enable until the petition and livelihood canvases deliver their tracked entities in the required conditions.

The date of the move is derived from convergence. It is not the cause of convergence.

### Canvas T — The life together

```text
Mode: cybernetic
Resident entity: the life together
Maintained properties: lawful status, livelihood, health, housing, care
```

“Together, for good” is not a terminal node followed by nothing. It is a maintained reality.

Hope supplies the reason for the system. The system does not replace hope. It prevents hope from carrying causal uncertainty alone.

## Article 129 — `CONTEXT.png` is the baseline, not the destination

The repository’s [`CONTEXT.png`](prereq-write-ahead-log/doc/CONTEXT.png) is valuable because it makes a hidden physical path visible. It contains memory states, writeback behavior, I/O submission, device cleaning, consolidation, amplification, and acknowledgement boundaries.

It also demonstrates the burden this Constitution seeks to remove:

- English names nearly every entity, condition, and mechanism;
- explanatory notes compete with topology;
- the raster image is not a semantic source;
- nodes and arrows are not directly addressable as contracts;
- decorative and imperative marks have no machine-enforced type distinction;
- the runtime is not obliged to follow the pictured transitions;
- reusable mechanisms cannot be discovered through the image.

The artifact can testify. It cannot yet govern.

The case study SHALL preserve the artifact as evidence of the representational problem rather than adopt its English-heavy raster form as the new language.

## Article 130 — The implementation already contains candidate means

The record format in [`record.js`](prereq-write-ahead-log/record.js) contains a framing means:

```text
Payload ──◇ Frame ──▶ LengthFramedRecord
```

The WAL in [`wal.js`](prereq-write-ahead-log/wal.js) contains several candidate means:

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
    → State@Current
```

Its constructor replays the log to reconstruct memory, revealing that the in-memory map is derived state while the surviving log is the recovery source.

The detailed study and its exclusions remain in [`STUDY.md`](prereq-write-ahead-log/doc/STUDY.md). The implementation history remains in [`CHANGELOG.md`](prereq-write-ahead-log/doc/CHANGELOG.md).

## Article 131 — The minimum constitutional topology

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

A generated API SHOULD make premature application unavailable or reject it before mutation.

## Article 132 — Recovery is a condition-sensitive scan

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

A torn header and torn payload are distinct conditions because their detection claims differ.

Recovery does not prove protection against every form of corruption. The current étude deliberately excludes checksums and therefore does not detect all silent bit-level corruption.

## Article 133 — Durability is an evidence boundary

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

must carry the substrate assumptions, evidence, and measured cost of synchronization.

An acknowledgement emitted before this transition completes MUST be modeled as a declared condition that may diverge from physical reality.

The word *Saved* is not one state. It is a claim about a chain.

## Article 134 — The current code boundary and the desired means boundary differ

The present JavaScript implementation does not expose every fine-grained means as an independent callable boundary.

`WAL.append()` currently bundles:

- record framing;
- positional append;
- optional synchronization;
- offset advancement;
- stable address return.

A truthful semantic source MUST record that fact rather than pretending the desired decomposition already exists.

The first executable prototype MAY use adapters around the current composite function. Later refactoring SHOULD align implementation boundaries with the independently reusable means where doing so improves safety, testing, retrieval, or composition.

`KVStore._apply()` likewise does not independently receive a static type proving durability. The surrounding `put` and `delete` procedures currently enforce append-and-synchronize before application. The topology should reveal the desired contract while the binding metadata states the implementation’s present enforcement boundary honestly.

## Article 135 — Example semantic source

A prototype source may distinguish concepts, conditions, means, policies, bindings, and transitions:

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

conditions:
  wal.record.framed:
    entity: wal.record
    temporal: achievement
    roles:
      - intermediate

  wal.record.buffered:
    entity: wal.record
    temporal: transitory
    roles:
      - intermediate

  wal.record.durable:
    entity: wal.record
    temporal: achievement
    roles:
      - gate

means:
  wal.frame:
    accepts:
      - wal.payload@created
    yields:
      - wal.record@framed
    actor: application
    guard: always
    evidence-policy: artifact
    promise: payload boundary is explicit
    binding:
      status: bound
      path: prereq-write-ahead-log/record.js
      member: Record.encode

  wal.append:
    accepts:
      - wal.record@framed
      - wal.log@consistent
    yields:
      - wal.record@buffered
      - wal.offset@stable
    actor: wal.writer
    guard: descriptor-open
    evidence-policy: artifact
    effects:
      - filesystem.write
    promise: append at tail without rewriting earlier bytes
    binding:
      status: planned
      implementation-note: extract positional-write phase from WAL.append

  storage.synchronize:
    accepts:
      - wal.record@buffered
    yields:
      - wal.record@durable
    actor: wal.writer
    guard: descriptor-open
    evidence-policy: external
    effects:
      - filesystem.flush
    binding:
      status: planned
      implementation-note: extract synchronization phase from WAL.append

  wal.apply:
    accepts:
      - wal.record@durable
      - wal.state@current
    yields:
      - wal.state@current
    actor: kv-store
    guard: record-operation-valid
    evidence-policy: artifact
    binding:
      status: bound-through-adapter
      path: prereq-write-ahead-log/kv-store.js
      member: KVStore._apply
      note: current method does not enforce durable-state type independently

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

This schema is illustrative, not yet a ratified interchange format. A validator MUST refuse to call a `planned` binding executable until an adapter or refactor supplies the declared contract.

## Article 136 — The WAL vertical slice must prove the whole conjunction

The case study is successful only when it demonstrates:

1. the One Rule through actual transition enforcement;
2. the same concept identity in prose, topology, binding, evidence, history, and runtime trace;
3. language replacement without semantic change;
4. label removal without identity loss;
5. decorative glyphs remaining inert;
6. `Apply` being impossible from `Buffered` when `Durable` is required;
7. exact bidirectional occurrence navigation;
8. recovery means discoverable by source and destination condition;
9. honest distinction among planned, adapted, composite, and directly bound means;
10. evidence attached to claims rather than decorative assertions;
11. append-only reconstruction of current state and frontier;
12. current exclusions—checksums, replication, compaction, group commit, multi-writer coordination—remaining explicit;
13. at least one alternate binding or one cross-domain reuse of the same means grammar;
14. the runtime trace highlighting the same path the textbook teaches.

The prototype is not complete merely when a prettier diagram exists. It is complete when the diagram can teach, navigate, validate, execute, trace, and retrieve the same causal identities.

---

# Part XI — Lineage, contribution, and the proper novelty claim

## Article 137 — This work is a culmination, not first contact

The firing rule is not claimed as an isolated invention. The consolidated paradigm belongs to a lineage.

The companion teaching text identifies the most important inheritances as:

- **Carl Adam Petri** — transition enablement and physics-grounded concurrency;
- **Wil van der Aalst** — Petri-net semantics carried into workflow;
- **A. Alan B. Pritsker and GERT** — logical AND/OR join gates in project networks;
- **Douglas Ross and SADT/IDEF0** — mechanisms constrained by explicit control inputs;
- **Howard T. Odum** — cost as a first-class quantity in a scalable diagram language;
- **Eliyahu Goldratt** — strategy-to-execution logical structure.

It also identifies secondary precedents contributing parts of the ambition:

- GSN and explicit evidence in argument structure;
- Alexander and a scale gradient with proto-epistemic confidence;
- Miller and Beer and same-form-across-scales ambitions;
- Heylighen and Vidal and personal-scale formalization;
- ArchiMate, SysML, UAF, BPMN, CMMN, and DMN and the power and limits of federated viewpoints and stitched notations.

This Constitution preserves that lineage as the paradigm’s own prior-art account. Independent historical verification remains a separate scholarly obligation.

## Article 138 — The strongest rival distinctions shall be stated fairly

### Petri nets

Petri nets are the deepest ancestry and the strongest challenge to any claim that firing semantics itself is new.

The proposed distinction lies not in the bare idea that transitions require enabled inputs, but in the authored conjunction of:

- stable language-independent concept identities;
- prose-born symbols and occurrence-level concordance;
- typed evidence policies;
- per-condition epistemic status;
- interface-lie pairs;
- duration classes from which time is derived;
- append-only personal and system continuity;
- behavioral retrieval of reusable means;
- execution bindings and semantic traces;
- one comprehension-first grammar demonstrated from substrate mechanics through personal strategy.

### ArchiMate

ArchiMate spans strategic, business, application, technology, and physical viewpoints. Its strength is structural cartography: what exists, what depends upon what, and how architecture elements relate.

This paradigm asks a narrower operational question at every scale:

> What must hold, which mechanism can fire now, what evidence permits its result, which actor owns it, what work the substrate imposes, and what condition becomes admissible afterward?

### Goldratt and the Theory of Constraints

Goldratt reaches from operational constraints into project management and strategy.

The proposed distinction is that the same evidence-governed enabledness rule, condition ontology, append-only continuity, and semantic identity layer are carried without changing meaning from physical substrate to project and personal scale.

### SysML, UAF, and model-based systems engineering

These traditions can trace hardware, operations, resources, missions, and strategy through several viewpoints.

Their unification commonly relies on federation and traceability among separately semantic diagram types. The proposed contribution is one firing rule and one concordant identity layer reused across the rungs while permitting domain-specific renderings.

## Article 139 — The contribution is the conjunction

The paradigm carries one firing semantics across:

1. substrate physics;
2. system and protocol mechanics;
3. project and time management;
4. institutional process;
5. strategy and personal life;
6. reusable implementation discovery and composition.

It joins that semantics with:

- typed evidence-gated firing;
- per-condition valuation and epistemic grade;
- baseline support;
- achievement and sustained validity;
- deposits and external actors;
- declared payload/work amplification;
- interface-lie pairs;
- time derived strictly from causal structure and honest duration classes;
- preserved alternatives and rationale;
- append-only history and replay;
- stable concept, occurrence, and claim identities;
- word–symbol siblinghood;
- language-independent rendering;
- executable topology and runtime enforcement;
- behavioral retrieval of reusable means;
- provenance-preserving composition.

The honest claim is not that no one encountered any ingredient. The honest claim concerns the coherent conjunction and its imperative demonstration.

## Article 140 — Safe public statement

A defensible public statement is:

> Building directly on prior traditions of transition enablement, logical join gates, constraint-governed mechanisms, explicit cost, workflow, systems modeling, evidence structures, and strategy-to-execution logic, Symbolic Means carries one evidence-governed mechanism-enablement rule across substrate mechanics, system behavior, projects, institutions, and personal strategy. It adds a concordant semantic layer of stable concept identities, prose-born symbols, occurrence-level navigation, assessed truth and epistemic grade, honest duration classes from which time is derived, declared-versus-authoritative interface-lie pairs, preserved alternatives, append-only history, executable bindings, semantic traces, and behavioral retrieval of reusable means. No ingredient is claimed as new in isolation; the contribution asserted is the coherent conjunction as one comprehension-first and execution-capable grammar.

This statement SHOULD remain revisable.

If a primary source is found that already combines the same firing semantics, the same scale range, the same semantic layer, and the same reuse and execution model, the novelty claim MUST narrow accordingly.

The willingness to append correction rather than erase history is not merely scholarly caution. It is the theory practicing itself.

---

# Part XII — Boundaries, governance, adoption, and conformance

## Article 141 — This is not a universal rebus

Symbolic Means does not seek to replace sentences with strings of pictures.

Symbols identify stable concepts. Prose explains motives, uncertainty, exceptions, history, consequence, and meaning.

Removing the semantic overlay SHOULD leave readable prose. Removing visible labels from an expert topology SHOULD leave an inspectable graph whose identities remain accessible.

## Article 142 — Symbols are not naturally unambiguous

A glyph can be misunderstood.

Its precision comes from stable identity, taught context, consistent recurrence, accessibility, semantic role, and exact navigation—not from visual intuition alone.

The system MUST NOT rely upon the assumption that every culture, discipline, or individual will infer the same meaning from an unintroduced picture.

## Article 143 — This is not a ban on source code

Existing programming languages remain valuable implementation media.

The paradigm places a semantic layer above and across them so that a mechanism is not imprisoned in one syntax, package, framework, or author’s vocabulary.

Source code remains where substrate-specific detail, performance, algorithms, data representation, and low-level execution require it.

## Article 144 — This is not merely a flowchart standard

Flowcharts, statecharts, Petri nets, UML, proof assistants, domain-specific languages, visual programming systems, workflow systems, and formal methods contain valuable ideas.

The distinctive program asserted here is the closed concordance among:

1. the One Rule as a cross-scale enabledness law;
2. prose-born semantic symbols;
3. language-independent concept identities;
4. exact occurrence and claim navigation;
5. valuation, epistemic grade, guards, actors, and evidence policies;
6. typed state-transition topology;
7. append-only continuity, frontier, and time projection;
8. executable bindings and traces;
9. behavioral retrieval of reusable means;
10. composition as the primary programming act.

The contribution must be demonstrated by a working system, not proclaimed by omission of prior art.

## Article 145 — This is not automatic correctness

A typed graph may encode a false model. A baseline may be wrong. An evidence policy may be inadequate. A binding may violate its contract. A domain authority may err. A history may faithfully preserve mistaken admissions.

Conformance improves inspectability, continuity, semantic reuse, and enforcement. It does not abolish empirical reality or moral responsibility.

The system MUST permit correction, dispute, uncertainty, and external review.

## Article 146 — This is not one shape for all disciplines

Shapes are canonical renderings, not metaphysical truths.

A discipline MAY use familiar domain-specific forms if semantic role metadata, accessibility, and interoperability remain intact.

The reusable substance is the concept, mechanism, transition, evidence policy, and taxonomy—not necessarily the visible shape.

## Article 147 — This is not the abolition of invention

The registry cannot contain what has never been conceived.

By revealing exactly which transition is missing, the paradigm gives invention a more honorable place.

New work begins where reuse and lawful composition genuinely end.

Invention SHOULD enter as a new proposed means with explicit assumptions, evidence obligations, provenance, and maturity—not as anonymous generated text pretending to be established knowledge.

## Article 148 — This is not command over external reality

A model can determine what its own rules permit. It cannot compel a remote institution, a human being, a market, a biological system, or a physical substrate to honor an intention merely because an arrow has been drawn.

External mechanisms remain owned by their actors and governed by their evidence and authority.

The topology creates honest waiting, not magical control.

## Article 149 — This is not a replacement for hope, judgment, or care

A causal model can expose prerequisites, ownership, evidence, risk, and the current frontier.

It cannot choose every human purpose. It cannot reduce love, dignity, justice, courage, or grief to a score without loss.

Hope supplies the reason. Judgment supplies policy where branches remain incomparable. Care determines how mechanisms should affect people. The rule supplies a method for refusing causal self-deception.

## Article 150 — Governance shall preserve correction and domain sovereignty

The registry SHOULD preserve:

- corrections;
- deprecations;
- disputed definitions;
- superseded means;
- rejected branches;
- evidence withdrawals;
- historical versions;
- reasons for change.

A dominant language, vendor, institution, or implementation MUST NOT silently redefine a concept used by other communities.

Domain authorities govern their concepts and admission policies. Cross-domain bridges require negotiated semantics rather than unilateral renaming.

## Article 151 — Adoption proceeds through imperative demonstrations

### Phase I — Semantic annotation

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

Bind exact prose occurrences in the study and this Constitution.

### Phase II — Machine-readable canvases

Create causal sources for:

1. framing and append;
2. durability;
3. recovery;
4. replay and application.

Generate SVG or another addressable rendering. Do not adopt the raster image as the semantic source.

### Phase III — Configuration, evidence, and history

Implement valuation, epistemic grade, branch status, evidence policies, guards, expected versions, append-only records, fold reconstruction, and frontier computation.

### Phase IV — Bindings and validator

Bind initial means to `record.js`, `wal.js`, and `kv-store.js` through honest adapters or refactors.

Validate:

- role separation;
- baseline support;
- firing prerequisites;
- evidence admission;
- `Apply` requiring durability;
- recovery truncating only after the last valid boundary;
- every executable edge having a binding or declared abstraction.

### Phase V — Concordance

Add exact navigation:

```text
prose occurrence ↔ topology occurrence
topology edge ↔ claim explanation
claim ↔ means
means ↔ binding
claim and binding ↔ evidence
runtime trace ↔ transition
history ↔ present configuration
```

### Phase VI — Honest time and continuity

Add duration classes, false-precision refusal, frontier computation, deposit states, sustained validity, and replay after interruption.

### Phase VII — Multilingual projection

Render the same topology with at least two lexeme sets and one nonvisual form. The semantic graph MUST remain unchanged apart from rendering references.

### Phase VIII — Means retrieval

Implement behavioral queries such as:

```text
Record@Buffered → Record@Durable
Log@TornTail → Log@Consistent
Log + Offset → Record + NextOffset
Knowledge@Unknown → Knowledge@Known
```

Demonstrate retrieval without searching for `fsync`, `recover`, `readAt`, or another implementation name.

### Phase IX — Cross-domain transfer

Choose a second domain with clear acknowledgement, evidence, external actor, time, and maintenance boundaries.

The purpose is not to reuse WAL code. It is to prove that the firing grammar, evidence model, history discipline, and means registry travel while domain nouns remain sovereign.

## Article 152 — Conformance tests

An implementation SHALL NOT claim conformance beyond its declared authority level until it passes the applicable tests or documents why a test lies outside its scope.

### Test 1 — One Rule enabledness

A mechanism cannot fire unless every declared source condition, sustained validity, branch, actor, evidence policy, guard, and capability requirement is satisfied.

### Test 2 — Translation invariance

Changing every visible lexeme to another language does not change concept identities, transition legality, bindings, history, or traces.

### Test 3 — Role separation

A decorative or referential glyph cannot execute and cannot occupy a mechanism slot.

### Test 4 — Shape independence

Changing the visual shape of a mechanism under another renderer does not change its semantic role.

### Test 5 — State ownership

Every condition belongs to exactly one entity, and ambiguous nested-state containers are rejected.

### Test 6 — Baseline support

Every producer-less condition is declared given, externally determined, proposed, or unsupported.

### Test 7 — Intent/commitment distinction

A requested action or acknowledgement cannot satisfy a transition requiring committed or authoritative state.

### Test 8 — Observation/effect distinction

An observation cannot silently mutate the observed entity.

### Test 9 — Evidence-gated admission

A gate cannot become true without a recorded producer and evidence satisfying its policy.

### Test 10 — Interface-lie closure

A declared/authoritative gap cannot close on reassurance or weak evidence when authoritative evidence is required.

### Test 11 — Illegal-transition rejection

A transition absent from the admitted topology is unrepresentable or rejected before the protected effect.

### Test 12 — Exact occurrence navigation

Selecting a symbol or arrow opens the smallest sufficient explanatory passage for that occurrence.

### Test 13 — Reverse navigation

The explanatory passage identifies and highlights the corresponding topology occurrence.

### Test 14 — Binding independence

Two implementation bindings can realize one means without changing the means identity.

### Test 15 — Behavioral retrieval

A user can find a means by source condition, destination condition, policy, effects, and substrate without guessing its implementation name.

### Test 16 — Evidence traceability

Every verified transition leads to its evidence, and every evidence item identifies the claim or binding it supports.

### Test 17 — Failure explicitness

Timeouts, torn writes, missing evidence, permission failures, conflicts, unknown observations, and external waiting appear as named outcomes.

### Test 18 — Accessibility equivalence

A nonvisual rendering preserves entity, condition, actor, guard, evidence, mechanism, destination, and failure distinctions.

### Test 19 — Mechanical debt

Every parent mechanism that hides relevant complexity links to a child canvas or explicit binding contract.

### Test 20 — Prose integrity

Removing semantic overlays leaves readable prose rather than broken rebus text.

### Test 21 — Diagram integrity

Collapsing repeated prose labels leaves an inspectable topology rather than an unexplained collection of icons.

### Test 22 — Append-only continuity

The present configuration and frontier reconstruct from canonical source and history after interruption.

### Test 23 — Lapse preservation

A sustained condition may become invalid without erasing prior attestation or achievement.

### Test 24 — False-precision refusal

Projection returns missing duration obligations rather than fabricating a date.

### Test 25 — Branch preservation

A nonselected branch remains available with its rationale unless an append explicitly rejects or supersedes it.

### Test 26 — Amplification disclosure

A mechanism above the declared work/payload threshold exposes amplification in its public contract.

### Test 27 — Runtime concordance

A runtime trace highlights the exact path through the same topology taught to the reader.

### Test 28 — Reuse provenance

A composed program retains identities, versions, assumptions, evidence, and failures of its means.

### Test 29 — Invention boundary

When no lawful composition satisfies a goal, the system identifies the missing transition rather than fabricating an unmarked substitute.

### Test 30 — Cross-scale invariance

At least two materially different domains use the same enabledness semantics while preserving their own concepts, evidence, actors, work, and time classes.

---

# Part XIII — Constitutional declaration

The alphabet is one of humanity’s great instruments. It should not be punished for failing to be every other instrument as well.

Words can carry memory, grief, humor, judgment, ambiguity, and possibility. They can explain why a mechanism exists, whom it protects, what it costs, where it fails, and whether its use is just. But when the same words are forced to serve as permanent identifiers, state labels, commands, executable contracts, search keys, evidence policies, and proofs of physical truth, their richness becomes operational uncertainty and their variation becomes technical indirection.

A mature symbolic practice does not exile language. It gives language companions.

The concept supplies identity.  
The word supplies human meaning.  
The glyph supplies recognition.  
The entity supplies the thing.  
The condition supplies what holds.  
The valuation supplies the assessment.  
The epistemic grade supplies the strength of knowledge.  
The actor supplies agency.  
The guard supplies situational permission.  
The evidence policy supplies admissibility.  
The diamond supplies mechanism.  
The arrow supplies lawful consequence.  
The canvas supplies one coherent world.  
The mode distinguishes arrival from maintenance.  
The history supplies continuity.  
The fold supplies the present.  
The frontier supplies what may happen now.  
The duration class supplies honest temporal possibility.  
The means supplies reusable transformation.  
The binding supplies execution.  
The evidence supplies warrant.  
The trace supplies accountable occurrence.  
The registry supplies memory across works and languages.

Then programming changes character.

The practitioner no longer begins by producing another body of text whose names must compete with every name already written. The practitioner begins with a desired condition, inspects the current frontier, searches the known means, composes what is lawful, examines what is missing, and invents only where the world has not yet supplied an adequate mechanism.

This does not make creation finite. It makes waste finite.

A means is small enough to understand, strict enough to trust, free enough to travel, and stable enough to be found again. Its implementation may change. Its language may change. Its shape may change. Its semantic promise remains available for composition.

The consolidated paradigm can be held in four lines:

```text
The admitted history is the model’s truth.
The present is its fold.
The frontier is what the current conditions permit.
The means are how lawful change is reused.
```

Hope supplies the reason.  
Judgment supplies the policy.  
Evidence supplies the warrant.  
The rule supplies the method.

And the rule is this:

> **Nothing happens until everything it requires is already true.**

Therefore the constitutional aim remains:

> **Not the infinite generation of textual machinery, but the infinite use of finite, finely bounded means.**

---

# Appendix A — Minimal means contract

```yaml
means:
  id: domain.mechanism
  version: 1

  accepts:
    entities:
      - concept: domain.entity
        condition: source-condition

  branch:
    required-status: active

  actor:
    concept: domain.actor

  guard:
    all:
      - predicate: required-configuration-condition

  evidence-policy:
    all:
      - kind: self | artifact | external

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
        condition: destination-condition
    outputs:
      - concept: domain.output

  failures:
    - failure.identifier

  properties:
    atomicity: declared-boundary
    idempotence: true | false | conditional
    compensation: none | means-id
    concurrency: strategy
    duration-class: optional
    payload-class: optional
    work-class: optional
    amplification: optional

  bindings:
    - id: binding.identifier
      implementation: repository/path
      member: symbol
      version: commit-or-package-version
      substrate: substrate.identifier

  evidence:
    - id: evidence.identifier
      kind: artifact | attestation | test | proof | benchmark | trace | inspection

  explanation:
    first-occurrence: prose.occurrence-id
```

# Appendix B — Minimal transition contract

```yaml
transition:
  id: domain.source-to-destination
  claim: claim.identifier

  subject:
    concept: domain.entity

  from:
    condition: source-condition

  branch:
    id: branch.identifier
    required-status: active

  when:
    guard: guard.identifier
    evidence-policy: policy.identifier
    actor: actor.identifier
    capabilities:
      - capability.identifier

  via:
    means: domain.mechanism

  to:
    condition: destination-condition

  otherwise:
    - unresolved.identifier
    - failure.identifier

  explanation:
    occurrence: prose.occurrence-id

  topology:
    canvas: canvas.identifier
    occurrence: topology.occurrence-id
```

# Appendix C — Minimal canvas contract

```yaml
canvas:
  id: canvas.identifier
  version: 1

  tracked-entity: concept.identifier
  mode: linear | cybernetic
  goal:
    condition: outcome-or-maintained-property
  substrate:
    - substrate.identifier

  baselines:
    - condition: condition.identifier
      status: given | external | proposed

  branches:
    - id: branch.identifier
      status: active | preserved | rejected

  conditions:
    - id: condition.identifier
      entity: concept.identifier
      temporal: transitory | achievement | sustained
      roles:
        - baseline | intermediate | gate | outcome | maintained-property

  mechanisms:
    - means.identifier

  transitions:
    - transition.identifier

  interface-lies:
    - declared: condition.identifier
      authoritative: condition.identifier

  history:
    store: history.identifier
    expected-version: integer
```

# Appendix D — Editorial introduction template

```md
The **<lexeme>** <glyph concept="concept.id" occurrence="prose.id">
is <plain explanation of what the thing is>.

It matters here because <causal role>.

Its relevant condition belongs to <entity>.

It is not the same as <nearest dangerous confusion>.

The next mechanism that can transform it is <mechanism>,
which requires <conditions / evidence / actor / guard>.
```

# Appendix E — Mechanism card

```text
Name / lexeme:
Concept or means identity:
Version:
Branch:
Actor:
Source conditions:
Sustained source validity:
Guard:
Capabilities:
Evidence policy:
Produced conditions:
Effects:
Named failures:
Atomicity:
Idempotence:
Compensation:
Concurrency:
Duration class:
Payload:
Work:
Amplification:
Irreversible?:
Bindings:
Evidence maturity:
First prose occurrence:
Canvas occurrence:
```

# Appendix F — Review questions

## Before admitting a concept

1. Is this an enduring semantic distinction or merely a preferred word?
2. Does another concept already possess the same meaning?
3. Can the concept be taught without relying on its glyph?
4. Can its glyph be rendered accessibly?
5. Does translation preserve the distinction or reveal a finer one?
6. Which domain authority governs the concept?
7. What would count as a breaking semantic change?

## Before admitting a condition

1. Which entity owns it?
2. Which roles does it have: baseline, intermediate, gate, outcome, or maintained property?
3. Is its temporal behavior transitory, achievement, or sustained?
4. What is its assessed valuation?
5. What is its epistemic grade?
6. Which evidence permits it to be admitted?
7. Can it lapse without erasing history?
8. Is it part of an interface-lie pair?

## Before admitting a means

1. What exact source conditions does it accept?
2. What one promise does it make?
3. Which actor owns it?
4. What guard applies?
5. What evidence policy applies?
6. What destination conditions does it establish?
7. What can fail?
8. What effects occur?
9. Which substrate assumptions are hidden?
10. What are payload, work, and amplification?
11. Is the means already present under another name?
12. What evidence warrants reuse?
13. Can it compose without violating authority or invariants?
14. Which prose passage teaches it honestly?

## Before admitting an executable canvas

1. Is every semantic role typed?
2. Is every state owned by one entity?
3. Is every producer-less state declared?
4. Is every branch explicit and preserved or rejected by record?
5. Is every bridge compatible?
6. Is every mechanism bound or deliberately abstract?
7. Are guard and evidence policy distinct?
8. Are intent, observation, acknowledgement, commitment, and authoritative state distinguished?
9. Are deposits and external actors visible?
10. Is amplification declared?
11. Is time derived rather than imposed?
12. Can the present and frontier be reconstructed from history?
13. Can the same canvas be rendered in another language and nonvisual form?
14. Can a reader move from every consequential arrow to its explanation?
15. Can the runtime reject every pictured-illegal transition?
16. Does the canvas expose where invention begins?
