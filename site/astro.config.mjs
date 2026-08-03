import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Custom domain served from the repository root.
  site: 'https://ai-standard.rubennati.at',
  trailingSlash: 'ignore',
  integrations: [sitemap(), mdx()],
  vite: {
    // Tailwind v4 through its Vite plugin. The PostCSS plugin was only a
    // workaround for Astro 6, whose Rolldown build did not support the Vite
    // plugin yet; under Vite 8 it breaks outright, because Vite resolves the
    // `@import "tailwindcss"` in global.css as a file path before PostCSS runs.
    plugins: [tailwindcss()],
  },
});
