# Purpose

What the repository is for, what the website is for, and what a blueprint is
for. Where any other file disagrees with this one, this one is right and the
other is out of date.

## The problem

> AI arrived in ordinary work through a text box. Software that reaches your
> files, your clients' material and your credentials is now operated in plain
> language, by people who were never handed the questions that used to come with
> that kind of access.

On a codebase that looks like this: an empty directory, an agent pointed at it,
and whatever comes out. No tests, no review, no licence, no security controls,
no record of why anything was decided. Not because anyone chose that — because
there is no established practice yet to choose instead.

The glossary names the two ends of that. **Vibe coding** is "coding by heavily
leaning on AI generation and iteration, often with lighter upfront structure".
**AI-assisted development** is "using AI across software delivery work such as
coding, debugging, analysis, documentation, or planning" — the same work, with
the structure that is missing at the other end.

This project exists to make the second one reachable without inventing it from
scratch every time.

## The three surfaces

| | Audience | Job |
|---|---|---|
| **Repository** | developers and maintainers | The artifacts. Files you copy, rules you run, checks that block a merge |
| **Website** | anyone affected by AI at work | The reasoning. Why a rule exists, what the trade-offs are, what the law requires — every claim with an evidence level and a check date |
| **Blueprints** | someone starting or converting a project | The opinion, as files. Decisions already made, with the reasons stated |

They are not the same size and do not have to be. The website is broader than
the repository — it covers data flows, law and secure setup, which no blueprint
ships. That is deliberate, and it is not a contradiction.

**Direction of flow: repository upward.** A rule is settled in the repository
and explained on the website. The website never contradicts the repository, and
where it renders repository files it renders them rather than restating them.

**One place per fact.** If something is true in two files, one of them is a
copy that will drift. Point at the original instead.

## What a blueprint is

Material you **copy**, not material you read. Cut by **goal**, not by file list.

Every blueprint states four things in its README, and is incomplete without
them:

1. **What it solves** — the situation you are in before you take it
2. **What you get** — the decisions it has already made on your behalf
3. **When to use it, and when not** — the case it is wrong for
4. **What it has been run against** — with a date, or the honest statement that
   it has not been

The fourth is the one that separates this from a template collection. A
blueprint claiming "this is how you work" that nobody has run is an assessment
presenting itself as a fact.

Current blueprints are listed in [`blueprints/README.md`](../blueprints/README.md);
the shape and the rules for adding one are in [blueprints.md](./blueprints.md).

## What the repository is not

- Not a fork target. Forking hands over this project's history, its `.ai/`
  state, its website and its research — none of which belongs in your project.
- Not a place for reasoning at length. That is the website's job.
- Not finished. Sections that are still being worked on say so rather than
  shipping filler.

## Holding to it

Two mechanisms, and they only work if they run:

- **Before starting work**, hold it against "The problem" above. Work that does
  not make that problem smaller is off course, and saying so is cheaper than
  finishing it.
- **In CI**, the checks in `.github/workflows/ci.yml` catch what discipline
  does not: vocabulary that drifts from the glossary, factual claims without a
  source or a date, and files that contradict this one.

Failures of the first kind are recorded in `.ai/errors.md`. There are three.
