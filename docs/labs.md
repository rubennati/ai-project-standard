# Labs

A lab is **reproducible technical work you can run**, and the record of what
happened when it did. Not a rule, and not a file you copy.

It exists because two things this repository already had left a gap between
them:

| | Holds | Runs |
|---|---|---|
| `concepts/` | how the thing is actually built, and where the decisions are | no payload — nothing to run |
| `blueprints/` | files you copy, with the decisions already made | runs in the adopter's project, not here |
| `labs/` | **an implementation, an experiment or an evaluation, checked in and re-runnable** | here, against a stated method and date |

`research/` is close but not this either: it is unverified material that
empties once it is routed. A lab is the opposite — it stays as long as it is
maintained, and what it produces (a result, a benchmark, a comparison) is
evidence with a method and a date, the same discipline the website's evidence
model already requires of a public claim.

## Who it is for

Developers who want to know whether something actually works before it
becomes a concept, a blueprint decision, or a public claim — local inference,
a retrieval setup, an agent loop, an MCP integration, a gateway, an
observability stack. A lab is where that gets tried, not asserted.

## Shape

```text
labs/<id>/
  README.md        what it tries, how to run it, what it found, and when
  <everything else the lab actually needs>
```

One lab, one directory, one trigger. Evaluations and lab-specific tooling
stay inside the lab that needs them — a shared harness that turns out to
serve two labs is still two READMEs pointing at one script, not a new
top-level area.

## What a lab README answers

1. **What it tries** — the question or claim being tested, in one paragraph.
2. **How to run it** — the exact steps, so the result is reproducible by
   someone else, not only readable.
3. **What it found** — the result, stated plainly, including a negative one.
   A lab that never reports "this did not work" is not being used honestly.
4. **Checked** — the date the lab was last run, and against what. Undated
   findings decay silently; the website's evidence model already treats a
   check date as load-bearing, and a lab is no different.

A lab that cannot say what it found yet is not a lab — it is a plan, and
belongs in `.ai/tasks.md` until there is something to run.

## What a lab is not

- **Not a blueprint.** Nothing here is copied into an adopter's project. When
  a lab produces something worth copying, that becomes a blueprint and the
  lab's README links to it.
- **Not a concept.** A lab does not replace the architecture and decision
  points a concept states; it can supply the evidence a concept cites, and a
  concept's `derives-from` may point at one.
- **Not research.** Research is unverified and empties; a lab is checked-in,
  runnable, and stays as long as it is maintained.
- **Not application code.** `.ai/state.md` still prohibits shipping a
  product out of this repository. A lab is technical work run for its own
  sake — to find out what happens — not a feature under delivery.
- **Not a place for resource-intensive verification to run by default.** What
  a lab needs to run (models, data, compute) is stated in its README; nothing
  under `labs/` runs automatically in CI until that is deliberately designed.

## How a lab relates to the rest of the repository

A lab may confirm, correct or retire something stated in `concepts/`; when it
does, the concept's `derives-from` should say so. A lab that produces a
reusable, copyable result graduates into a blueprint, the same way research
graduates into `docs/`, `concepts/` or a blueprint. A lab that stops being
maintained is removed, the same rule as a concept or a blueprint that no
longer describes what this project would recommend today.

## Adding one

1. Name the question or claim it tests. If you cannot, it is not ready to be
   a lab.
2. Create `labs/<id>/README.md` stating what it tries and how to run it —
   before the implementation, the same order [concepts.md](./concepts.md)
   asks a concept to follow.
3. Add a row to [`labs/README.md`](../labs/README.md) once there is
   something to run.
4. Keep evaluation code and tooling inside `labs/<id>/`. Do not create a
   sibling `tools/` or `evaluations/` area — see
   [`.ai/decisions.md`](../.ai/decisions.md), 2026-09-14.

## Removal

A lab is removed when it no longer runs, or no longer reflects what this
project would recommend building today. The same rule as concepts and
blueprints: a collection that only grows stops being evidence and becomes an
archive.
