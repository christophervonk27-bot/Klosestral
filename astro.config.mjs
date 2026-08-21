import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://kloseup.eu',
  output: 'server',
  adapter: netlify({
    mode: 'standalone'
  }),
  base: '/Klosestral/',
});
