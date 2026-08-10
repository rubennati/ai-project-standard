# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- `docs/purpose.md` is the single statement of the destination and the relationship between the public website product and the repository behind it. `docs/website-product-brief.md` owns the product statement, reader outcomes and content admission test. Where another file disagrees with `purpose.md`, that file is out of date.
- Self-conformance runs in CI (`check-conformance.sh`): purpose is pointed at, every blueprint answers four questions, external claims carry a check date, blueprint paths resolve, vocabulary matches the glossary.
- Current phase: `v0.3.0` tagged and released; `v0.1.0` and `v0.2.0` before it.
- **Objective, set 2026-08-10:** establish AI Standard as one public website product. The stable-route-first information architecture, native Astro/Tailwind theme foundation and page-primitives system are implemented without a third-party theme or new dependency. The active step is the complete MCP prototype path. The two built blueprints remain honest `draft` artifacts; promoting them still requires use in a real project, but that is no longer the active objective.
- Navigation, information architecture, public URLs and the taxonomy are asked about before they change — `AGENTS.md` → Change scope, after a header change that was made without asking (`errors.md`).
- The earlier plan for a broad knowledge site with a marked developer area underneath is retired. The website stands alone; the repository supports it with sources, artifacts and checks rather than becoming a second public identity.

## Snapshot

History lives in `progress.md`; this section is current facts only.

### Repository

- Bootstrap structure is stable. Branch protection on `main` runs as a Repository Ruleset (PR required, conversation resolution required, force pushes and deletion blocked).
- Two release streams from one branch: the standard is tagged, the site ships on merge. `docs/release-process.md` holds the process, `.github/workflows/release.yml` turns a tag into a GitHub Release from the changelog section.
- Work that publishes unfinished uses a stacked topic branch — slice PRs target the topic branch, which reaches `main` once (`docs/git-workflow.md`).
- CI builds the site on every pull request (`site-build`) and never deploys it; `pages.yml` keeps the deploy on `main`. `astro check` is a gate and passes.
- Licensing is settled: the repository including `docs/` is MIT, texts written for the site are CC BY 4.0. Stated in the footer, the legal notice, `README.md` and the JSON-LD `license` field, with `/docs/` pages declaring MIT.
- The repository is English-only; the site's translated pages are the sole exception. `docs/language-style.md` holds the rule, `AGENTS.md` points at it.
- `research/` is an intake queue for unverified material, not a library. Its last routing sweep covered 166 sections and the queue is currently empty. What survives can support a public explanation, a canonical rule or concept, or a copyable blueprint; the content admission test and artifact type decide.
- The site has an `/open-source` area with three articles in both languages and no AI in it. The content audit proposes reframing the articles around publishing AI-assisted work and merging the unrelated top-level area into a reader journey; existing URLs remain unchanged until the information architecture is approved.
- `site/CONTENT_AUDIT.md` inventories all 365 sitemap URLs by editorial route, generated family or rendered repository document. Its central finding is that Reach is strong, Control is fragmented, Collaboration is thin and Possibility is the main gap. It proposes dispositions only; it changes no public route.
- The stable hub ownership and product-level reader jobs in `site/INFORMATION_ARCHITECTURE.md` are approved: `/use-cases` owns Possibility, `/start` Collaboration, `/data-flows` Reach, `/secure-setup` Control and `/glossary` Reference. Exact bilingual labels, `/docs` compatibility mapping and Open Source page changes still require their concrete reviewed slices. The original duplicating footer proposal is replaced.
- `site/THEME_DIRECTION.md` owns the approved visual direction: keep the existing Astro/Tailwind system, learn from external themes without installing one, use three intentional layout rails and redesign the footer around Reference, Project & trust, and Legal rather than repeated primary links.
- The shared shell now implements the Shell, Wide and Reading rails, a contained responsive header, an always-visible segmented language control and the non-duplicating footer. Editorial articles and rendered `/docs` prose use the centred Reading rail; no font or theme dependency was added.
- `site/PAGE_PRIMITIVES.md` owns the reusable page contract. Six bilingual components cover answer-first introductions, evidence, stop conditions, implementation with verification, copyable artifacts and one accountable next step; the five page jobs remain distinct compositions rather than one article template.
- `blueprints/` holds material to copy; the contract is in `docs/blueprints.md`. Four exist: `open-source` and `ai-assisted-development` are `draft` (built, not yet verified), `agent-maintained-knowledge-base` and `agent-tool-access` are `planned` (scoped, no payload).

### Website

- The site is the public product: an independent practical website that covers what AI makes possible, useful forms of human-AI collaboration, technical and legal reach, implementation and review. It is one product at progressive depths, not a knowledge layer beside a project standard. Branded "AI Standard" everywhere including metadata; the repository keeps its own name.
- Article content lives in typed modules under `site/src/data/`, one per article, bilingual, so pages stay presentational. Blog prose sits in `site/src/data/blog/`, the register in its `index.ts`.
- Astro 7 with Tailwind through its Vite plugin; the `@tailwindcss/postcss` route breaks under Vite 8.
- English is canonical with parallel `/de/` routes, centralized UI strings and multilingual SEO alternates. The glossary has 143 bilingual entries; 101 non-product entries appear by default. Five entries are `stable` and 138 are `review`, and `getLocalizedTermContent` reports the language it actually returned.
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

1. Prototype “Connect AI to tools and data” with MCP as the technical example before migrating the site.
2. Use Vibe Coding as the second template test.
3. Review both complete paths on desktop and mobile, in English and German, before mapping the remaining page families.

Existing work stays queued rather than being folded into the redesign: legal
review, the two planned blog posts, the two missing Start entry points, splitting
bilingual content modules, and real-project verification of the two draft
blueprints.

## Open questions

- Which CI checks should be *required* in the ruleset? All six now run on every pull request and `site-build` catches real breakage, so the condition `docs/branch-protection.md` sets ("only once CI runs meaningful checks") is met.
- Does "AI Standard" need a subtitle derived from the product statement? The wordmark stands alone today.
- Should the glossary show each entry's editorial `status`? The field is not rendered; five entries are `stable` and 138 await a second reading as `review`.
- Which of Inter Variable and IBM Plex Sans gives the bilingual theme the right editorial-technical voice? Decide from the local visual comparison, not the font name.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
