# Site Agent Instructions

`site/` is part of the larger `ai-project-standard` repository. Repository-level instructions still apply here, even when a task is scoped only to `site/`.

Before making changes, inspect and follow the root guidance files, especially `AGENTS.md`, `README.md`, `CONTRIBUTING.md`, `CLAUDE.md`, and the relevant `.ai/` workflow/state files.

Implementation changes should normally stay inside `site/`. If a repository-level workflow rule conflicts with a request like "only modify site/", stop and report the conflict before editing.

Site principles:

- Astro static-first site
- accessible, semantic HTML
- SEO and schema.org must describe visible content
- privacy-friendly defaults
- stable URLs and maintainability
- no AI/vector search, RAG, embeddings, chatbot, analytics, or broad taxonomy unless explicitly requested

Per-page checklist:

`Base.astro` already emits `<title>`, the meta description, the canonical URL, Open Graph and Twitter tags, JSON-LD, and the sitemap entry. Three props are real decisions and are the only things to get right when adding a page:

- `description` — always, and unique. Base falls back to one generic sentence, so a forgotten description gives the page the same text as every other, which search engines treat as thin or duplicate.
- `routeKey` — required as soon as a page exists in both locales. It drives `hreflang` and the language switch. Without it the two language versions compete as duplicates instead of being linked as a pair.
- `schemaType` — `CollectionPage` for list pages, `Article` for posts. Defaults to `WebPage`.

Also:

- sitemap `<lastmod>` is the commit date of a page's source file, resolved in `scripts/git-lastmod.mjs`. A new route backed by a dynamic path or a data file needs a rule there, or it ships without a date.
- renaming a published route needs an entry in `redirects` in `astro.config.mjs`. The old URL is already in the sitemap Google was given.

Verification:

- use a Node version compatible with Astro 6
- run `npm run check` and `npm run build` for code/content changes where relevant
- documentation-only changes do not require a build unless repository rules say otherwise

Git workflow:

- follow repository-level branch, commit, PR, review, and state-tracking rules
- do not commit directly to `main` unless explicitly allowed
