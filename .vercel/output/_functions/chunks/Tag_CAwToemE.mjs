import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.delioos.xyz");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tags } = Astro2.props;
  return renderTemplate`${tags && tags.length > 0 && renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-2 flex-wrap">${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.toLowerCase()}`, "href")} class="group text-[16px] bg-transparent border-pacamara-secondary border-[1px] leading-none rounded-full flex flex-row content-center items-center h-[34px] px-3 text-pacamara-secondary hover:bg-pacamara-accent hover:text-white hover:border-pacamara-accent transition-all duration-300"><span>${tag}</span></a>`)}</div>`}`;
}, "/Users/roule/Code/Perso/blog/src/components/general/Tag.astro", undefined);

export { $$Tag as $ };
