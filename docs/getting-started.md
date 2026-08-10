# Getting Started

You are here because you want the standard in your own project. This is the
shortest path; it is not about contributing to this repository — that is
[`CONTRIBUTING.md`](../CONTRIBUTING.md).

## 1. Know what you are aiming at

Read [purpose.md](./purpose.md), or at least its first paragraph:

> A person uses AI in real work and can understand what it makes possible,
> choose an appropriate form of collaboration, set boundaries that hold, and
> later explain what the system could reach, what it did, why, on whose decision
> and what was checked.

This page is the repository-adoption path within that larger outcome. If you do
not need files and checks for a software project, start with the website instead.

## 2. Take the blueprint that matches your situation

| You are | Take | What it settles |
|---|---|---|
| Starting a public repository | [`open-source`](../blueprints/open-source/) | Governance files, contribution rules, CI that blocks a merge, the settings checklist |
| Bringing an agent into a repository you already have | [`ai-assisted-development`](../blueprints/ai-assisted-development/) | When the agent stops and asks, what it may never do, what must be verified, and an initialisation interview |
| Doing both | `open-source` first, then overlay the other | They compose; neither depends on the other |

```bash
npx degit rubennati/ai-project-standard/blueprints/<id>/files <target>
```

Do not fork. A fork hands over this project's changelog, its `.ai/` state, its
website and its research — see [adoption.md](./adoption.md).

## 3. Finish the copy

Each blueprint's README lists its own steps. Two apply to both:

1. Delete the first line of every copied file — the banner marking it as
   blueprint payload.
2. Replace the placeholders the blueprint names.

For `ai-assisted-development`, point your agent at the copied `INIT.md` and say
"initialise". It asks the questions, writes the answers into `.ai/`, and deletes
itself.

For `open-source`, work through `docs/repository-settings.md`. The CI assumes
those switches are on and nothing in a repository can turn them on for you.

## 4. Check it took

The point is not that the files are present. It is that a wrong change now gets
stopped. Open a pull request that deliberately breaks a rule — omit the licence,
skip the sign-off — and confirm CI refuses it. If it does not, the blueprint is
decoration.

## Where to read next

- [blueprints.md](./blueprints.md) — what a blueprint is, and how to add one
- [git-workflow.md](./git-workflow.md) — the branch model and why not the others
- [security-baseline.md](./security-baseline.md) — the minimum security posture
- [ai-workspace-layer.md](./ai-workspace-layer.md) — what `.ai/` records, and
  what git already records
