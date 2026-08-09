# Open source baseline

The governance, contribution and CI files a public repository needs. No AI
files, no application code, and no licence chosen for you.

**Status: draft.** The files are the ones this repository runs on, adapted; the
blueprint itself has not yet been copied into a fresh project and worked.

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
4. **Turn on the repository settings** the files assume: private vulnerability
   reporting, Dependabot alerts, secret scanning with push protection, and
   branch protection on `main`.
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
| `.github/workflows/ci.yml` | Structure, markdown lint, link check — nothing language-specific |
| `.gitignore` | OS, editor and environment noise |

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
