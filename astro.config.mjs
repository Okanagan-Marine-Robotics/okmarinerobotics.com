import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://okmarinerobotics.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { build: { assetsInlineLimit: 0 } },
});
