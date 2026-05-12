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
