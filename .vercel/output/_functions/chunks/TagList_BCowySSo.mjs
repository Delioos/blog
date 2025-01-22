import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './config_BcTNfR7q.mjs';

const $$Astro = createAstro("https://www.delioos.xyz");
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagList;
  const posts = await getCollection("blog");
  const tags = [...new Set(
    posts.filter((post) => post.data.tag && Array.isArray(post.data.tag)).flatMap((post) => post.data.tag.map((t) => t.toLowerCase()))
  )].sort();
  const { activeTag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-3 mb-8"> <a href="/blog"${addAttribute(`text-[16px] bg-transparent border-pacamara-secondary border-[1px] leading-none rounded-full py-3 px-5 
        ${!activeTag ? "bg-pacamara-accent text-white" : "text-pacamara-secondary hover:bg-pacamara-accent hover:text-white hover:border-pacamara-accent"} 
        transition-all duration-300`, "class")}>
All
</a> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.toLowerCase()}`, "href")}${addAttribute(`text-[16px] bg-transparent border-pacamara-secondary border-[1px] leading-none rounded-full py-3 px-5 
            ${activeTag?.toLowerCase() === tag.toLowerCase() ? "bg-pacamara-accent text-white" : "text-pacamara-secondary hover:bg-pacamara-accent hover:text-white hover:border-pacamara-accent"} 
            transition-all duration-300`, "class")}> ${tag} </a>`)} </div>`;
}, "/Users/roule/Code/Perso/blog/src/components/blog/TagList.astro", undefined);

export { $$TagList as $ };
