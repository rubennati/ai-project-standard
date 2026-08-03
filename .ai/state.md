# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- Current phase: Post-`v0.2.0`; `v0.1.0` and `v0.2.0` are both tagged and released.
- Current objective: Reposition the site as the knowledge layer on secure and lawful AI use, and clear the content audit before merging `feature/site-content-architecture`.

## Snapshot

- Bootstrap structure is stable.
- Pre-release governance refinements landed in PR #3 (approval definition, SECURITY contact, `.gitignore`, branch-protection split, staleness contract).
- Practical AI collaboration guide landed in PR #4 (`docs/practical-ai-collaboration.md`).
- Branch protection on `main` is in place via a Repository Ruleset (PR required, conversation resolution required, force pushes and deletion blocked).
- `v0.1.0` and `v0.2.0` are tagged; both now have CHANGELOG sections.
- On `feature/site-content-architecture`, the `site/` glossary work is being reshaped into an English-first AI vocabulary and definitions layer with vendor-specific UI labels called out explicitly.
- The glossary UI now defaults to core AI vocabulary, with product/UI labels opt-in and a compact row-based layout.
- The glossary is now being converted into a supporting index with individual term detail pages under `/glossary/`.
- The glossary term pages now separate short definition, explanation, and AI-specific context more clearly.
- The glossary now has parallel English and German routes (`/glossary/`, `/glossary/[slug]/`, `/de/glossary/`, `/de/glossary/[slug]/`) with language switching, linked related terms, and expanded AI/product vocabulary.
- The glossary now has a stronger German translation foundation for the highest-visibility terms, and the `Search` entry is framed as an AI tool/product feature rather than a generic search concept.
- The site now has a cleaner localization foundation with Astro i18n config, centralized UI strings, localized page-shell routes for `en` and `de`, layout-level language switching, and multilingual SEO alternates.
- The header and language switch received a small polish pass so the shell reads more intentionally, while language switching remains route-based and privacy-friendly.
- The live site shell and homepage received a public-readiness polish pass, including stronger header balance, cleaner homepage positioning, and broader cleanup of visible German spelling.
- Sitemap entries carry a real `<lastmod>`, taken from the commit date of each page's source file rather than the build clock; `site/scripts/git-lastmod.mjs` owns the route-to-source mapping and omits the date when git history is unavailable.
- The site build moved to Astro 7 with Tailwind through its Vite plugin; the `@tailwindcss/postcss` route breaks under Vite 8.
- The footer is grouped into labelled Project / Trust / Legal sections with a pre-filled "report a problem with this page" issue link, the wordmark reads "AI Standard" with an accent on "AI", and the legal notice carries a contact address.
- The site is branded "AI Standard" everywhere including metadata; the repository keeps its own name. Legal notice carries the full operator disclosure.

## Immediate next steps

1. Maintainer supplies the operator details the legal notice still lacks: a second contact channel besides email (§ 5 Abs 1 Z 3 ECG), the competent Gewerbebehörde (Z 5), chamber, Gewerbewortlaut and applicable trade law (Z 6), and the Unternehmensgegenstand (§ 25 MedienG).
2. Legal review of the legal notice and privacy policy before `feature/site-content-architecture` is merged.
3. Decide one canonical set of profile names — `docs/standard.md` and `README.md` say Open Source / Human-AI Collaboration / Combined, `docs/profiles.md` and the site say OSS-only / AI-only / Combined.
4. Reposition the homepage around secure and lawful AI use rather than the glossary.

## Open questions

- Should markdown linting be required in CI?
- What release cadence should be used for standard updates?

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
