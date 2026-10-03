import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wordunscramblar.com',
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['..', '.']
      }
    }
  },
});
