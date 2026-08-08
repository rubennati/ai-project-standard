# Open source projects: definition, licences and practice

> **Unverified.** Do not cite or publish from this file. See
> [STATUS.md](./STATUS.md) for what has been checked and what is known to be
> wrong.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims and structure unchanged |

Open source means more than publicly accessible code — it means defined
freedoms and obligations. Open-source software is software whose source code
has been published and which can, in principle, be used, inspected, modified and
processed by anyone. The licence is what decides it: it has to allow recipients
to redistribute, modify and copy the code freely.

The Open Source Initiative (OSI) sets out ten criteria for this — among them
free redistribution without fees, delivery of the source code, permission to
create derived works, and no discrimination against persons or fields of use. A
licence that forbids commercial use is **not** open source; NC licences are
source-available only.

A project on GitHub only counts as genuinely open source if it carries an
OSI-approved licence such as MIT, Apache or GPL. Without a licence the code
remains under full copyright and others may not legally use it.

## Licences and licence types

Open-source licences govern usage rights. **Copyleft** licences require modified
versions to stay under the same licence; **permissive** licences impose no such
obligation.

- **Strong copyleft** — for example the GNU GPL. Modified code may only be
  redistributed under the GPL itself. The GPL is the best-known open-source
  licence at roughly 60% adoption, and covers Linux among others.
- **Limited copyleft** — for example the MPL (Mozilla Public License) or CDDL.
  Modified source has to stay under the same licence, but combination with
  proprietary code is allowed.
- **Permissive** — for example MIT, BSD, Apache 2.0. Maximum freedom: only the
  copyright and licence notice has to be preserved, and modifications may be
  redistributed under a different licence, proprietary ones included.

Platforms such as GitHub stress that a project only becomes open source **with a
licence**. Without one, copyright applies in full and nobody may legally use or
modify the code.

