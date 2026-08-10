# AI Project Standard

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fai-standard.rubennati.at&up_message=live&down_message=down&label=site)](https://ai-standard.rubennati.at)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/ci.yml)
[![Pages](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml/badge.svg)](https://github.com/rubennati/ai-project-standard/actions/workflows/pages.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rubennati/ai-project-standard/badge)](https://scorecard.dev/viewer/?uri=github.com/rubennati/ai-project-standard)
![Status](https://img.shields.io/badge/status-early%20draft-orange)

> Early draft: this repository is a work in progress and will be refined through maintainer review.

AI Project Standard is the production, source and artifact repository behind
[AI Standard](https://ai-standard.rubennati.at), an independent practical
website for using AI in real work.

> **Where this is going:** a person uses AI in real work and can understand what
> it makes possible, choose an appropriate form of collaboration, set boundaries
> that hold, and later explain what the system could reach, what it did, why, on
> whose decision and what was checked.

AI now answers in chats, works inside files, calls tools and acts across systems.
The website explains the possibilities, collaboration models, reach and
controls as one reader journey. This repository holds the evidence, technical
sources, copyable **blueprints** and checks behind that product.

**[docs/purpose.md](docs/purpose.md) is the top of the hierarchy** — the
destination and the relationship between the public product and the system
behind it. The [Website Product Brief](docs/website-product-brief.md) states the
mission, reader outcomes and content admission test. Where any other file
disagrees with `purpose.md`, that file is out of date.

## Blueprints

One per **trigger** — something that has already happened to you — not one per
technology and not one per team size.

| Blueprint | For | Status |
|---|---|---|
| [`open-source`](blueprints/open-source/) | Starting a public repository: governance, contribution rules, CI that blocks a merge. No AI in it | draft |
| [`ai-assisted-development`](blueprints/ai-assisted-development/) | Bringing an agent into a repository you already have: the frame it operates inside, plus an initialisation interview | draft |
| [`agent-maintained-knowledge-base`](blueprints/agent-maintained-knowledge-base/) | A second person has to be able to trust what is written down, and an agent is writing some of it | planned |
| [`agent-tool-access`](blueprints/agent-tool-access/) | More than one AI client needs the same tools, and the permissions are scattered across the integrations | planned |

`planned` means the scope is decided and nothing is built: no payload, and the
open questions written down. Scoping is the harder half.

```bash
npx degit rubennati/ai-project-standard/blueprints/<id>/files <target>
```

## Concepts

Technical reference for building something — not a rule, and not a file you
copy. `docs/` holds the rule stated once; `concepts/` holds the architecture and
the decision points, at whatever length the architecture needs.

| Concept | The decision it helps you make |
|---|---|
| [`retrieval-architecture`](concepts/retrieval-architecture.md) | More material than anyone will read, and questions whose answers are already written down. What to build — and what to build instead |

See [concepts/README.md](concepts/README.md) for the rest, including the ones
named but not written.

## Taking a blueprint

Take a blueprint — do not fork. A fork hands over this project's changelog,
`.ai/` state, website and research. See [docs/adoption.md](docs/adoption.md).

## The website

<https://ai-standard.rubennati.at> is the public product. It stands on its own
and is not split into a knowledge base and a project-standard area. It shows
what people can achieve with AI, what useful collaboration looks like, what the
system can reach, which decisions follow and how the result stays reviewable —
from the first prompt to an acting agent.

Repository folders do not become website sections. Rules, concepts, research
and blueprints can all contribute to one public reader path, with the canonical
source linked when someone needs to inspect, copy or contribute. Every
substantive claim keeps its evidence level and the date it was checked where the
level requires one.

The source is in [site/](site/), built and deployed by
[`pages.yml`](.github/workflows/pages.yml). Maintainer setup, once: Settings →
Pages → Source "GitHub Actions"; the custom domain is pinned by
[`site/public/CNAME`](site/public/CNAME) so each deploy preserves it.

## What is in here

| Path | What it is |
|---|---|
| `blueprints/` | The artifacts. Files you copy, MIT-0 |
| `docs/` | The rules, stated once. Start at [purpose.md](docs/purpose.md) |
| `.ai/` | This project's operational workspace — the working model a blueprint ships a copy of |
| `research/` | Material being verified. Not published, not normative |
| `site/` | The website source |
| `.github/` | Workflows and the checks that gate a merge |
| Root files | This project's own governance — its instance, not the template |

Everything here is written in English; the website's translated pages are the
only exception ([language-style.md](docs/language-style.md)).

## Working in this repository

For contributing *to this project* — not for adopting it, which is
[getting-started.md](docs/getting-started.md).

1. Read [`AGENTS.md`](AGENTS.md) and [`.ai/project-brief.md`](.ai/project-brief.md).
2. Branch from `main`, one concern per branch.
3. Run the gates in [`.ai/quality-gates.md`](.ai/quality-gates.md) before opening
   a pull request. They are what CI runs.
4. Open a pull request explaining *why*; the diff shows *what*.

Navigation, public URLs, the project's vocabulary and anything on every page
need a human decision first — `AGENTS.md` → Change scope.

CI runs six checks, including **self-conformance**: it fails when this
repository breaks a rule it states, which has happened often enough to be worth
automating.

## Roadmap

Current priorities are in [`ROADMAP.md`](ROADMAP.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). Questions belong in
[Discussions](https://github.com/rubennati/ai-project-standard/discussions); bugs
and concrete requests in Issues — [SUPPORT.md](SUPPORT.md) has the split.

## Licensing

This repository — the code and the documentation in it, including everything under `docs/` — is under the [MIT licence](LICENSE).

Everything under `blueprints/` is [MIT-0](blueprints/LICENSE) — MIT without the attribution requirement, so a copied template file carries no notice about this repository into yours.

The texts written for the website at <https://ai-standard.rubennati.at>, which live in `site/`, are under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse them, commercially included, as long as you credit the source. Pages the site renders from `docs/` stay MIT, since that is where the text lives.
