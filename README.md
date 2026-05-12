# AI Project Standard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml)
[![Pages](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rubennati/ai-project-standard/badge)](https://scorecard.dev/viewer/?uri=github.com/rubennati/ai-project-standard)
![Status](https://img.shields.io/badge/status-early%20draft-orange)

> Early draft: this repository is a work in progress and will be refined through maintainer review.

AI Project Standard is an open-source repository template for long-term human and AI collaboration.

This repository is both a reusable template and a reference implementation for adopting Open Source and/or Human-AI Collaboration standards.

## Why this exists

Many repositories have prompts but lack durable structure, review rules, and continuity practices. This project provides a practical baseline that combines:

- professional open-source repository standards
- a dedicated AI workspace layer for operational context

## Profiles

The standard is composed of two independent baselines, available in three adoption profiles:

- **OSS-only** — open-source governance without AI files.
- **AI-only** — Human-AI Collaboration files for an existing repository.
- **Combined** — both baselines, as in this repository.

See [docs/standard.md](docs/standard.md) for the conceptual definition, [docs/profiles.md](docs/profiles.md) for exact file lists, and [docs/adoption.md](docs/adoption.md) for adoption steps.

This repository can also be used as a GitHub template (enabled from v0.2.0).

## Website

The public site lives at <https://ai-standard.rubennati.at> (from v0.2.0). It carries use-case walk-throughs, deep guides, and the blog. The site source is in [site/](site/) and is built and deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

**Maintainer setup (one-time):** Settings → Pages → Source: "GitHub Actions". The custom domain is pinned via [`site/public/CNAME`](site/public/CNAME) so each deploy preserves it.

## Who this is for

- Maintainers of open-source or internal engineering projects
- Teams introducing AI agents into daily workflows
- Organizations that require traceability and human oversight

## What this is / What this is not

### What this is

- A project structure and collaboration standard
- A repository baseline with governance, workflows, and review controls
- A shared workspace model for AI task routing, state, and decisions

### What this is not

- Not an application starter with business logic
- Not a prompt dump without process controls
- Not a replacement for human accountability

## Repository contents

- Root governance files: contribution, security, conduct, changelog, roadmap
- `.github/`: issue templates, pull request template, and CI workflow
- `docs/`: project workflow and policy documentation
- `.ai/`: AI workspace for routing, state, decisions, and quality loops

## AI workspace layer

The `.ai/` directory stores operational context used during AI-assisted execution. It helps preserve continuity across sessions while keeping project-facing documentation separate.

See `docs/ai-workspace-layer.md` for model details.

## Git workflow

This repository uses GitHub Flow / trunk-based development:

- `main` is stable and protected
- work happens on short-lived branches (`feature/*`, `fix/*`, `docs/*`, `refactor/*`, `experiment/*`)
- pull requests are required before merge

See `docs/git-workflow.md` and `docs/branch-protection.md`.

For practical AI-assisted branch and PR workflows, see `docs/practical-ai-collaboration.md`.

## Quick start

1. Create a short-lived branch from `main`.
2. Read `CONTRIBUTING.md`, `AGENTS.md`, and `.ai/index.md`.
3. For AI-assisted work, load `.ai/state.md` and `.ai/routing.md`.
4. Make focused changes and open a pull request.

## Project structure

- `.github/` - platform templates and automation
- `docs/` - human-facing standards and workflows
- `.ai/` - AI operational workspace
- root files - governance and contribution policy

## Roadmap

Current priorities are documented in `ROADMAP.md`.

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.

For questions or open-ended discussion, use [GitHub Discussions](https://github.com/rubennati/ai-project-standard/discussions). For bug reports and concrete feature requests, open an Issue. See [SUPPORT.md](SUPPORT.md) for the split.

## Collaboration philosophy

AI-native collaboration requires explicit boundaries, decision records, and routine human review. The structure should keep work understandable and auditable over time.
