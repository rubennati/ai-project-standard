import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { lastmodForUrl } from './scripts/git-lastmod.mjs';

export default defineConfig({
  // Custom domain served from the repository root.
  site: 'https://ai-standard.rubennati.at',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: 'ignore',
  // Every entry is a published URL with a precise successor. None of these
  // pages disappeared without one; none redirects to a generic landing page.
  redirects: {
    // German-language legacy paths land on the German pages, not the English
    // ones. They are in the sitemap Google was handed, so they cannot 404.
    '/impressum': '/de/legal-notice',
    '/datenschutz': '/de/privacy-policy',

    // The evidence method is trust content owned by About, not a glossary
    // term. The old URLs carried the footer link and every evidence badge, so
    // they stay resolvable. See .ai/decisions.md, 2026-08-27.
    '/glossary/evidence-method': '/about/how-claims-are-checked',
    '/de/glossary/evidence-method': '/de/about/how-claims-are-checked',

    // Profiles were replaced by blueprints; the public tombstone explained a
    // retired repository taxonomy to readers who never knew it. The honest
    // successor to "which bundle applies to my project" is the blueprints
    // directory itself.
    '/profiles': 'https://github.com/rubennati/ai-project-standard/tree/main/blueprints',

    // /docs/** was maintainer documentation auto-published by a filesystem
    // glob — an accidental second product with broken in-body links. The
    // documents still exist, in the repository, where their links work; each
    // published URL redirects one-to-one to its source. See .ai/decisions.md,
    // 2026-08-27.
    '/docs': 'https://github.com/rubennati/ai-project-standard/tree/main/docs',
    '/docs/adoption': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/adoption.md',
    '/docs/ai-tools': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/ai-tools.md',
    '/docs/ai-workspace-layer': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/ai-workspace-layer.md',
    '/docs/blueprints': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/blueprints.md',
    '/docs/branch-protection': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/branch-protection.md',
    '/docs/concepts': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/concepts.md',
    '/docs/forkable-repository': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/forkable-repository.md',
    '/docs/getting-started': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/getting-started.md',
    '/docs/git-workflow': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/git-workflow.md',
    '/docs/language-style': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/language-style.md',
    '/docs/open-source-project-standard': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/open-source-project-standard.md',
    '/docs/practical-ai-collaboration': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/practical-ai-collaboration.md',
    '/docs/profiles': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/profiles.md',
    '/docs/purpose': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/purpose.md',
    '/docs/release-process': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/release-process.md',
    '/docs/security-baseline': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/security-baseline.md',
    '/docs/sizing': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/sizing.md',
    '/docs/standard': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/standard.md',
    '/docs/website-audit': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/website-audit.md',
    '/docs/website-product-brief': 'https://github.com/rubennati/ai-project-standard/blob/main/docs/website-product-brief.md',
  },
  integrations: [
    sitemap({
      // Dates come from each page's own git history, not from the build clock.
      // Pages whose source cannot be resolved are emitted without a lastmod.
      serialize(item) {
        const lastmod = lastmodForUrl(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
    mdx(),
  ],
  vite: {
    // Tailwind v4 through its Vite plugin. The PostCSS plugin was only a
    // workaround for Astro 6, whose Rolldown build did not support the Vite
    // plugin yet; under Vite 8 it breaks outright, because Vite resolves the
    // `@import "tailwindcss"` in global.css as a file path before PostCSS runs.
    plugins: [tailwindcss()],
  },
});
