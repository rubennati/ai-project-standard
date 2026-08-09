<!-- blueprint payload: open-source — edit upstream, then delete -->
# Git workflow

`main` is the only long-lived branch. Everything else is short-lived and named
after what it is.

```text
main
 ├── feature/…    a new capability
 ├── fix/…        a correction
 ├── docs/…       documentation only
 └── refactor/…   internal restructuring, no behaviour change
```

Branch → pull request → CI → review → merge → delete the branch.

## Why this one

Two other models are common and both are worse here.

**Git Flow** — `develop`, `release/*`, `hotfix/*` — was designed in 2010 for
software that ships in versioned drops. Its own author now points out that for
continuously delivered software a simpler model usually fits better. Adopt it
only when you genuinely maintain several released versions in parallel.

**Long-lived environment branches** — `develop`, `staging`, `production` —
confuse two different things. A branch is a line of development. An environment
is somewhere software runs. GitHub models environments as environments, with
their own secrets, approvals and protection rules. Keep them separate: one
branch, several environments.

## Rules

- No direct commits to `main`, including yours.
- One concern per branch. If you cannot describe it in the branch name, it is
  two branches.
- Delete the branch after merge.
- Sign off every commit: `git commit -s`. CI enforces it.

## Work too large for one pull request

Some changes are incoherent until finished and should not land halfway. For
those, keep one topic branch and target the slice pull requests at *it* rather
than at `main`, then merge the topic branch once when the whole thing holds.
The base branch is the entire difference: same review granularity, one moment
of publication.

An exception, not the default. A topic branch that outlives the work it was
opened for has become a second `main`.

## Releases

Tag `vX.Y.Z` on `main`. Take the release notes from `CHANGELOG.md`.

`release/x.y` branches are for projects that maintain several released lines at
once and backport fixes into them. A single-track project should not create
them — an empty long-lived branch is a maintenance cost with no return.
