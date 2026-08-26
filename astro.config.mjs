// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kloseup.eu',
  output: 'static',
  base: '/Klosestral/',  // ← **WICHTIG: Pfad-Präfix für GH Pages**
});