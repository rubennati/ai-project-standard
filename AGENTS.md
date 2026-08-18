# Agent Instructions

Before starting work, always read:

- `.ai/project-brief.md` — what the project is for, and the test for whether the
  work in front of you still serves it
- `.ai/state.md` — the current objective and constraints
- `.ai/routing.md` — which further files this kind of task needs

Reading is cheap and lands the session in the right frame. Writing is not: see
`docs/ai-workspace-layer.md` for what `.ai/` records and what git already
records.

## Core rules

- `docs/purpose.md` is the top of the hierarchy: the destination, the three surfaces, how information flows. Read it before proposing anything structural; where another file disagrees with it, that file is out of date
- Judge work against that destination, not against the task alone. If it does not move someone closer to it, say so rather than finishing it
- Use the vocabulary the project has already defined. `site/src/data/terms.ts` holds 80 researched terms — check it before inventing a name. CI enforces the ones that have drifted before
- Write everything in English — see `docs/language-style.md`. The site's translated pages are the only exception
- Do not perform unrelated refactors. Report what you notice outside the current scope and leave it
- Request human approval before major architectural or dependency changes
- Update `.ai/state.md` when the objective, a constraint or a decision changes — not to mirror what a branch or pull request already records
- Update `.ai/decisions.md` after architectural decisions, with the reasoning and the date

## Workflow

For any non-trivial task, follow this loop. Trivial changes (typos, one-line fixes, additive doc tweaks) may skip the Plan step but still go through a PR.

1. **Understand** — read the relevant `.ai/` files (`state.md`, `routing.md`, applicable `domains/`) and any code or docs the task touches. State assumptions explicitly.
2. **Plan** — state the plan first (in chat, the draft PR description, or `.ai/state.md`) before editing. For multi-file or structurally non-obvious work, confirm scope with a human before implementing.
3. **Implement** — focused changes on a short-lived branch. One concern per branch. Commit as you go; long work needs checkpoints, not permission. Open a draft PR for handoff, interruption or early review.
4. **Verify** — run the project's standard quality commands locally (see below). If a command is missing for a check you'd want, raise it rather than silently skipping.
5. **Review** — open a PR with a clear summary. CI is the first gate, AI reviews are advisory, a human merges.

## Standard quality commands

Projects adopting this standard SHOULD expose these commands at the project root (via `package.json` scripts, a `Makefile`, `Taskfile`, or equivalent). Agents and humans run the same commands:

- `lint` — static checks (markdownlint, ESLint, ruff, etc.)
- `test` — automated test suite
- `build` — produces deployable artifacts
- `typecheck` — type checking where applicable

This repository is documentation-first; its CI exercises `lint`-equivalents (markdownlint, link check, self-conformance, language check) and `build` for the Astro site under `site/`. Use those as the reference shape; add the missing commands when application code lands.

## Approval

"Human approval" means a human merging the pull request. Concretely:

- Agents may commit and push to non-`main` branches (e.g. `feature/*`, `fix/*`).
- Agents must not merge to `main`, force-push, or modify branch protection.
- Agents must not push directly to `main` even where branch protection is not yet configured.

If a change is larger than the current task's scope (architecture, dependencies, governance), pause and ask before committing.

## What you decide

Inside an agreed scope, the method is yours — approach, structure, sequencing,
tests. Choose, proceed, and show the reasoning in the pull request.

An explicit instruction or a confirmed plan is the human decision. Reaching the
point where it takes effect is not a reason to ask for it again, and a
method-level discovery does not reopen a settled scope: correct course and say
what changed.

The default is to proceed — inside the agreed scope, nothing below applies, and
declining the merge would undo it. Approving a design does not authorise acting
on something real: a live credential, real personal data, or a live system.

## Change scope

Some changes are visible on every page, or change something a reader has already
learned. Those need a human decision first, even when the task seems to imply
them.

**Ask before changing:**

- Site navigation — the header, the footer groups, or what belongs in either
- Information architecture — adding, removing or renaming a top-level section
- Public URLs, redirects included
- The taxonomy (pillars, profiles, layers, adoption paths) anywhere it is stated
- Anything on every page: the layout shell, the wordmark, the language switch
- Moving files that something else reads — `docs/**` is rendered by the site

**Proceed without asking:**

- Content inside an existing pattern: a new article in an existing section, using
  the existing data model and route conventions
- The smallest fix to something already reported as broken
- What the repository's own documentation already prescribes

A reported defect authorises the diagnosis and a proposal, not a redesign. If the
smallest fix is a redesign, say so and wait.

The website has a working state. Treat changes to it as additive by default;
anything that reshapes what already exists gets proposed before it is built.

## Operating principles

- Keep changes focused and reviewable
- Preserve documentation quality for both humans and AI systems
- Prefer explicit trade-offs over implicit assumptions

## Tool-specific pointer files

This file is the source of truth for all AI tools. Tool-specific files exist only because each tool reads its own path:

- `CLAUDE.md` — Claude Code
- `.github/copilot-instructions.md` — GitHub Copilot
- `.cursor/rules/00-project.mdc` — Cursor

Pointer files MUST stay short (target: ≤20 lines) and MUST defer to this file for any rule that is not specific to the tool. Do not duplicate rules across pointer files; add them here instead.

See `docs/ai-tools.md` for the full list of supported tools and how to add a new one.

## Overrides and local files

Layer overrides on top of this file rather than restating its rules.

- `AGENTS.override.md` (optional, repo root) — fork- or organisation-specific rules that should NOT propagate upstream. Treated as additive to `AGENTS.md`. Useful for private forks of this standard.
- Path-specific instructions for GitHub Copilot live in `.github/instructions/**/*.instructions.md`. Only put what differs from this file there.
- `CLAUDE.local.md` and `.claude/settings.local.json` — personal, gitignored overrides for an individual contributor. Never check these in.
- `.claude/settings.json` — team-versioned Claude Code settings (allowed). Keep it small.

Never duplicate rules across these files. Overrides should layer on top, not restate.
