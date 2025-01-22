/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, f as renderScript, m as maybeRenderHead } from '../../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { g as getCollection, c as config } from '../../chunks/config_BcTNfR7q.mjs';
import { $ as $$Base } from '../../chunks/Base_B6C5cC45.mjs';
import { $ as $$Post } from '../../chunks/Post_opmXJH50.mjs';
import { $ as $$TagList } from '../../chunks/TagList_BCowySSo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.delioos.xyz");
async function getStaticPaths({ paginate }) {
  const blogEntries = (await getCollection("blog", ({ data }) => {
    return true;
  })).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return paginate(blogEntries, { pageSize: config.postsPerPage });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const allPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const initialPosts = allPosts.slice(0, config.postsPerPage);
  const remainingPosts = allPosts.slice(config.postsPerPage);
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto max-w-screen-lg px-7 py-10"> ${renderComponent($$result2, "TagList", $$TagList, {})} <div id="posts-container"> ${initialPosts.map((post, index) => {
    return renderTemplate`${renderComponent($$result2, "Post", $$Post, { "postData": post, "num": index })}`;
  })} </div> <div id="remaining-posts" class="hidden"> ${remainingPosts.map((post, index) => {
    return renderTemplate`${renderComponent($$result2, "Post", $$Post, { "postData": post, "num": index + config.postsPerPage })}`;
  })} </div> <div class="flex flex-row justify-center gap-7"> ${remainingPosts.length > 0 && renderTemplate`<button id="loadMore" class="text-[16px] bg-transparent border-pacamara-secondary border-[1px] leading-none rounded-full py-3 px-5 text-pacamara-secondary hover:bg-pacamara-accent hover:border-pacamara-accent hover:text-pacamara-white transition-all duration-300">
View More
</button>`} </div> </section> ` })} ${renderScript($$result, "/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
