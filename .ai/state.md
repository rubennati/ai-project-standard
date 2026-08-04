# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- Current phase: Post-`v0.2.0`; `v0.1.0` and `v0.2.0` are both tagged and released.
- Current objective: Finish `feature/site-content-architecture` — the site is repositioned and the content audits are cleared; what remains is a legal review and the structural split between the two identities.

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
- The site is branded "AI Standard" everywhere including metadata; the repository keeps its own name.
- Licensing is settled: the repository including `docs/` stays MIT, texts written for the site are CC BY 4.0. Both are stated in the footer, the legal notice, `README.md` and the JSON-LD `license` field, with `/docs/` pages declaring MIT rather than CC BY.
- The site has moved from documenting the repository to being a knowledge layer on secure and lawful AI use. Four sections carry it: Start (entry points by decision authority), Data flows, Law, and Setting up safely.
- Every substantive claim carries an evidence level — fact, measured, law, assessment, advice — with a check date on factual claims. `site/src/data/evidence.ts` owns the definitions and the condition each level has to meet before it may be published.
- Article content lives in typed modules under `site/src/data/`, one per article, bilingual, so pages stay presentational.
- Lighthouse measures 100 across performance, accessibility, best practices, SEO and agentic browsing on six page types in both locales.
- The blog is real: one post at `/blog/before-you-press-enter`, a visible byline, an editorial `datePublished` separate from the git-derived `dateModified`, and an RSS feed per locale. Post prose lives in `site/src/data/blog/`, the register in `site/src/data/blog/index.ts`.
- Diagrams are described as data (`ArticleFigure` in `site/src/data/article.ts`) and rendered as markup, never images, so they stay real text for search and assistive technology and reflow at any width. State is carried by a word, never by colour alone.
- Evidence levels carry two boundaries in their own definitions: `fact` distinguishes a vendor describing its own terms from an independent verification, and `law` covers restating a norm only — applying it to a case is `assessment`, whoever wrote it.
- The source ranking is explicit: consolidated legal text or Official Journal, then official guidance, then a vendor'"'"'s published terms, then technical primary documentation, then anything written about them.
- German is written in German, not translated from the English sentence. `docs/language-style.md` holds the rules and the terminology table; `site/scripts/check-language.mjs` enforces the mechanical part in CI ("Werkzeug" for software, formal address outside the legal pages, reveal framing in headings).
- The glossary is complete in both languages: all 74 terms carry German, and `getLocalizedTermContent` reports the language it actually returned so a future gap cannot declare `de` over English prose.

## Immediate next steps

1. Legal review of the legal notice and privacy policy before `feature/site-content-architecture` is merged. The legal notice deliberately carries the minimum disclosure plus a pointer to the repository; whether § 5 ECG applies in full to a site that sells nothing is the open question.
2. Decide one canonical set of profile names — `docs/standard.md` and `README.md` say Open Source / Human-AI Collaboration / Combined, `docs/profiles.md` and the site say OSS-only / AI-only / Combined.
3. Resolve the two identities. The site is a broad knowledge layer; the repository standard is a narrower technical subject. `/docs`, `/use-cases` and `/profiles` still speak only to the second, and a reader following "Zum Standard" lands in repository documentation. The intended shape is the site as the general layer with the project standard as a clearly marked developer area beneath it (roadmapped in `ROADMAP.md`).
4. Split the bilingual content modules into one file per locale. Both languages sitting in the same module is the structural cause of the German reading like translated English; the language guard catches the mechanical symptoms, not the cause.
5. Write the two planned blog posts, in order: why removing names rarely produces anonymous data in the legal sense, and why "EU-hosted" answers a different question from the one people mean.
6. Two remaining entry points under Start: private use, and the one-person business.

## Open questions

- Should markdown linting be required in CI?
- What release cadence should be used for standard updates?
- Does "AI Standard" need a subtitle, and if so which one? The wordmark stands alone today.
- Should the glossary show each entry'"'"'s `status` (draft / review / stable)? The field exists in `site/src/data/terms.ts` and is not rendered; 30 entries are draft and 8 are stable, so showing it would explain the unevenness rather than leaving a reader to notice it.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
