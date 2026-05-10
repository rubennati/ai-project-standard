# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- Current phase: Pre-release refinement
- Current objective: Keep governance, docs, and `.ai/` state consistent ahead of the first public release.

## Snapshot

- Bootstrap structure is stable.
- Pre-release governance refinements landed in PR #3 (approval definition, SECURITY contact, `.gitignore`, branch-protection split, staleness contract).
- Practical AI collaboration guide landed in PR #4 (`docs/practical-ai-collaboration.md`).

## Immediate next steps

1. Apply branch-protection settings on `main` per `docs/branch-protection.md`.
2. Refine the practical AI collaboration guide based on review feedback.
3. Tag a release once the standard is considered stable for first public use.

## Open questions

- Should markdown linting be required in CI?
- What release cadence should be used for standard updates?

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
