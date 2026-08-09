# Concepts

Technical reference for building things. Not rules, and not files you copy — see
[docs/concepts.md](../docs/concepts.md) for what a concept is and the five
questions each one answers.

For developers building the thing. A concept assumes you know what an index is;
the [glossary](https://ai-standard.rubennati.at/glossary) is where the
vocabulary lives.

| Concept | The decision it helps you make | Reviewed |
|---|---|---|
| [retrieval-architecture](./retrieval-architecture.md) | You have more material than anyone will read and questions whose answers are already written down. What to build, and what to build instead. | 2026-08-09 |

## Planned

Named because the gap is real, not because the file is nearly written. Each one
needs the same five answers before it ships.

- **Tool access and integration** — connectors, protocols and gateways: what
  each layer is actually for, when one shared surface beats four direct
  integrations, and where the credential lives. Blocked on the same question as
  the [`agent-tool-access`](../blueprints/agent-tool-access/) blueprint, which
  the research argues both ways and settles neither.
- **Knowledge lifecycle** — how a statement moves from candidate to published to
  superseded, who owns it, and what a review actually checks. The half of
  [`agent-maintained-knowledge-base`](../blueprints/agent-maintained-knowledge-base/)
  that is architecture rather than payload.
- **Agent action control** — classifying what an agent may do by what it can
  break, and enforcing that outside the model. Currently spread across the
  `ai-assisted-development` payload and `docs/security-baseline.md` without a
  single place that states the model.

## Not planned

- **A concept per technology.** Same rule as blueprints: cut by the decision
  someone arrived with, not by the thing that answers it.
- **Product comparisons.** Naming tools is fine. Ranking vendors is a claim with
  a shelf life, and it belongs on the website where claims carry check dates.
