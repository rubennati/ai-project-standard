# Open source baseline

## What it solves

You are starting a public repository and every decision is open at once —
licence, contribution rules, what blocks a merge, which settings to switch on.
Most of those decisions have a defensible default that nobody writes down, so
each project rediscovers them, badly, under time pressure.

This makes the defaults, states why, and enforces the ones a machine can check.

## What you get

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
3. **Delete the payload banner** — the `<!-- blueprint payload: ... -->`
   comment. It is the first line in every file except the two issue templates,
   where it sits below the YAML front matter, so deleting line 1 there would
   remove the front matter and leave the banner. Search for the comment rather
   than counting lines:

   ```bash
   grep -rl 'blueprint payload' . | xargs sed -i '' '/blueprint payload/d'
   ```

   Replace the placeholders by name, not by pattern: `{{ }}` also appears in
   `.github/workflows/ci.yml` as GitHub Actions expressions, and a blanket
   substitution on `{{` breaks the workflow.
4. **Work through [`docs/repository-settings.md`](files/docs/repository-settings.md).**
   The CI assumes those switches are on, and no file in a repository can turn
   them on for you.
5. **Write the README.** The skeleton is a shape, not content.

## What is in it

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

On **2026-08-09** the payload was made into a project by following this README
literally — banners stripped, placeholders filled, a licence added, git
initialised — and every gate from its own `ci.yml` was run verbatim. Each was
tested twice: that it passes on a clean tree, and that it *fails* on a tree
broken on purpose.

| Gate | Passes when clean | Fails when it should |
|---|---|---|
| Required files exist | yes | yes — a removed `README.md` |
| A licence is present | yes, once you add one | yes — and it is red until you do, by design |
| No committed binaries | yes | yes — a committed `.so` |
| Actions pinned to a full SHA | yes, 7 references | yes — a `@v4` tag reference |
| Commits signed off | yes | yes — an unsigned commit |
| Markdown lints | yes, 11 files | — |

**Three defects were found, and two of them made the pipeline red on day one
for every adopter who followed the instructions.**

1. **The licence gate could never pass.** It used `ls LICENSE LICENSE.md
   LICENSE.txt`, and `ls` exits non-zero unless *every* operand exists. Adding
   a `LICENSE` still produced a red build telling you to add a licence. It now
   tests each candidate separately.
2. **Markdown lint failed on a correctly filled payload.** The contact
   placeholder became a bare email address, which `MD034` rejects. The two
   files now wrap it in angle brackets.
3. **The banner instruction was wrong for two files.** "Delete the first line"
   works everywhere except the issue templates, where the banner sits below the
   YAML front matter — so following it removed the front matter and left the
   banner. The instruction is now a search, not a line number.

Not covered: the link check, because the payload carries placeholder URLs by
design; the GitHub settings in `docs/repository-settings.md`, which no local run
can exercise; and whether this works as the start of a **real** public project,
which is the one thing that would make it `stable`.

## When not to use it

- **Your repository already exists and already has these files.** This is a
  starter, not a migration; take the individual files you are missing instead.
- **The project is private and will stay private.** Half of this — the code of
  conduct, the support split, the security reporting path — exists because
  strangers show up. They will not.
- **You want the agent rules.** Those are a separate blueprint,
  [ai-assisted-development](../ai-assisted-development/); this one has no AI in
  it on purpose.

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
