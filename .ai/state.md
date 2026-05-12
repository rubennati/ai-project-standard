# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- Current phase: First release (`v0.1.0`)
- Current objective: Ship `v0.1.0` as the starting point for pilot usage; iterate based on real-world feedback.

## Snapshot

- Bootstrap structure is stable.
- Pre-release governance refinements landed in PR #3 (approval definition, SECURITY contact, `.gitignore`, branch-protection split, staleness contract).
- Practical AI collaboration guide landed in PR #4 (`docs/practical-ai-collaboration.md`).
- Branch protection on `main` is in place via a Repository Ruleset (PR required, conversation resolution required, force pushes and deletion blocked).
- `v0.1.0` release prepared in CHANGELOG; waiting for tag and GitHub release.

## Immediate next steps

1. Maintainer tags `v0.1.0` on `main` and creates the GitHub release.
2. Collect pilot-usage feedback and iterate on docs (especially `practical-ai-collaboration.md`).

## Open questions

- Should markdown linting be required in CI?
- What release cadence should be used for standard updates?

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
