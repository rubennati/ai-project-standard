# AI Project Standard

AI Project Standard is an open-source template for teams that want reliable long-term collaboration between humans and AI agents.

## Why this exists

Many repositories include ad hoc prompts but lack stable project structure, governance, and continuity rules. This project provides a practical baseline that combines:
- modern open-source repository standards
- a dedicated AI workspace layer for shared operational context

The goal is repeatable, maintainable collaboration over time, not one-off automation.

## Who this is for

- Maintainers of open-source or internal engineering projects
- Teams introducing AI agents into daily development workflows
- Organizations that need auditability, continuity, and human oversight

## What this repository contains

- Core open-source project documents (`README`, `CONTRIBUTING`, `SECURITY`, issue templates, CI)
- A `docs/` section describing standards, workflows, and collaboration practices
- A separated `.ai/` workspace for agent routing, project memory, state, and quality loops

## AI workspace layer

The `.ai/` directory is the operational layer for AI-assisted work. It stores task routing, project state, decisions, quality gates, and progress tracking so work can continue across sessions and tools.

This repository is not only a prompt collection. It is a project structure and collaboration standard.

## Git workflow

This project uses a GitHub Flow / trunk-based model:
- `main` stays stable and protected
- work happens on short-lived branches (`feature/*`, `fix/*`, `docs/*`, `refactor/*`, `experiment/*`)
- pull requests are required before merge

See `docs/git-workflow.md` for details.

## Quick start

1. Create a branch from `main` using the branch naming conventions.
2. Read `CONTRIBUTING.md`, `AGENTS.md`, and `.ai/index.md`.
3. For AI-assisted work, initialize context from `.ai/state.md` and `.ai/routing.md`.
4. Make focused changes and open a pull request.

## Project structure overview

- `.github/` - issue templates, automation, and platform configuration
- `docs/` - human-facing project standards and guides
- `.ai/` - AI workspace layer (routing, memory, loops, state, decisions)
- root files - governance and contribution policies

## Roadmap

The near-term roadmap is documented in `ROADMAP.md` and focuses on:
- maturing templates and checklists
- improving quality gates
- validating collaboration workflows in real projects

## Contributing

Contributions are welcome. Please review `CONTRIBUTING.md` for workflow, scope, and review expectations.

## Philosophy of AI-native collaboration

AI-native collaboration requires clear boundaries, explicit decision records, and regular human review. The repository structure should make context durable and work reproducible across people and tools.
