/* empty css                                    */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B6C5cC45.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Rie6pq5m.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z2bNXu2 } from '../chunks/delioos_CrUuwpeg.mjs';
import { $ as $$LatestPosts } from '../chunks/LatestPosts_D0UB614F.mjs';
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="
        container mx-auto max-w-screen-xl px-7 py-10
        lg:min-h-[500px] content-center font-pacamara
        prose lg:prose-xl
        prose-headings:font-pacamara-space prose-headings:mt-5 prose-headings:text-pacamara-dark prose-headings:font-bold lg:prose-h1:text-7xl prose-h1:mt-0 prose-heading:transition-all prose-heading:duration-300  
        prose-p:text-pacamara-primary/50 dark:prose-p:text-white/70 prose-p:mb-0 prose-p:transition-all prose-p:duration-300
        prose-img:mt-0 prose-img:mb-0  
        dark:prose-headings:text-white
    "> ${renderComponent($$result, "Image", $$Image, { "src": __ASTRO_IMAGE_IMPORT_Z2bNXu2, "width": 200, "alt": "", "loading": "eager", "decoding": "sync", "class": "relative w-[150px] lg:w-[220px] rounded-[15px] image-shine" })} <p>
21yo, low-lever developer (rust, huff & yul arc), market-maker wannabe, curious boi 🦀💊.
</p> <h1><span class="gradient-underline"><span>Follow the journey of a digital adventurer, trying to decode the future at the intersection of code, crypto, and human potential.</span></span></h1> </section>`;
}, "/Users/roule/Code/Perso/blog/src/components/general/Welcome.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "LatestPosts", $$LatestPosts, {})} </main> ` })}`;
}, "/Users/roule/Code/Perso/blog/src/pages/index.astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
