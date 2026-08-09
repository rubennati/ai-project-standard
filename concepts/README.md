# Concepts

Technical reference for building things. Not rules, and not files you copy — see
[docs/concepts.md](../docs/concepts.md) for what a concept is and the five
questions each one answers.

For developers building the thing. A concept assumes you know what an index is;
the [glossary](https://ai-standard.rubennati.at/glossary) is where the
vocabulary lives.

| Concept | The decision it helps you make | Reviewed |
|---|---|---|
| [retrieval-architecture](./retrieval-architecture.md) | You have more material than anyone will read, and questions whose answers are already written down. What to build, and what to build instead | 2026-08-09 |
| [tool-access](./tool-access.md) | Several assistants need the same systems, and nobody can say what any of them may actually do | 2026-08-09 |
| [knowledge-lifecycle](./knowledge-lifecycle.md) | Something has to be written down so that other people can *rely* on it, not merely find it | 2026-08-09 |
| [agent-action-control](./agent-action-control.md) | An agent can act. Which actions run on their own, which wait for a person, and which have no path at all | 2026-08-09 |
| [delivery-pipeline](./delivery-pipeline.md) | Which checks run, where each one runs, and which of them may block a merge | 2026-08-09 |

## How they fit together

```text
                 delivery-pipeline
                 how anything ships at all
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
  retrieval-        knowledge-         tool-access
  architecture      lifecycle          how it reaches systems
  finding it        keeping it true          │
        └─────────────────┴─────────────────┘
                          │
                 agent-action-control
                 what it may do with any of it
```

Read `retrieval-architecture` if the problem is *finding*, `knowledge-lifecycle`
if the problem is *trusting*, and both if people are acting on the answers.

## Not planned

- **A concept per technology.** Same rule as blueprints: cut by the decision
  someone arrived with, not by the thing that answers it.
- **Graph retrieval as its own concept.** The trigger — questions about
  relationships rather than about documents — is real, but no round of the
  research settles when a graph earns its maintenance cost.
- **Product comparisons.** Naming tools is fine. Ranking vendors is a claim with
  a shelf life, and it belongs on the website where claims carry check dates.

## What is still missing

[research/ROUTING.md](../research/ROUTING.md) accounts for every section of
every research document. Twenty rows are repository-bound and not yet written,
and they are mostly rules rather than concepts — `docs/security-baseline.md`
carries none of the security model from the last research round.
