import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(
		{
			webAnalytics: { enable: true}
		}
	),
  integrations: [tailwind(), mdx()],
  site: 'https://delioos.xyz',
  //site: 'https://delioos.github.io',
  base: '/'
});
