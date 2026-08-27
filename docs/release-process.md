# Release Process

The repository ships two things on two clocks, from one branch.

| | The standard | The website |
|---|---|---|
| What | `AGENTS.md`, `docs/`, `.ai/` templates, root files, workflows | `ai-standard.rubennati.at` — built from `site/` |
| How it ships | A human pushes a SemVer tag | Every merge to `main` touching `site/**` or `docs/**` deploys within minutes |
| Contract | SemVer, per `CONTRIBUTING.md` → Versioning | None |

They stay on one branch because they are one project: the website explains what the repository holds and links its source. Split the clocks, not the files.

## What a tag covers

A tag versions the standard, not the website. `CONTRIBUTING.md` defines MAJOR, MINOR and PATCH.

Site content — a new article, a corrected claim — goes into `CHANGELOG.md` but is not a reason to release: it is already live. Adding a document, a CI check or a profile is MINOR. Renaming or removing something adopters hold is MAJOR, with a `### Breaking changes for adopters` subsection.

## Cadence

Release when `[Unreleased]` contains something an adopter can pull, not on a calendar. Don't let it accumulate for months: between `v0.2.0` and `v0.3.0` the section outgrew the rest of the file, which meant adopters had no supported way to take three months of work.

## Cutting a release

1. Move `[Unreleased]` into `## [X.Y.Z] - YYYY-MM-DD`; leave `[Unreleased]` empty.
2. If an adopter-facing path changed, add `### Breaking changes for adopters` and a row in `docs/adoption.md`.
3. Set `version` and `date-released` in `CITATION.cff` to match.
4. Merge through a pull request, then tag the merge commit:

   ```bash
   git tag -a v0.3.0 -m "v0.3.0" && git push origin v0.3.0
   ```

`.github/workflows/release.yml` publishes the GitHub Release from the matching changelog section and fails if that section is missing or `CITATION.cff` disagrees — `v0.2.0` shipped without one and had to be reconstructed from commits.

Pushing the tag is the release, and stays a human action (`AGENTS.md` → Approval).

## Not automated

- **Version selection** — whether a change is MAJOR depends on what adopters hold. No tool here knows that.
- **The website** — no version, no rollback beyond reverting a commit. If that stops being acceptable, the answer is a staging environment, not a release process.
- **Package publishing** — nothing is installed; adopters copy files or track this repository upstream (`docs/adoption.md`).
