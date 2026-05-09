# AI Project Standard

![Draft](https://img.shields.io/badge/status-early%20draft-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![CI](https://img.shields.io/badge/ci-placeholder-lightgrey)

AI Project Standard is a practical repository standard for long-term human and AI collaboration.
It defines project structure, governance files, workflow rules, and an AI workspace for durable operational context.
This is not application code and not a prompt collection; it is a maintainable collaboration baseline.

> Early draft: this repository is a work in progress and is being refined through maintainer review.

## Why this exists

Many repositories have useful prompts but weak process structure. This project provides a stable baseline for reviewable, auditable, and maintainable collaboration.

## Who this is for

- Maintainers of open-source or internal engineering projects
- Teams introducing AI agents into daily workflows
- Organizations that require traceability and human oversight

## What this is / What this is not

### What this is
- A project structure and collaboration standard
- A repository baseline with governance, workflows, and review controls
- A shared model for AI task routing, state tracking, and decisions

### What this is not
- Not an application starter with business logic
- Not a prompt dump without process controls
- Not a replacement for human accountability

## Repository contents

- Root governance files: contribution, security, conduct, changelog, roadmap
- `.github/`: issue templates, pull request template, and CI workflow
- `docs/`: human-facing standards and workflows
- `.ai/`: AI workspace for routing, state, decisions, and quality loops

## AI workspace layer

The `.ai/` directory stores operational context used during AI-assisted execution. It preserves continuity across sessions while keeping project-facing documentation separate.

See `docs/ai-workspace-layer.md` for details.

## Git workflow

This repository uses GitHub Flow / trunk-based development:
- `main` is stable and protected
- work happens on short-lived branches (`feature/*`, `fix/*`, `docs/*`, `refactor/*`, `experiment/*`)
- pull requests are required before merge

See `docs/git-workflow.md` and `docs/branch-protection.md`.

## Quick start

1. Create a short-lived branch from `main`.
2. Read `CONTRIBUTING.md`, `AGENTS.md`, and `.ai/index.md`.
3. For AI-assisted work, load `.ai/state.md` and `.ai/routing.md`.
4. Make focused changes and open a pull request.

## Project structure

- `.github/` - platform templates and automation
- `docs/` - practical standards and workflows
- `.ai/` - AI operational workspace
- root files - governance and contribution policy

## Roadmap

Current priorities are documented in `ROADMAP.md`.

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.
