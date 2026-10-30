// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Preserve Astro 6 whitespace behavior after the Astro 7 upgrade.
  compressHTML: true,
});
