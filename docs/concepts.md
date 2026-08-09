# Concepts

A concept is a **technical reference for building something**. Not a rule, and
not a file you copy.

It exists because two things this repository already had left a gap between
them:

| | Holds | Length |
|---|---|---|
| `docs/` | the rule, stated once | short by design |
| `concepts/` | **how the thing is actually built, and where the decisions are** | as long as the architecture is |
| `blueprints/` | files you copy, with the decisions made | payload plus a short README |

A reference architecture is none of the first or third. It is too long for a
rule and there is nothing to copy, so before `concepts/` existed it had nowhere
to go — and technical material from research was being routed to the website
instead, where it does not belong.

[`purpose.md`](./purpose.md) settles which side of the line it sits on:

> the repository answers *how do I build this*, the website answers *what is
> happening and what am I allowed to do*

**Depth is not the same as length.** The website's job is reasoning at length —
law, data flows, trade-offs, anything with an evidence label and a check date.
Technical depth is repository work, however many pages it takes.

## Who it is for

Developers building the thing. A concept may assume you know what an index is
and can read a command. It does not have to explain the field to a newcomer —
that is what the website and the glossary are for, and a concept links to them
rather than repeating them.

## Shape

```text
concepts/<id>.md
```

One file. If it needs a directory, it is probably two concepts.

Every concept answers five questions, in this order, and is incomplete without
them:

1. **What you are deciding** — the question you arrived with, in one paragraph.
   A concept that cannot name the decision is a summary.
2. **The smallest thing that works** — before any architecture. Most problems
   labelled with a technology do not need it, and saying so first is the most
   useful thing a technical document can do.
3. **The architecture** — components, what each one is responsible for, and
   what passes between them. Concrete enough to build from.
4. **The decision points** — every place where a real project has to choose,
   with what each choice costs. This is the part that cannot be looked up
   elsewhere, and it is why the file exists.
5. **How it fails** — the specific failure modes, including the ones with no
   attacker involved. A concept that only describes the happy path is a
   brochure.

## The header every concept carries

```yaml
---
owner: <who answers questions about this>
reviewed: YYYY-MM-DD
derives-from: <the research or sources it was built from>
status: draft | reviewed
---
```

`reviewed` is a date, not a promise. A concept is re-checked when the material
underneath it moves — a new research round, a changed standard, a tool that
stopped existing. Out of date and marked out of date is honest; out of date and
undated is not.

`owner` is a person, because a technical document with no owner is a document
nobody re-reads.

## What a concept is not

- **Not a tutorial.** It states the architecture and the trade-offs. It does not
  hold your hand through an install, and it does not pretend a particular
  version of a particular tool will still be current next year.
- **Not a product comparison.** Naming tools is fine and often necessary. Ranking
  vendors is a claim with a shelf life of months, and belongs on the website
  where claims carry check dates.
- **Not a blueprint.** Nothing here is copied into your project. When a concept
  produces something copyable, that becomes a blueprint and the concept links to
  it.
- **Not the reasoning for a general audience.** That is the website's job, and
  the two are allowed to cover the same subject at different depths — the
  repository for someone building it, the site for someone affected by it.

## How a concept relates to research

`research/` is a queue and it empties. A research round arrives unverified,
gets routed, and what survives becomes one of four things: a rule in `docs/`,
files in `blueprints/`, an explanation on the website — or a concept.

The concept is where the technical half lands. Several rounds of research
usually collapse into one concept, because the rounds revise each other and only
the surviving version is worth building from.

## Adding one

1. Name the decision it helps someone make. If you cannot, stop.
2. Write section 2 first — the smallest thing that works. If the honest answer
   is "you do not need this", the concept is one paragraph long and that is a
   complete concept.
3. Fill the header. An owner and a date, or it does not ship.
4. Add a row to [`concepts/README.md`](../concepts/README.md).

## Removal

A concept is removed when it no longer describes what this project would
recommend building today. The same rule as blueprints: a collection that only
grows stops being a recommendation.
