import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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
  integrations: [sitemap(), mdx()],
});
