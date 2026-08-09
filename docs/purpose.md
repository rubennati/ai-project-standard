# Purpose

The top of the hierarchy. Everything else in this repository derives from this
file; where another file disagrees with it, that file is out of date.

## Where this is going

> **A developer brings an AI agent into their project and can still answer,
> months later: what changed, why, on whose decision, and what was checked —
> without having had to invent the practice themselves.**

That is the destination. Every rule, blueprint and check here exists because it
moves someone closer to it, and anything that does not is off course.

It is deliberately an outcome and not a structure. Structures follow from it and
can be replaced; the outcome is the thing being aimed at.

## Why it is needed

This was the founding observation, and it has not changed:

> Many repositories include ad hoc prompts but lack stable project structure,
> governance, and continuity rules. The goal is repeatable, maintainable
> collaboration over time, not one-off automation.
>
> — `README.md`, 10 May 2026

On a codebase it looks like this: an empty directory, an agent pointed at it,
and whatever comes out. No tests, no review, no licence, no security controls,
no record of why anything was decided. Not because anyone chose that — because
there is no established practice yet to choose instead.

The glossary names both ends. **Vibe coding** is "coding by heavily leaning on
AI generation and iteration, often with lighter upfront structure".
**AI-assisted development** is "using AI across software delivery work such as
coding, debugging, analysis, documentation, or planning" — the same work, with
the structure that is missing at the other end.

Two failure modes, one cause. Some people point an agent at everything and find
out later what it touched. Others refuse to use any of it. Both are avoidance,
reached from opposite directions, and both come from nobody having written down
how to do it properly.

## Who this repository is for

**Developers and maintainers.** People who write software and are putting an AI
agent into that work.

That is narrower than the website on purpose. The repository ships artifacts a
developer uses: files to copy, rules that run, checks that block a merge. It
does not explain the law, data flows or vendor terms — the website does.

## The three surfaces

| | Audience | Job |
|---|---|---|
| **Repository** | developers and maintainers | The artifacts. Files you copy, rules you run, checks that block a merge, and the technical reference for building the thing |
| **Website** | anyone affected by AI at work | The reasoning. Why a rule exists, the trade-offs, what the law requires — every claim with an evidence level and a check date |
| **Blueprints** | someone starting or converting a project | The opinion, as files. Decisions already made, with the reasons stated |

The website is **broader** than the repository and sits logically above it. It
covers data flows, law and secure setup, none of which any blueprint ships. That
is correct, not a contradiction: the repository answers *how do I build this*,
the website answers *what is happening and what am I allowed to do*.

## How information flows

**Upward, one way.** A rule is settled in the repository and explained on the
website. The website never contradicts the repository, and where it renders
repository files it renders them rather than restating them.

**One loop back, and only for source material.** Research published on the
website carries primary sources and check dates. That verified material may come
back down as *input* to a blueprint or a document. What travels back is
evidence, never authority — the repository decides, the website explains.

```text
repository ──────────────► website
   ▲                          │
   └──── verified sources ────┘
         (input, not authority)
```

**One place per fact.** If something is true in two files, one of them is a copy
that will drift. Point at the original instead.

## The hierarchy

When two things conflict, the higher one wins:

1. **Purpose** — this file. The destination.
2. **Evidence** — what may be claimed and with what backing. Facts carry a
   primary source and a check date; a vendor is authoritative for its own terms
   and nothing beyond them; restating a norm and applying it are different acts.
3. **Decisions** — `.ai/decisions.md`, dated, with the reasoning, append-only.
   A decision that turns out wrong gets a new entry, not an edit.
4. **Artifacts** — blueprints, concepts and `docs/`.
5. **Instance** — how this repository happens to be configured.

Nothing at a lower level may contradict a higher one. What is mechanically
checkable is checked by `.github/scripts/check-conformance.sh` in CI.

## What a blueprint is

Material you **copy**, not material you read. Cut by **goal**, not by file list.

Blueprints are how the destination is reached: rather than describing what a
good repository contains, they hand over one that already is.

Every blueprint README answers four questions, and is incomplete without them:

1. **What it solves** — the situation you are in before you take it
2. **What you get** — the decisions it has already made for you
3. **When not to use it** — the case it is wrong for
4. **Verified** — what it was run against, with a date, or the honest statement
   that it was not

The fourth separates this from a template collection. A blueprint claiming "this
is how you work" that nobody has run is an assessment presenting itself as a
fact.

Current blueprints: [`blueprints/README.md`](../blueprints/README.md). The shape
and the rules for adding one: [blueprints.md](./blueprints.md).

## What this repository is not

- **Not a fork target.** Forking hands over this project's history, its `.ai/`
  state, its website and its research. None of that belongs in your project;
  take a blueprint instead.
- **Not the place for reasoning at length.** That is the website's job.

  Depth is not length. A reference architecture is technical work and belongs
  here however many pages it takes — see [concepts.md](./concepts.md). What
  goes to the website is the argument for a general audience, and anything
  needing an evidence label and a check date.
- **Not finished.** Sections still being worked on say so rather than shipping
  filler.

## Holding to it

Two mechanisms, and they only work if they run.

**Before starting work**, hold it against the destination. Work that does not
move someone closer to it is off course, and saying so is cheaper than
finishing it.

**In CI**, `check-conformance.sh` catches what discipline does not: the purpose
is pointed at, every blueprint answers its four questions, external claims carry
a check date, blueprint paths resolve, and vocabulary matches the glossary.

Failures of the first kind are recorded in `.ai/errors.md`. There are three, and
they share one cause: writing a rule is not keeping it.
