import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CHrtiAYD.mjs';
import { manifest } from './manifest_gXXo1w2p.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-me.astro.mjs');
const _page2 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/career.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-me.astro", _page1],
    ["src/pages/blog/tag/[tag].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/career.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d3f4b47f-24b8-42f8-8067-01f3e49300c9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
