// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://klosestral.pages.dev',
  output: 'static',
  integrations: [
    sitemap({
      // Alle Seiten einschließen
      filter: () => true,
      // Change frequency und Priority
      changefreq: 'monthly',
      priority: 0.7,
    })
  ],
});