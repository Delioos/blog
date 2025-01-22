import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
	site: 'https://www.delioos.xyz',
  output: 'static',
});


