# AI Project Standard

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fai-standard.rubennati.at&up_message=live&down_message=down&label=site)](https://ai-standard.rubennati.at)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml)
[![Pages](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rubennati/ai-project-standard/badge)](https://scorecard.dev/viewer/?uri=github.com/rubennati/ai-project-standard)
![Status](https://img.shields.io/badge/status-early%20draft-orange)

> Early draft: this repository is a work in progress and will be refined through maintainer review.

AI Project Standard is for developers bringing an AI agent into their work.

> **Where this is going:** a developer brings an AI agent into their project and
> can still answer, months later — what changed, why, on whose decision, and what
> was checked — without having had to invent the practice themselves.

Many repositories bolt on ad hoc prompts and leave the structure, governance and
continuity rules missing. This one hands over the missing part as **blueprints**:
files you copy, with the decisions already made and the reasons stated.

**[docs/purpose.md](docs/purpose.md) is the top of the hierarchy** — the
destination, the three surfaces, and how information flows. Where any other file
disagrees with it, that file is out of date.

## Blueprints

| Blueprint | For |
|---|---|
| [`open-source`](blueprints/open-source/) | Starting a public repository: governance, contribution rules, CI that blocks a merge. No AI in it |
| [`ai-assisted-development`](blueprints/ai-assisted-development/) | Bringing an agent into a repository you already have: the frame it operates inside, plus an initialisation interview |

```bash
npx degit rubennati/ai-project-standard/blueprints/<id>/files <target>
```

Take a blueprint — do not fork. A fork hands over this project's changelog,
`.ai/` state, website and research. See [docs/adoption.md](docs/adoption.md).

## The website

<https://ai-standard.rubennati.at> is **broader** than this repository and sits
logically above it: it explains data flows, law and secure setup for anyone
affected by AI at work, not only developers. Information flows repository →
website; verified sources may come back down as input, never as authority.

## Website

The public site lives at <https://ai-standard.rubennati.at> (from v0.2.0). It carries use-case walk-throughs, deep guides, and the blog. The site source is in [site/](site/) and is built and deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

**Maintainer setup (one-time):** Settings → Pages → Source: "GitHub Actions". The custom domain is pinned via [`site/public/CNAME`](site/public/CNAME) so each deploy preserves it.

## Repository structure

- `.github/` — platform templates, workflows, automation
- `docs/` — strict reader documentation
- `.ai/` — AI operational workspace (state, routing, decisions)
- `blueprints/` — material to copy into your own project; see [`docs/blueprints.md`](docs/blueprints.md)
- `research/` — material being verified, on its way to the site or to `docs/`. Nothing in it is published or normative; see [`research/README.md`](research/README.md)
- Root files — governance, contribution policy, security, support

Everything in this repository is written in English. The website's translated
pages are the only exception — see [`docs/language-style.md`](docs/language-style.md).

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

## Licensing

This repository — the code and the documentation in it, including everything under `docs/` — is under the [MIT licence](LICENSE).

Everything under `blueprints/` is [MIT-0](blueprints/LICENSE) — MIT without the attribution requirement, so a copied template file carries no notice about this repository into yours.

The texts written for the website at <https://ai-standard.rubennati.at>, which live in `site/`, are under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse them, commercially included, as long as you credit the source. Pages the site renders from `docs/` stay MIT, since that is where the text lives.
