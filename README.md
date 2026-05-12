# AI Project Standard

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fai-standard.rubennati.at&up_message=live&down_message=down&label=site)](https://ai-standard.rubennati.at)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml)
[![Pages](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rubennati/ai-project-standard/badge)](https://scorecard.dev/viewer/?uri=github.com/rubennati/ai-project-standard)
![Status](https://img.shields.io/badge/status-early%20draft-orange)

> Early draft: this repository is a work in progress and will be refined through maintainer review.

AI Project Standard is a starting baseline for open-source projects that use AI.

**Four pillars, one repository:** human-AI collaboration, open-source operations, software engineering, knowledge and documentation. Adoptable as the full template, in three profiles (Open Source, Human-AI Collaboration, Combined), or in pieces — covering five common starting points from greenfield AI-native projects to AI adoption in existing repositories.

The repository is the operational layer — workflows, AI state, governance, templates, automation. The reasoning, comparisons, use-case walk-throughs, and research live on the knowledge layer at <https://ai-standard.rubennati.at>.

## Profiles and paths

| Profile | When to pick it |
|---|---|
| **Open Source** | A clean open-source baseline without AI files. |
| **Human-AI Collaboration** | Drop AI conventions into an existing repository. |
| **Combined** | Both, as in this repository. |

Common adoption paths the standard is designed for:

1. Greenfield AI-native project.
2. AI into an existing repository (brownfield).
3. Clean open-source start.
4. Professionalising an existing open-source project.
5. AI and open source from scratch.

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

For questions or open-ended discussion, use [GitHub Discussions](https://github.com/rubennati/ai-project-standard/discussions). For bug reports and concrete feature requests, open an Issue. See [SUPPORT.md](SUPPORT.md) for the split.

## Collaboration philosophy

AI-native collaboration requires explicit boundaries, decision records, and routine human review. The structure should keep work understandable and auditable over time.
