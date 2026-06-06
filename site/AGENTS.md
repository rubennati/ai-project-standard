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

Verification:
- use a Node version compatible with Astro 6
- run `npm run check` and `npm run build` for code/content changes where relevant
- documentation-only changes do not require a build unless repository rules say otherwise

Git workflow:
- follow repository-level branch, commit, PR, review, and state-tracking rules
- do not commit directly to `main` unless explicitly allowed
