# Git Workflow

This project uses a GitHub Flow / trunk-based workflow with `main` as the stable branch.

## Branch types

- `feature/*` for new capabilities or structural enhancements
- `fix/*` for corrections
- `docs/*` for documentation-only changes
- `refactor/*` for scoped internal restructuring
- `experiment/*` for exploratory AI-generated work

## Rules

- Keep branches short-lived
- Open a pull request before merge
- No direct commits to `main`
- Use review feedback to converge on merge quality
- Delete branches after merge

## Experiment branches

Use `experiment/*` for exploratory work that may be discarded or redesigned after review. Promote useful outcomes into standard branches with clear scope.

## Stacked topic branches

For work that is too large for one pull request but should reach `main` as a single change — a multi-week content project, anything a reader would judge as unfinished halfway through:

- Open a topic branch from `main`.
- Open each slice as a pull request **targeting the topic branch**. GitHub defaults the base to `main`; change it.
- Merge `main` into the topic branch regularly, so the final review stays small.
- Merge the topic branch into `main` once, when the whole thing holds.

The base branch is the whole difference from repeatedly merging an unfinished branch into `main`: same review granularity, one moment of publication.

An exception, not the default. A topic branch that outlives its work has become a second `main`.

## What a merge to `main` publishes

`main` is not only the stable branch, it is the published one. A merge touching `site/**` deploys the website within minutes. There is no staging environment. `docs/**` does not: `/docs/**` on the live site is a static redirect to each file's GitHub source, not rendered content, so editing a `docs/*.md` file changes nothing published — see [`site/astro.config.mjs`](../site/astro.config.mjs) and `.ai/decisions.md`, 2026-08-27.

- `ci.yml` runs cheap, repository-wide checks — structural, self-conformance, Markdown lint, link check — on every pull request and push to `main`, plus a weekly strict link sweep. It never builds or deploys the site.
- `site-ci.yml` typechecks and builds the site, on pull requests touching `site/**` only. `main` only changes through a merged pull request, so this already ran before anything reached `main`; `pages.yml` does not repeat it.
- `pages.yml` builds *and* deploys, only on pushes to `main` touching `site/**` or itself, plus manual `workflow_dispatch`.

There is deliberately no long-lived `site` or `gh-pages` branch: the deploy source is the Actions build artifact, not a branch.

See [Release Process](./release-process.md) for how this relates to versioned releases.
