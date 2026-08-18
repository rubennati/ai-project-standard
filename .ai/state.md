# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-10:** establish AI Standard as one public website product. Promoting the blueprints is outside it.

## Open questions

- Which CI checks should be *required* in the ruleset? All six now run on every pull request and `site-build` catches real breakage, so the condition `docs/branch-protection.md` sets ("only once CI runs meaningful checks") is met.
- Does "AI Standard" need a subtitle derived from the product statement? The wordmark stands alone today.
- Should the glossary show each entry's editorial `status`? The field is not rendered; five entries are `stable` and 138 await a second reading as `review`.
- Which of Inter Variable and IBM Plex Sans gives the bilingual theme the right editorial-technical voice? Decide from the local visual comparison, not the font name.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
