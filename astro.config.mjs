import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
  site: 'https://delioos.xyz',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 4321,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      hmr: {
        clientPort: 4321,
        host: 'delioos.xyz'
      }
    }
  }
});


