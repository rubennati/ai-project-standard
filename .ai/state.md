# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- Current phase: `v0.3.0` tagged and released; `v0.1.0` and `v0.2.0` before it.
- Blueprints are the current objective and nothing has been built yet: `blueprints/open-source/` from the research, then the extraction of this repository's own AI conventions into a second blueprint. Site work is paused.
- Navigation, information architecture, public URLs and the taxonomy are asked about before they change — `AGENTS.md` → Change scope, after a header change that was made without asking (`errors.md`).
- Deferred objective: Resolve the two identities — the site is a broad knowledge layer, the repository standard a narrower technical subject, and `/docs`, `/use-cases` and `/profiles` still speak only to the second.

## Snapshot

History lives in `progress.md`; this section is current facts only.

### Repository

- Bootstrap structure is stable. Branch protection on `main` runs as a Repository Ruleset (PR required, conversation resolution required, force pushes and deletion blocked).
- Two release streams from one branch: the standard is tagged, the site ships on merge. `docs/release-process.md` holds the process, `.github/workflows/release.yml` turns a tag into a GitHub Release from the changelog section.
- Work that publishes unfinished uses a stacked topic branch — slice PRs target the topic branch, which reaches `main` once (`docs/git-workflow.md`).
- CI builds the site on every pull request (`site-build`) and never deploys it; `pages.yml` keeps the deploy on `main`. `astro check` is a gate and passes.
- Licensing is settled: the repository including `docs/` is MIT, texts written for the site are CC BY 4.0. Stated in the footer, the legal notice, `README.md` and the JSON-LD `license` field, with `/docs/` pages declaring MIT.
- The repository is English-only; the site's translated pages are the sole exception. `docs/language-style.md` holds the rule, `AGENTS.md` points at it.
- `research/` is a queue for unverified material, not a library. Depth is published on the site, the rule stays short in `docs/`, copyable files become a blueprint. First area: open source, two documents with a `STATUS.md` and a per-claim `SOURCES.md`.
- The site has a fifth section, `/open-source`, with three articles in both languages and no AI in it. It is the first area built from `research/` and the first evidence that the site carries subjects beyond AI use.
- `blueprints/` holds material to copy; the contract is in `docs/blueprints.md` and the catalogue is still empty. Payloads next: `open-source` from the files this repository already runs on, then `ai-collaboration` extracted from its own root. Neither needs the research.
- `research/` is a queue for unverified material, not a library. Depth is published on the site, the rule stays short in `docs/`, copyable files become a blueprint. First area: open source, two documents with a `STATUS.md`.

### Website

- The site is a knowledge layer on secure and lawful AI use, not repository documentation. Four sections carry it: Start (entry points by decision authority), Data flows, Law, Setting up safely. Branded "AI Standard" everywhere including metadata; the repository keeps its own name.
- Article content lives in typed modules under `site/src/data/`, one per article, bilingual, so pages stay presentational. Blog prose sits in `site/src/data/blog/`, the register in its `index.ts`.
- Astro 7 with Tailwind through its Vite plugin; the `@tailwindcss/postcss` route breaks under Vite 8.
- English is canonical with parallel `/de/` routes, centralized UI strings and multilingual SEO alternates. The glossary is complete in both languages across all 74 terms, and `getLocalizedTermContent` reports the language it actually returned.
- Sitemap `<lastmod>` comes from the commit date of each page's source file, not the build clock; `site/scripts/git-lastmod.mjs` owns the mapping and omits the date when git history is unavailable.
- One blog post at `/blog/before-you-press-enter`, with a byline, an editorial `datePublished` separate from the git-derived `dateModified`, and an RSS feed per locale.
- Lighthouse measures 100 across performance, accessibility, best practices, SEO and agentic browsing on six page types in both locales.

### Method

- Every substantive claim carries an evidence level — fact, measured, law, assessment, advice — with a check date on factual claims. `site/src/data/evidence.ts` owns the definitions and the condition each level must meet before publication.
- Two boundaries sit inside those definitions: `fact` separates a vendor describing its own terms from an independent verification, and `law` covers restating a norm only — applying it to a case is `assessment`, whoever wrote it.
- The source ranking is explicit: consolidated legal text or Official Journal, then official guidance, then a vendor's published terms, then technical primary documentation, then anything written about them.
- German is written in German, not translated from the English sentence. `docs/language-style.md` holds the rules and the terminology table; `site/scripts/check-language.mjs` enforces the mechanical part in CI.
- Diagrams are described as data (`ArticleFigure`) and rendered as markup, never images, so they stay real text and reflow at any width. State is carried by a word, never by colour alone.

## Immediate next steps

1. Legal review of the legal notice and privacy policy. Both are live. The legal notice deliberately carries the minimum disclosure plus a pointer to the repository; whether § 5 ECG applies in full to a site that sells nothing is the open question.
2. Decide one canonical set of profile names — `docs/standard.md` and `README.md` say Open Source / Human-AI Collaboration / Combined, `docs/profiles.md` and the site say OSS-only / AI-only / Combined.
3. Resolve the two identities (see current objective). The intended shape is the site as the general layer with the project standard as a clearly marked developer area beneath it, roadmapped in `ROADMAP.md`.
4. Split the bilingual content modules into one file per locale. Both languages in one module is the structural cause of German that reads like translated English; the language guard catches the symptoms, not the cause.
5. Write the two planned blog posts, in order: why removing names rarely produces anonymous data in the legal sense, and why "EU-hosted" answers a different question from the one people mean.
6. Two remaining entry points under Start: private use, and the one-person business.

## Open questions

- Which CI checks should be *required* in the ruleset? All six now run on every pull request and `site-build` catches real breakage, so the condition `docs/branch-protection.md` sets ("only once CI runs meaningful checks") is met.
- Does "AI Standard" need a subtitle, and if so which one? The wordmark stands alone today.
- Should the glossary show each entry's `status` (draft / review / stable)? The field exists in `site/src/data/terms.ts` and is not rendered; 30 entries are draft, 36 review and 8 stable, so showing it would explain the unevenness rather than leaving a reader to notice it.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
