# The Presentation of Truth

*A notation for exposing the mechanics of systems*

## Section I

### The Materials

The notation has only three primitives. Everything else is a rule for using them.

#### The Box — The Entity

An entity is a physical or logical noun. Requests, payloads, files, and messages are entities in their own right, not states of their senders. Entities may nest, but they may never be placed inside a state.

Every entity has a lifespan. A *transient* entity enters, transforms, and leaves — it is the subject of a linear resolution. A *resident* entity persists and must be maintained — it is the subject of a cybernetic loop.

#### The Circle — The State

A state is the exact condition of an entity. States live only on the perimeter of an entity. A state cannot own another state.

#### The Diamond — The Mechanism

A mechanism is the action that moves an entity from one state to another. It sits between states and names only the transition.

#### The Temporal Dimension

When duration matters, a mechanism may carry a bracketed latency class, such as `◇ [ns] Compute` or `◇ [ms] Network Fetch`.

## Section II

### The Grammar

Only states interact. Causality runs from a source state, through a mechanism, into a target state. Entities do not touch directly.

#### Goal and Scope

Every canvas is anchored to a goal. In a linear system the goal is an event to be resolved. In a cybernetic system the goal is a property to be maintained. Multiple goals belong on the same canvas only when they compete over the same substrate; otherwise they require separate canvases.

#### Absolute Determinism

Ambiguity is a modeling failure. Every branch or merge must pass through an explicit mechanism that consumes an explicit constraint.

## Section III

### The Canvas

A canvas expresses one physical truth under one set of substrate constraints. If those constraints change, draw a new canvas.

Everything beyond the three primitives—goals, bridges, convergence, topologies, and comparison methods—is a composition rule, not a fourth primitive.

#### Modes

Linear mode maps a DAG toward resolution. Cybernetic mode maps a feedback loop that maintains a property. These modes may nest, but each canvas still describes one coherent reality.

#### The Entity Focus

Each canvas tracks exactly one entity. Other entities may appear as infrastructure or agents, but every state transition on the canvas is about the tracked entity.

- **Flow topology**: The tracked entity moves through stationary infrastructure.
- **Manipulation topology**: The tracked entity remains in place while external agents act on it.

#### The Bridge

A mechanism on one canvas may produce a new entity that becomes the tracked entity of another canvas. That handoff is the bridge.

#### The Convergence

A canvas may depend on multiple incoming bridges. It cannot begin until every required entity exists in the required state.

#### The Law of Resolution — The Depth-N Constraint

An entity at depth *N* must be fully resolvable using the primitives at depth *N*. The parent canvas defines the interface states; the child canvas defines the internal mechanics. Friction cannot be hidden behind an entity boundary.

#### Spatial Anchoring — The Diamond Proxy

Comparing two realities does not violate the single-truth rule because the comparison happens across separate canvases. Shared anchor entities stay fixed between the canvases, while divergent mechanisms move to the periphery. The diamond count between shared anchors is a proxy for mechanical complexity.

#### The Diamond Ledger

Each entity on a canvas displays its local diamond count. The canvas title carries the total. This makes mechanical cost legible at a glance: you can see where the friction concentrates and compare totals across realities.

#### The Pull

A mechanism inside one entity may receive its activation edge from a state in a different entity. The mechanism cannot fire until that external state exists — it is an event listener, not a scheduled actor. The tracked entity does not push itself forward; it parks in a deposit state and waits for an external agent to pull it. This models asynchronous, event-driven flow without introducing a fourth primitive: the diamond is the same diamond, but its input crosses an entity boundary.

#### The Amplification

When a mechanism forces the tracked entity to absorb mass disproportionate to its original payload — a few kilobytes triggering a four-megabyte read-erase-reprogram cycle — the entity must declare the amplification in its description. Write amplification is not a footnote; it is the central fact of the substrate.

#### The Hallucination

When a system's interface emits a state before the corresponding physical state exists, model the divergence as two separate entities on the same canvas: one for the declared state, one for the physical reality. The gap between them is the lie the system tells its consumers. Naming it is the first step toward deciding whether to accept it or eliminate it.

## Section IV

### The Emergence of Invention

When a mechanism becomes overloaded, the right response is not merely to optimize it. The overload is evidence that the current reality is incompatible with the goal.

At that point, introduce a new entity and redraw the system around it. Do not make a bad arrow faster. Design a new reality.

This is where optimization ends and invention begins.