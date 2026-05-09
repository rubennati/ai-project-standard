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
