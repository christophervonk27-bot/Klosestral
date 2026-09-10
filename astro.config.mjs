import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://klosestral.pages.dev',
  output: 'static',
  adapter: cloudflare({
    mode: 'static',
  }),
  integrations: [
    sitemap({
      filter: () => true,
      changefreq: 'monthly',
      priority: 0.7,
    })
  ],
});