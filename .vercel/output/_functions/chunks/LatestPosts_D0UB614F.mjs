import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { g as getCollection, c as config } from './config_BcTNfR7q.mjs';
import { $ as $$Post } from './Post_opmXJH50.mjs';

const $$Astro = createAstro("https://www.delioos.xyz");
const $$LatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  const { postLimit = config.latestPosts, skipPost = "" } = Astro2.props;
  const posts = (await getCollection("blog", ({ data }) => {
    return !(data.title == skipPost);
  })).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).slice(0, postLimit);
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto max-w-screen-lg px-7 py-10 mb-10"> ${posts.map((post, index) => {
    return renderTemplate`${renderComponent($$result, "Post", $$Post, { "postData": post, "num": index })}`;
  })} </section>`;
}, "/Users/roule/Code/Perso/blog/src/components/blog/LatestPosts.astro", undefined);

export { $$LatestPosts as $ };
