import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from '@astrojs/node';
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
	site: 'https://www.delioos.xyz',
  output: 'server',
  adapter: node({
    mode: 'middleware'
  }),
});


