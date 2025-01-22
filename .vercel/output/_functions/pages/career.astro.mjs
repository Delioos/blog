/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent, f as renderScript, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/config_BcTNfR7q.mjs';
import { $ as $$Base } from '../chunks/Base_B6C5cC45.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Career = createComponent(async ($$result, $$props, $$slots) => {
  const careers = (await getCollection("career")).sort(
    (a, b) => b.data.startDate.valueOf() - a.data.startDate.valueOf()
  );
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-gdqbjplb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto max-w-screen-xl px-7 py-6" data-astro-cid-gdqbjplb> <div class="grid grid-cols-1 lg:grid-cols-[250px_auto] gap-6" data-astro-cid-gdqbjplb> <!-- Table of Contents --> <nav class="hidden lg:block sticky top-8 self-start max-h-[calc(100vh-120px)]" data-astro-cid-gdqbjplb> <div class="rounded-lg p-4 h-full max-h-[calc(100vh-120px)] flex flex-col" data-astro-cid-gdqbjplb> <h2 class="text-lg font-bold mb-3 text-pacamara-dark dark:text-white flex-shrink-0" data-astro-cid-gdqbjplb>Career Timeline</h2> <div class="overflow-y-auto toc-scrollbar flex-grow" data-astro-cid-gdqbjplb> <ul class="space-y-0.5 text-sm pr-2" id="toc" data-astro-cid-gdqbjplb> ${careers.map((item, index) => renderTemplate`<li data-astro-cid-gdqbjplb> <a${addAttribute(`#career-${index}`, "href")} class="block py-2 px-3 rounded-lg hover:bg-pacamara-accent/10 hover:text-pacamara-accent transition-all duration-300 text-pacamara-primary/70 dark:text-white/70"${addAttribute(index, "data-index")} data-astro-cid-gdqbjplb> <span class="font-medium" data-astro-cid-gdqbjplb>${item.data.title}</span> <span class="block text-xs opacity-75 mt-0.5" data-astro-cid-gdqbjplb>${item.data.company}</span> </a> </li>`)} </ul> </div> </div> </nav> <!-- Career Timeline --> <div class="space-y-8" data-astro-cid-gdqbjplb> ${careers.map((item, index) => renderTemplate`<div${addAttribute(`career-${index}`, "id")} class="scroll-mt-8 border-l-2 border-pacamara-accent/20 pl-6 transition-all duration-300" data-astro-cid-gdqbjplb> <div class="flex flex-col md:flex-row justify-between mb-2" data-astro-cid-gdqbjplb> <h3 class="text-xl font-bold text-pacamara-dark dark:text-white" data-astro-cid-gdqbjplb> ${item.data.title} </h3> <span class="text-pacamara-secondary text-sm" data-astro-cid-gdqbjplb> ${formatDate(item.data.startDate)} -
${item.data.endDate ? formatDate(item.data.endDate) : "Present"} </span> </div> <h4 class="text-base text-pacamara-accent mb-3" data-astro-cid-gdqbjplb> ${item.data.company} • ${item.data.location} </h4> <ul class="list-disc list-inside space-y-1.5 text-pacamara-primary/70 dark:text-white/70" data-astro-cid-gdqbjplb> ${item.data.description.map((desc) => renderTemplate`<li data-astro-cid-gdqbjplb>${desc}</li>`)} </ul> </div>`)} </div> </div> </div> ` })}  ${renderScript($$result, "/Users/roule/Code/Perso/blog/src/pages/career.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/roule/Code/Perso/blog/src/pages/career.astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Career,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
