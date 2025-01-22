/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { a as getEntry } from '../chunks/config_BcTNfR7q.mjs';
import { $ as $$Base } from '../chunks/Base_B6C5cC45.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const aboutMe = await getEntry("page", "about-me");
  const { Content } = await aboutMe.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto max-w-screen-lg px-7 py-10"> <div class="prose lg:prose-xl max-w-none
            prose-headings:font-bold prose-headings:text-pacamara-accent 
            prose-p:text-pacamara-primary/70 lg:prose-p:text-[18px] prose-p:transition-all prose-p:duration-300 
            prose-a:font-semibold prose-a:text-pacamara-dark prose-a:hover:text-pacamara-accent prose-a:no-underline prose-a:transition-all prose-a:duration-300
            prose-strong:font-normal 
            prose-headings:font-pacamara-space prose-h2:mb-7
            dark:prose-a:text-white dark:prose-a:hover:text-pacamara-accent dark:prose-p:text-white/70
            "> <h1 class="text-4xl font-bold text-pacamara-dark dark:text-white mb-4"> ${aboutMe.data.title} </h1> <p class="text-xl text-pacamara-secondary mb-8"> ${aboutMe.data.intro} </p> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })}`;
}, "/Users/roule/Code/Perso/blog/src/pages/about-me.astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/about-me.astro";
const $$url = "/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutMe,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
