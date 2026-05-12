# AI Project Standard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml)
[![Pages](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rubennati/ai-project-standard/badge)](https://scorecard.dev/viewer/?uri=github.com/rubennati/ai-project-standard)
![Status](https://img.shields.io/badge/status-early%20draft-orange)

> Early draft: this repository is a work in progress and will be refined through maintainer review.

AI Project Standard is a starting baseline for open-source projects that use AI.

**Four pillars, one repository:** human-AI collaboration, open-source operations, engineering operations, knowledge and documentation. Adoptable as the full template, in three profiles (Open Source, Human-AI Collaboration, Combined), or in pieces — covering four common starting points, from a new project that uses AI from day one to AI adoption in an existing repository.

The repository is the operational layer — workflows, AI state, governance, templates, automation. The reasoning, comparisons, use-case walk-throughs, and research live on the knowledge layer at <https://ai-standard.rubennati.at>.

## Profiles and paths

| Profile | When to pick it |
|---|---|
| **Open Source** | A clean open-source baseline without AI files. |
| **Human-AI Collaboration** | Drop AI conventions into an existing repository. |
| **Combined** | Both, as in this repository. |

Four common adoption paths — a 2×2 grid of *new vs. existing* × *with vs. without AI*:

1. New project, with AI from day one.
2. AI into an existing repository (brownfield).
3. New open-source project, no AI.
4. Professionalising an existing open-source project.

See [docs/standard.md](docs/standard.md) for the full inventory, [docs/profiles.md](docs/profiles.md) for exact file lists, and [docs/adoption.md](docs/adoption.md) for adoption steps. Available as a GitHub template from v0.2.0.

## Website

The public site lives at <https://ai-standard.rubennati.at> (from v0.2.0). It carries use-case walk-throughs, deep guides, and the blog. The site source is in [site/](site/) and is built and deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

**Maintainer setup (one-time):** Settings → Pages → Source: "GitHub Actions". The custom domain is pinned via [`site/public/CNAME`](site/public/CNAME) so each deploy preserves it.

## Repository structure

- `.github/` — platform templates, workflows, automation
- `docs/` — strict reader documentation
- `.ai/` — AI operational workspace (state, routing, decisions)
- Root files — governance, contribution policy, security, support

The `.ai/` directory is **operational state**, not documentation. It holds the AI's execution context, task tracking, and continuity layer. See [`docs/ai-workspace-layer.md`](docs/ai-workspace-layer.md) for the model.

## Quick start

1. Create a short-lived branch from `main`.
2. Read `CONTRIBUTING.md`, `AGENTS.md`, and `.ai/index.md`.
3. For AI-assisted work, load `.ai/state.md` and `.ai/routing.md`.
4. Make focused changes and open a pull request.

See [`docs/git-workflow.md`](docs/git-workflow.md), [`docs/branch-protection.md`](docs/branch-protection.md), and [`docs/practical-ai-collaboration.md`](docs/practical-ai-collaboration.md) for the workflow detail.

## Roadmap

Current priorities are documented in `ROADMAP.md`.

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.

## Collaboration philosophy

AI-native collaboration requires explicit boundaries, decision records, and routine human review. The structure should keep work understandable and auditable over time.
