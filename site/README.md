# Site

Astro source for the AI Project Standard GitHub Pages site. This folder is published to GitHub Pages by `.github/workflows/pages.yml` (added in a later PR).

The repository's strict reader documentation lives in `/docs`. This site is the public-facing knowledge layer — see the layered-architecture rationale in [docs/standard.md](../docs/standard.md).

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

The `docs` content collection (reading from `../docs/**/*.md`) and the `<SEO>` component land in a later PR.

## Conventions

- No client-side JavaScript framework. Plain Astro components with islands only when needed.
- Tailwind v4 via `@tailwindcss/postcss` (configured in `postcss.config.mjs`). Global styles in `src/styles/global.css`. We use the PostCSS plugin instead of `@tailwindcss/vite` because Astro 6 switched its bundler to Rolldown, which the Vite plugin does not yet fully support.
- Dark/light follows the system preference; no toggle in v0.2.0.
- The site is **minimal by design** for v0.2.0 — RSS, JSON-LD, dynamic blog, and advanced SEO land in v0.3.0+.
