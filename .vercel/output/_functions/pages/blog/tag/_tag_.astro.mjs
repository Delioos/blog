/* empty css                                          */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/config_BcTNfR7q.mjs';
import { $ as $$Base } from '../../../chunks/Base_B6C5cC45.mjs';
import { $ as $$Post } from '../../../chunks/Post_opmXJH50.mjs';
import { $ as $$TagList } from '../../../chunks/TagList_BCowySSo.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.delioos.xyz");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  console.log("1. All posts:", posts.map((p) => ({
    slug: p.slug,
    tags: p.data.tag,
    title: p.data.title
  })));
  const validPosts = posts.filter(
    (post) => post.data.tag && Array.isArray(post.data.tag) && post.data.tag.length > 0
  );
  console.log("2. Valid posts with tags:", validPosts.map((p) => ({
    slug: p.slug,
    tags: p.data.tag,
    title: p.data.title
  })));
  const tags = [...new Set(validPosts.flatMap(
    (post) => post.data.tag.map((t) => t.toLowerCase())
  ))];
  console.log("3. Unique normalized tags:", tags);
  const paths = tags.map((tag) => {
    const filteredPosts = validPosts.filter(
      (post) => post.data.tag.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
    console.log(`4. Posts for tag "${tag}":`, filteredPosts.map((p) => ({
      slug: p.slug,
      tags: p.data.tag,
      title: p.data.title
    })));
    return {
      params: { tag: tag.toLowerCase() },
      props: {
        posts: filteredPosts,
        tag
      }
    };
  });
  console.log("5. Generated paths:", paths.map((p) => ({
    tag: p.params.tag,
    postCount: p.props.posts.length
  })));
  return paths;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  console.log("6. Rendering page for tag:", tag);
  console.log("7. Posts to display:", posts?.map((p) => ({
    slug: p.slug,
    tags: p.data.tag,
    title: p.data.title
  })));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto max-w-screen-lg px-7 py-10"> ${renderComponent($$result2, "TagList", $$TagList, { "activeTag": tag })} ${posts && posts.length > 0 ? posts.map((post, index) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "postData": post, "num": index })}`) : renderTemplate`<p class="text-center text-pacamara-primary/70 dark:text-white/70">
No posts found for tag "${tag}"
</p>`} </section> ` })}`;
}, "/Users/roule/Code/Perso/blog/src/pages/blog/tag/[tag].astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
