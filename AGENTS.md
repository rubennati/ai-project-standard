# Agent Instructions

Before starting work, always read:

- `.ai/index.md`
- `.ai/state.md`
- `.ai/routing.md`

## Core rules

- Do not perform unrelated refactors
- Request human approval before major architectural or dependency changes
- Update `.ai/state.md` after meaningful changes
- Update `.ai/decisions.md` after architectural decisions

## Workflow

For any non-trivial task, follow this loop. Trivial changes (typos, one-line fixes, additive doc tweaks) may skip the Plan step but still go through a PR.

1. **Understand** — read the relevant `.ai/` files (`state.md`, `routing.md`, applicable `domains/`) and any code or docs the task touches. State assumptions explicitly.
2. **Plan** — state the plan first (in chat, the draft PR description, or `.ai/state.md`) before editing. For multi-file or structurally non-obvious work, confirm scope with a human before implementing.
3. **Implement** — focused changes on a short-lived branch. One concern per branch.
4. **Verify** — run the project's standard quality commands locally (see below). If a command is missing for a check you'd want, raise it rather than silently skipping.
5. **Review** — open a PR with a clear summary. CI is the first gate, AI reviews are advisory, a human merges.

## Standard quality commands

Projects adopting this standard SHOULD expose these commands at the project root (via `package.json` scripts, a `Makefile`, `Taskfile`, or equivalent). Agents and humans run the same commands:

- `lint` — static checks (markdownlint, ESLint, ruff, etc.)
- `test` — automated test suite
- `build` — produces deployable artifacts
- `typecheck` — type checking where applicable

This repository itself is documentation-first; its CI exercises `lint`-equivalents (markdownlint, link-check, profile-completeness) and `build` for the Astro site under `site/`. Use those as the reference shape; add the missing commands when application code lands.

## Approval

"Human approval" means a human merging the pull request. Concretely:

- Agents may commit and push to non-`main` branches (e.g. `feature/*`, `fix/*`).
- Agents must not merge to `main`, force-push, or modify branch protection.
- Agents must not push directly to `main` even where branch protection is not yet configured.

If a change is larger than the current task's scope (architecture, dependencies, governance), pause and ask before committing.

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
