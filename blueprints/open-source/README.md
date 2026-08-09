# Open source baseline

The governance, contribution and CI files a public repository needs. No AI
files, no application code, and no licence chosen for you.

**Status: draft.** Run against a fresh copy on 2026-08-09 — see *Verified*
below. It stays `draft` until it has been used to start a real project.

## Take it

```bash
npx degit rubennati/ai-project-standard/blueprints/open-source/files my-project
```

Without `npx`:

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/rubennati/ai-project-standard
cd ai-project-standard && git sparse-checkout set blueprints/open-source/files
```

## Then do these five things

1. **Add a licence.** Nothing here chooses one, because that choice is yours and
   it is the one that decides whether this is open source at all. The CI
   workflow fails until a `LICENSE` file exists.
2. **Replace the placeholders:** `{{PROJECT_NAME}}`, `{{OWNER}}`, `{{REPO}}`,
   `{{CONTACT_EMAIL}}`. They appear in `README.md`, `CONTRIBUTING.md`,
   `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md` and `.github/CODEOWNERS`.
3. **Delete the first line of each file** — the comment marking it as blueprint
   payload. A bootstrap script will do this once the blueprint has been used a
   few times.
4. **Work through [`docs/repository-settings.md`](files/docs/repository-settings.md).**
   The CI assumes those switches are on, and no file in a repository can turn
   them on for you.
5. **Write the README.** The skeleton is a shape, not content.

## What you get

| File | Why it is here |
|---|---|
| `README.md` | Skeleton with the sections a reader looks for first |
| `CONTRIBUTING.md` | Branch and pull-request process, plus a DCO sign-off as the inbound-rights mechanism |
| `CODE_OF_CONDUCT.md` | Contributor Covenant 2.1, with a reporting address to fill in |
| `SECURITY.md` | Private reporting, not a public issue |
| `SUPPORT.md` | The Issues / Discussions split, before the tracker becomes a forum |
| `CHANGELOG.md` | Keep a Changelog skeleton |
| `.github/ISSUE_TEMPLATE/`, `pull_request_template.md` | Structured intake |
| `.github/CODEOWNERS` | Review routing, worth having with one maintainer |
| `.github/dependabot.yml` | Keeps the SHA-pinned actions current |
| `.github/workflows/ci.yml` | Six gates that block a merge, all language-agnostic |
| `.markdownlint-cli2.jsonc` | Lint rules, with a reason beside every relaxed one |
| `.editorconfig` | Settles whitespace before it reaches review |
| `.gitignore` | OS, editor and environment noise |
| `docs/repository-settings.md` | The settings CI assumes, in the order that costs least |
| `docs/git-workflow.md` | The branch model, and why not Git Flow or environment branches |

## Verified

Copied into an empty directory on **2026-08-09**, git initialised, and every
gate from its own `ci.yml` that can run locally executed.

| Gate | Result |
|---|---|
| Required files exist | pass |
| A licence is present | **fails, by design** — you have to choose one |
| No committed binaries | pass |
| Actions pinned to a full SHA | pass, 7 references |
| Markdown lints | pass |
| Commits signed off | rejects an unsigned commit, accepts a signed one |

One defect found and fixed in the process: the payload shipped no markdownlint
configuration, so its own CI would have failed it on the default 80-column rule.
It now ships `.markdownlint-cli2.jsonc`, with a reason next to every relaxed
rule.

Not covered: the link check, because the payload carries placeholder URLs by
design; and the GitHub settings in `docs/repository-settings.md`, which no local
run can exercise.

## Why it stops here

Governance is sized to the project. Foundation-style files — `GOVERNANCE.md`, a
steering committee, a release runbook — are not in this payload because copying
them into a two-person project is how repositories end up describing a structure
that does not exist.

Longer reasoning, licence comparison and the maturity questions live on the
website: <https://ai-standard.rubennati.at/open-source>

## Licence

The files under `files/` are MIT-0 — copy them without carrying an attribution
notice into your project. See [`../LICENSE`](../LICENSE).
