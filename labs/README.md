# Labs

Reproducible technical work: implementations, experiments and evaluations,
checked in and re-runnable. See [docs/labs.md](../docs/labs.md) for what a
lab is, the shape it has, and how to add one.

For developers who want to know whether something actually works before it
becomes a concept, a blueprint decision, or a public claim — local inference,
a retrieval setup, an agent loop, an MCP integration, a gateway, an
observability stack.

## Labs

None yet. This area exists because the contract does now
([`.ai/decisions.md`](../.ai/decisions.md), 2026-09-14); a lab is added only
once there is a real question worth running, the same "no problem, no
component" discipline [`docs/sizing.md`](../docs/sizing.md) states for
everything else in this repository.

Evaluations and lab-specific tooling stay inside the lab that needs them —
`labs/` does not get `tools/` or `evaluations/` siblings.

## Licence

This repository stays MIT. Nothing under `labs/` is copied into an adopter's
project the way `blueprints/` is, so no separate licence applies here.
