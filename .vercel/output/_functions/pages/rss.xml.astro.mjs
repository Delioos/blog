import rss from '@astrojs/rss';
import { g as getCollection, c as config } from '../chunks/config_BcTNfR7q.mjs';
export { renderers } from '../renderers.mjs';

async function get(context) {
    const blog = await getCollection('blog');
    return rss({
        title: config.title + config.titleSuffix,
        description: config.description,
        site: config.url,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.intro,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
