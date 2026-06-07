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
- On `feature/site-content-architecture`, the `site/` glossary work is being reshaped into an English-first AI vocabulary and definitions layer with vendor-specific UI labels called out explicitly.
- The glossary UI now defaults to core AI vocabulary, with product/UI labels opt-in and a compact row-based layout.
- The glossary is now being converted into a supporting index with individual term detail pages under `/glossary/`.
- The glossary term pages now separate short definition, explanation, and AI-specific context more clearly.
- The glossary now has parallel English and German routes (`/glossary/`, `/glossary/[slug]/`, `/de/glossary/`, `/de/glossary/[slug]/`) with language switching, linked related terms, and expanded AI/product vocabulary.
- The glossary now has a stronger German translation foundation for the highest-visibility terms, and the `Search` entry is framed as an AI tool/product feature rather than a generic search concept.
- The site now has a cleaner localization foundation with Astro i18n config, centralized UI strings, localized page-shell routes for `en` and `de`, layout-level language switching, and multilingual SEO alternates.

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
