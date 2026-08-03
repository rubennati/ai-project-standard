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
  // The legal pages used to live at these German paths and are in the sitemap
  // Google was handed. Renaming them without a redirect would 404 URLs that
  // are already published, so keep them pointing at the new locations.
  redirects: {
    '/impressum': '/legal-notice',
    '/datenschutz': '/privacy-policy',
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
