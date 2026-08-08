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

`main` is not only the stable branch, it is the published one. A merge touching `site/**` or `docs/**` deploys the website within minutes. There is no staging environment.

- `ci.yml` runs on every pull request and push to `main`. It builds the site (`site-build`) and never deploys it, so a broken build fails before the merge.
- `pages.yml` builds *and* deploys, only on pushes to `main` touching `site/**`, `docs/**` or itself, plus manual `workflow_dispatch`.
- `docs/**/*.md` is website content — the site renders it under `/docs/`. Editing documentation publishes it.

There is deliberately no long-lived `site` or `gh-pages` branch: the deploy source is the Actions build artifact, not a branch, and splitting the site off `main` would separate the `/docs/` pages from the files they are made of.

See [Release Process](./release-process.md) for how this relates to versioned releases.
