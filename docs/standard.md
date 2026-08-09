# The AI Project Standard

The inventory: what this repository holds, what each part is for, and how to
take it.

The destination it serves is stated once, in [purpose.md](./purpose.md):

> A developer brings an AI agent into their project and can still answer, months
> later: what changed, why, on whose decision, and what was checked — without
> having had to invent the practice themselves.

Everything below exists because it moves someone closer to that.

## How the standard is delivered

**As blueprints.** Rather than describing what a good repository contains, the
standard hands over one that already is. Each blueprint is cut by **goal**, not
by file list, and states what it solves, what you get, when *not* to use it, and
what it was run against.

| Blueprint | For |
|---|---|
| [`open-source`](../blueprints/open-source/) | Starting a public repository: governance, contribution rules, and CI that blocks a merge. No AI in it |
| [`ai-assisted-development`](../blueprints/ai-assisted-development/) | Bringing an agent into a repository you already have: the frame it operates inside, plus an initialisation interview |

They compose, and neither depends on the other. The catalogue is
[`blueprints/README.md`](../blueprints/README.md); the contract every blueprint
meets is [blueprints.md](./blueprints.md).

## How to take one

```bash
npx degit rubennati/ai-project-standard/blueprints/<id>/files <target>
```

Not by forking. A fork hands over this project's changelog, its `.ai/` state,
its website and its research — none of which belongs in your project. See
[adoption.md](./adoption.md).

## What the repository holds

| Path | What it is |
|---|---|
| `blueprints/` | The artifacts. Files you copy, MIT-0 |
| `docs/` | The rules, stated once. This reader |
| `.ai/` | This project's own operational workspace — the working model a blueprint ships a copy of |
| `research/` | Material being verified. Not published, not normative |
| `site/` | The website source. Broader than the repository, see [purpose.md](./purpose.md) |
| Root files | This project's own governance. Its instance, not the template |

## What the standard covers

Four areas, each delivered as files in a blueprint rather than as prose here:

- **Working with an agent** — `AGENTS.md` as the single source for every tool,
  the pointer files each tool actually reads, the `.ai/` workspace, and the
  boundary: when the agent stops and asks, what it may never do, what must be
  verified before anything reaches the default branch.
- **Open-source operations** — the governance files a public repository needs,
  the inbound-rights decision, the issue and discussion split, governance sized
  to the project.
- **Engineering operations** — CI that gates rather than reports, branch
  protection, dependency automation, the security baseline, release and
  versioning policy.
- **Continuity** — decisions recorded with their reasoning and dates, state that
  survives a session, and the division between what git records and what `.ai/`
  records.

The last one is the oldest requirement in this project and the easiest to lose.
The point is collaboration that stays answerable *over time*, not automation
that worked once.

## Boundaries

Outside scope — adopt these separately if you need them:

- Application code, and language- or framework-specific conventions.
- Secrets management beyond pointing at platform features.
- Organisational governance beyond what a single repository needs.
- What the website covers: data flows, law, vendor terms, secure setup.

## What this repository demonstrates

The parts of the standard it has adopted run here, not just on paper: the git
workflow, the release process, the security baseline, the `.ai/` workspace, and
CI that fails when this repository breaks its own rules.

Where it has **not** adopted a blueprint, that blueprint is a proposal rather
than a demonstration, and its README says so. Both are currently `draft` — run
against a fresh copy, not yet used to carry a real project.

## Versioning

Semantic versioning. What counts as MAJOR, MINOR and PATCH for a standard made
of documents is defined in the Versioning section of
[`CONTRIBUTING.md`](../CONTRIBUTING.md). The release process is in
[release-process.md](./release-process.md).

## Where to read next

- [purpose.md](./purpose.md) — the destination, the hierarchy, the three surfaces
- [blueprints.md](./blueprints.md) — what a blueprint is and how to add one
- [adoption.md](./adoption.md) — taking one into your project
- [ai-workspace-layer.md](./ai-workspace-layer.md) — what `.ai/` records, what git records
- [security-baseline.md](./security-baseline.md) — the minimum security posture
- [git-workflow.md](./git-workflow.md), [branch-protection.md](./branch-protection.md)