Put a licence file (`LICENSE` or `LICENSE.md`) in the repository root. GitHub
offers help with the choice (<https://choosealicense.com>), and the texts of
OSI-accredited licences are freely available.

## Repository structure and recommended files

A clear directory and file layout makes a project easier to enter. Common
practice includes:

- **Source directory** — for example `src/`. Tests go in `test/` or `tests/`.
- **Documentation** — a `docs/` or `doc/` directory for manuals and reference
  material. A `README.md` in the root describes purpose and usage.
- **Helper scripts and resources** — `tools/` for automation and build scripts,
  `examples/` or `samples/` for sample code, `res/` for images and static
  assets.
- **Git-specific files** — `.gitignore`, `.gitattributes`, and where relevant
  `.mailmap` or `.gitmodules` for submodules.

Alongside these, an open-source project should carry a set of standard
documentation files. The recommended minimum:

- **`README.md`** — a short introduction: what the project does, why it is
  useful, how to install and use it.
- **`LICENSE`** — the licence text, so the terms are immediately visible.
- **`CONTRIBUTING.md`** — guidance for contributors: code style, pull-request
  process, how issues are used.
- **`CODE_OF_CONDUCT.md`** — a code of conduct for the community.
- **`CHANGELOG.md`** — version history, for example in the Keep a Changelog
  format, so users can see what changed.
- **`SECURITY.md`** — how to report security problems.
- **Optional** — `CODEOWNERS` for review routing, and `AUTHORS` or
  `CONTRIBUTORS` listing maintainers and contributors.

The Johns Hopkins OSPO puts the minimum for research software at a licence, a
README, a contributing file, and version information such as DOIs or citation
metadata. GitHub's own "Community Standards" list the same core files —
README, licence, code of conduct, contributing guide, security policy — each
with its purpose. Together they communicate what the project expects.

## Governance, participation and ownership

Open-source projects are organised in very different ways.

Small projects are often informal: whoever does the work has a say in practice,
a "do-ocracy". A project frequently starts with one or a few founders who
decide everything, sometimes described as a benevolent dictator. As projects
grow, some set up formal bodies — a technical steering committee or a board,
elected or self-appointed. Some projects are company-controlled: the code is
released, but external contributions are barely accepted, or only under a
contributor licence agreement. In established projects a non-profit body
(a foundation or association) often takes over administration, which ensures
that no single person controls the infrastructure or the trademark.

Legally, the software belongs to its author. Through the chosen licence, that
author permits others to use, modify and distribute it. Each contributor
normally retains copyright in their own code. Many large projects have
contributors assign their rights — or grant a licence — to a central entity
such as a foundation, to avoid later uncertainty. Where code is written in the
course of employment, the employer may hold the copyright automatically. It is
therefore worth having clear open-source policies and, where appropriate,
contributor licence agreements, so the rights position stays settled.

In practice, contributors work through pull or merge requests. Issues are
discussed in public and often labelled, for instance "good first issue", to draw
newcomers in. Maintainers use `CONTRIBUTING.md` and issue templates so that
others know how to take part. At the code level, continuous integration —
tests and review — carries the quality load. A healthy open-source project needs
more than a licence and source code: it needs infrastructure (CI/CD, an issue
tracker), an active community, and sometimes funding.

## Project phases and maturity

Open-source projects generally grow through phases with different priorities.

**Phase 1.** A single developer or small team writes the code, adds light
documentation (a README, basic docs) and ships a first working version. The
setup stays plain: code and minimal documentation are enough — an elaborate
project website or extensive boards rarely pay off yet.

**Phase 2.** As the project becomes known, outsiders start reporting issues and
sending pull requests. Documentation expands (a wiki or website, a fuller
README) and the contribution process gets written down in `CONTRIBUTING.md`.
This is usually where a ticket system and possibly a project board for the
roadmap get set up, so work is organised transparently. Test and build
infrastructure such as CI/CD becomes important, as does code review by
experienced maintainers.

**Phase 3.** In a large, established project, many contributors and companies
take part. Non-profit governance starts to make sense: donating the project to a
foundation, or electing a steering committee. Formal processes appear — release
and security reviews, separate repositories for documentation and community
discussion. The aim is to give the community more ownership while preserving the
original intent. Work and code may be split across several repositories, for
example to separate fast-moving community projects from stable core ones.

Even very successful projects can stay small for a long time — not everyone
needs a hundred contributors. What matters is communicating clearly **whether
and how** you want participation, and adapting the infrastructure as the project
grows.

## Examples, templates and a checklist

Many communities publish templates and checklists for open-source repositories.
One example is the "Open Source Project Template" on GitHub, which ships all the
recommended files: `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`,
`CODE_OF_CONDUCT.md`, `SECURITY.md`, `GOVERNANCE.md` and `CODEOWNERS`.
Open-source programme offices at universities and large companies publish
guidance of their own — the Johns Hopkins OSPO and the GitHub Open Source
Guides make broadly similar recommendations.

**Minimum checklist for a new open-source repository:**

- Source directory (`src` or similar) plus unit tests (`test`/`tests`).
- `README.md` — what the project is, why, and how to install and use it.
- `LICENSE` — the full licence text, ideally OSI-accredited, in the root.
- `CONTRIBUTING.md` — contribution rules: workflow, code style, pull requests.
- `CODE_OF_CONDUCT.md` — a code of conduct for the community.
- `CHANGELOG.md` — releases and changes.
- `SECURITY.md` — a contact for security problems.
- `.gitignore`, `.gitattributes`, `.github/` — platform configuration: issue and
  pull-request templates, CI workflows, `CODEOWNERS`.

Cover all of these and the result matches what is generally considered the state
of the art for a well-set-up open-source project.

## Summary

An open-source project starts with a published source base **and** a suitable
open-source licence. It is the licence, the README and the surrounding files
that make it open source rather than merely public. The usual minimum is a
README, a licence, and clear contribution rules. Repository structure follows
common conventions — `src/`, `docs/`, tests, examples. As usage grows,
additional documentation, an issue tracker, release management and governance
follow.

One thing to keep in mind: once licence rights have been granted, they cannot
simply be withdrawn. Closing an open-source project down permanently is
practically impossible, because every published copy may continue to be
redistributed.

These findings form the core of a broader guide to open-source publishing. They
should be checked and applied when planning a project, so that it stays
sustainable, legally sound and welcoming to a community — from the first commit
to long-term operation.

## Sources

The original stated: official open-source definitions and licences, GitHub and
OSPO guides, specialist articles and community contributions. No individual
citations were included. See [STATUS.md](./STATUS.md).
