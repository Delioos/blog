/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_B6C5cC45.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Rie6pq5m.mjs';
import { $ as $$LatestPosts } from '../../chunks/LatestPosts_D0UB614F.mjs';
import { a as $$PublishDate } from '../../chunks/Post_opmXJH50.mjs';
import { $ as $$Tag } from '../../chunks/Tag_CAwToemE.mjs';
import { a as getEntry, g as getCollection } from '../../chunks/config_BcTNfR7q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.delioos.xyz");
const $$AuthorInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorInfo;
  const { authorData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-screen-lg px-7 lg:px-0 py-10 mb-5 flex flex-col lg:flex-row flex-nowrap gap-10 items-center"> ${authorData.data.photo && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": authorData.data.photo, "width": "200", "class": "relative w-[150px] lg:w-[220px] rounded-full", "alt": "Author's photo" })}`} <div class="
            prose lg:prose-xl max-w-none 
            prose-headings:font-bold prose-headings:text-pacamara-accent 
            prose-p:text-pacamara-primary/70 lg:prose-p:text-[18px] prose-p:transition-all prose-p:duration-300 
            prose-a:font-semibold prose-a:text-pacamara-dark prose-a:hover:text-pacamara-pink prose-a:no-underline prose-a:transition-all prose-a:duration-300
            prose-strong:font-normal 
            prose-headings:font-pacamara-space prose-h2:mb-7
            dark:prose-a:text-white dark:prose-a:hover:text-pacamara-accent dark:prose-p:text-white/70
        "> <h3>${authorData.data.displayName}</h3> <p>${authorData.data.bio}</p> </div> </section> <div class="w-full h-[3px] overflow-hidden gradient-line"></div>`;
}, "/Users/roule/Code/Perso/blog/src/components/blog/AuthorInfo.astro", undefined);

const $$Astro = createAstro("https://www.delioos.xyz");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const author = entry.data.author ? await getEntry(entry.data.author) : null;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "postData": entry }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto max-w-screen-lg px-7 py-10"> <h1 class="text-4xl font-bold mb-4">${entry.data.title}</h1> <div class="flex items-center gap-4 mb-8"> ${author && renderTemplate`${renderComponent($$result2, "AuthorInfo", $$AuthorInfo, { "authorData": author })}`} ${renderComponent($$result2, "PublishDate", $$PublishDate, { "date": entry.data.pubDate })} ${renderComponent($$result2, "Tag", $$Tag, { "tags": entry.data.tag })} </div> <div class="prose max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ${renderComponent($$result2, "LatestPosts", $$LatestPosts, { "skipPost": entry.data.title })} ` })}`;
}, "/Users/roule/Code/Perso/blog/src/pages/blog/[slug].astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
