# Purpose

The top of the hierarchy. Everything else in this repository derives from this
file; where another file disagrees with it, that file is out of date.

## Where this is going

> **A person uses AI in real work and can understand what it makes possible,
> choose an appropriate form of collaboration, set boundaries that hold, and
> later explain what the system could reach, what it did, why, on whose decision
> and what was checked.**

That is the destination. Every public explanation, rule, blueprint and check
here exists because it moves someone closer to it, and anything that does not
is off course.

It is deliberately an outcome and not a structure. Structures follow from it and
can be replaced; the outcome is the thing being aimed at.

## Why it is needed

This was the founding observation, and it has not changed:

> Many repositories include ad hoc prompts but lack stable project structure,
> governance, and continuity rules. The goal is repeatable, maintainable
> collaboration over time, not one-off automation.
>
> — `README.md`, 10 May 2026

The same missing practice appears at every level. In a chat, someone pastes
client material without knowing where it goes. In a connected system, an agent
receives files, tools and credentials without a clear action boundary. On a
codebase, an agent produces something with no tests, review or record of why a
decision was made. None of those people necessarily chose a reckless approach;
they were never given a usable way to choose a better one.

The glossary names both ends. **Vibe coding** is "coding by heavily leaning on
AI generation and iteration, often with lighter upfront structure".
**AI-assisted development** is "using AI across software delivery work such as
coding, debugging, analysis, documentation, or planning" — the same work, with
the structure that is missing at the other end.

Two failure modes, one cause. Some people point an agent at everything and find
out later what it touched. Others refuse to use any of it. Both are avoidance,
reached from opposite directions, and both come from nobody having written down
how to do it properly.

## Who this project is for

The public product is for people who **use, introduce, govern or build with AI
in real work**. Someone using a chat service and someone giving an agent tools
enter at different depths, but both need to understand what the system can do,
what it can reach, where responsibility stays and how the result is checked.

The repository has a narrower operational audience: developers, maintainers and
contributors who need the sources, artifacts and checks behind the public
product.

## One public product, one supporting system

| | Job |
| --- | --- |
| **Website** | The public product. Possibilities, collaboration, technical explanation, decisions, implementation paths and evidence — organised around reader questions |
| **Repository** | The production, source and artifact system. Website source, canonical rules, technical material, review history and checks |
| **Blueprints** | Copyable artifacts within that system. Decisions already made for a stated trigger, with their limits and verification visible |

The website stands on its own. A reader does not need to understand the
repository to use it. It is not split into a knowledge base and a developer
area, and repository folders do not become its information architecture.

Information from the repository may and should reach the website when it helps
a reader understand, decide, implement or verify AI use. The repository remains
the place to copy an artifact, inspect the original, contribute or maintain this
project.

The full product statement, audience, reader questions and content admission
test are in the [Website Product Brief](./website-product-brief.md).

## How information flows

The website is organised by reader need, not source location. A technical
concept, legal source, working practice or blueprint may all contribute to one
reader path. Their origin stays visible where it helps verification, but does
not create separate public products.

Research carries primary sources and check dates before it becomes a public
claim. A settled rule or copyable artifact remains canonical in the repository;
the website explains it in the context of the reader's decision and links to the
original where someone needs to inspect or take it.

```text
research and evidence ──► public explanation
repository artifacts ───► implementation path
reader questions ────────► website structure
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
4. **Artifacts** — public content, blueprints, concepts and `docs/`.
5. **Instance** — how this repository happens to be configured.

Nothing at a lower level may contradict a higher one. What is mechanically
checkable is checked by `.github/scripts/check-conformance.sh` in CI.

## What a blueprint is

Material you **copy**, not material you read. Cut by **goal**, not by file list.

Blueprints make the operational part of the destination real: rather than
describing what a good repository contains, they hand over one that already is.

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
- **Not a second public product.** Maintainer documentation, project state and
  release mechanics stay here. Public explanations and implementation paths
  belong to the website when they answer a reader's AI-use question, however
  technical they are.
- **Not a dumping ground for depth.** A reference architecture may be canonical
  here, but its presence in the repository does not decide whether a public
  explanation or guide belongs on the website. Reader outcome decides that.
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

Failures of the first kind are recorded in `.ai/errors.md`. They share one
cause: writing a rule is not keeping it — which is why the answer is discipline,
not another mechanism.
