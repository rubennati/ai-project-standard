# Site

Astro source for AI Standard, the public product of this repository. The site
shows what people can achieve with AI, which form of collaboration fits, what
the system can reach, and how the result stays responsible and reviewable.

The product direction lives in the
[Website Product Brief](../docs/website-product-brief.md). The
[Website Content Audit](./CONTENT_AUDIT.md) measures the current public routes
against it. The [Information Architecture Proposal](./INFORMATION_ARCHITECTURE.md)
turns the findings into a concrete structure for human approval before
navigation, URLs or templates change.

Repository documentation, concepts and blueprints support the public product
with sources, technical depth and copyable artifacts. Their folder structure
does not define the website's information architecture.

## Local development

Astro 6 requires Node `>=22.12`.

```bash
cd site
npm install
npm run dev
```

The site runs at `http://localhost:4321/`.

## Production build

```bash
npm run build
```

The static output lands in `site/dist/`. Preview locally with `npm run preview`.

## Type check

```bash
npm run check
```

## Structure

- `src/pages/` — routes (one file per page).
- `src/layouts/` — shared layout components.
- `src/components/` — reusable UI fragments.
- `src/styles/` — Tailwind entry point and any global CSS.
- `public/` — static assets copied verbatim (`robots.txt`, favicons later).

- `src/data/` — content that is neither UI string nor page: operator details, the glossary, the privacy policy.
- `scripts/` — build-time helpers, currently the git-based sitemap `<lastmod>` lookup.

The `docs` content collection reads `../docs/**/*.md` directly, so repository documentation renders here without being copied.

## Conventions

- No client-side JavaScript framework. Plain Astro components with islands only when needed.
- Tailwind v4 via `@tailwindcss/vite` (configured in `astro.config.mjs`). Global styles in `src/styles/global.css`. The PostCSS plugin was used while the site ran on Astro 6; under Astro 7 and Vite 8 it breaks, because Vite resolves the `@import "tailwindcss"` as a file path before PostCSS runs.
- Dark/light follows the system preference; no toggle.
- Sitemap `<lastmod>` comes from each page's git history, never the build clock — see `scripts/git-lastmod.mjs`.
