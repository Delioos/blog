import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DHGC1rpk.mjs';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_DuJbMrHn.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/roule/Code/Perso/blog/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/about-me","isIndex":false,"type":"page","pattern":"^\\/about-me\\/?$","segments":[[{"content":"about-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-me.astro","pathname":"/about-me","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/blog/tag/[tag]","isIndex":false,"type":"page","pattern":"^\\/blog\\/tag\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/blog/tag/[tag].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"},{"type":"inline","content":".toc-scrollbar[data-astro-cid-gdqbjplb]{scrollbar-width:thin;scrollbar-color:rgb(255 180 180 / 30) transparent}.toc-scrollbar[data-astro-cid-gdqbjplb]::-webkit-scrollbar{width:3px}.toc-scrollbar[data-astro-cid-gdqbjplb]::-webkit-scrollbar-track{background:transparent}.toc-scrollbar[data-astro-cid-gdqbjplb]::-webkit-scrollbar-thumb{background-color:#ffb4b4;border-radius:20px}.toc-active[data-astro-cid-gdqbjplb]{background-color:#ffb4b41a;--tw-text-opacity: 1;color:rgb(255 180 180 / var(--tw-text-opacity, 1))}\n"}],"routeData":{"route":"/career","isIndex":false,"type":"page","pattern":"^\\/career\\/?$","segments":[[{"content":"career","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/career.astro","pathname":"/career","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-me.KJYZHetT.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.delioos.xyz","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/components/blog/LatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/components/blog/TagList.astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/blog/tag/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/about-me.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about-me@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/career.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/career@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/roule/Code/Perso/blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about-me@_@astro":"pages/about-me.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]@_@astro":"pages/blog/tag/_tag_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/career@_@astro":"pages/career.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/roule/Code/Perso/blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DFLd2mld.mjs","/Users/roule/Code/Perso/blog/.astro/content-assets.mjs":"chunks/content-assets_7MD8eNFE.mjs","/Users/roule/Code/Perso/blog/.astro/content-modules.mjs":"chunks/content-modules_Ca-O6I9M.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Ct8-vJi1.mjs","/Users/roule/Code/Perso/blog/src/content/blog/1.mdx?astroPropagatedAssets":"chunks/1_Bis62DEw.mjs","/Users/roule/Code/Perso/blog/src/content/blog/12.mdx?astroPropagatedAssets":"chunks/12_B6tmzOh_.mjs","/Users/roule/Code/Perso/blog/src/content/blog/3.mdx?astroPropagatedAssets":"chunks/3_CVS7J6nV.mjs","/Users/roule/Code/Perso/blog/src/content/blog/2.mdx?astroPropagatedAssets":"chunks/2_XtY5h2zF.mjs","/Users/roule/Code/Perso/blog/src/content/blog/4.mdx?astroPropagatedAssets":"chunks/4_BydleJM6.mjs","/Users/roule/Code/Perso/blog/src/content/blog/5.mdx?astroPropagatedAssets":"chunks/5_CW7HzHAl.mjs","/Users/roule/Code/Perso/blog/src/content/blog/6.mdx?astroPropagatedAssets":"chunks/6_FHHvAnFw.mjs","/Users/roule/Code/Perso/blog/src/content/project/Ainvest.mdx?astroPropagatedAssets":"chunks/Ainvest_C7MyMXmG.mjs","/Users/roule/Code/Perso/blog/src/content/page/about-me.mdx?astroPropagatedAssets":"chunks/about-me_BuupFwIz.mjs","/Users/roule/Code/Perso/blog/src/content/project/Ballot Blocks.mdx?astroPropagatedAssets":"chunks/Ballot Blocks_A1iP41Hu.mjs","/Users/roule/Code/Perso/blog/src/content/project/Node-Guardian.mdx?astroPropagatedAssets":"chunks/Node-Guardian_T913iRYp.mjs","/Users/roule/Code/Perso/blog/src/content/project/wallet-tracker.mdx?astroPropagatedAssets":"chunks/wallet-tracker_AxDxexyi.mjs","/Users/roule/Code/Perso/blog/src/content/career/altitude.mdx?astroPropagatedAssets":"chunks/altitude_idDGmI0B.mjs","/Users/roule/Code/Perso/blog/src/content/career/but.mdx?astroPropagatedAssets":"chunks/but_Z2eLQ1xk.mjs","/Users/roule/Code/Perso/blog/src/content/career/cogelis.mdx?astroPropagatedAssets":"chunks/cogelis_qv8WTHh0.mjs","/Users/roule/Code/Perso/blog/src/content/career/list.mdx?astroPropagatedAssets":"chunks/list_DxXcDasM.mjs","/Users/roule/Code/Perso/blog/src/content/blog/1.mdx":"chunks/1_CPmenuvX.mjs","/Users/roule/Code/Perso/blog/src/content/blog/12.mdx":"chunks/12_D2976zOT.mjs","/Users/roule/Code/Perso/blog/src/content/blog/3.mdx":"chunks/3_BCpq8OPf.mjs","/Users/roule/Code/Perso/blog/src/content/blog/2.mdx":"chunks/2_OXWARSJq.mjs","/Users/roule/Code/Perso/blog/src/content/blog/4.mdx":"chunks/4_DNNcmvAo.mjs","/Users/roule/Code/Perso/blog/src/content/blog/5.mdx":"chunks/5_CtFTpWZn.mjs","/Users/roule/Code/Perso/blog/src/content/blog/6.mdx":"chunks/6_DI9v-RPK.mjs","/Users/roule/Code/Perso/blog/src/content/project/Ainvest.mdx":"chunks/Ainvest_CDeOQh7m.mjs","/Users/roule/Code/Perso/blog/src/content/page/about-me.mdx":"chunks/about-me_DyynLZjY.mjs","/Users/roule/Code/Perso/blog/src/content/project/Ballot Blocks.mdx":"chunks/Ballot Blocks_CJEd3jc5.mjs","/Users/roule/Code/Perso/blog/src/content/project/Node-Guardian.mdx":"chunks/Node-Guardian_CoetbkEL.mjs","/Users/roule/Code/Perso/blog/src/content/project/wallet-tracker.mdx":"chunks/wallet-tracker_DBxRLNEd.mjs","/Users/roule/Code/Perso/blog/src/content/career/altitude.mdx":"chunks/altitude_Ck72yYEZ.mjs","/Users/roule/Code/Perso/blog/src/content/career/but.mdx":"chunks/but_D2JPWhDN.mjs","/Users/roule/Code/Perso/blog/src/content/career/cogelis.mdx":"chunks/cogelis_IOOnVKsr.mjs","/Users/roule/Code/Perso/blog/src/content/career/list.mdx":"chunks/list_DHInRpwO.mjs","\u0000@astrojs-manifest":"manifest_gXXo1w2p.mjs","/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro?astro&type=script&index=0&lang.ts":"_astro/_...page_.astro_astro_type_script_index_0_lang.Bs_mvy8n.js","/Users/roule/Code/Perso/blog/src/pages/career.astro?astro&type=script&index=0&lang.ts":"_astro/career.astro_astro_type_script_index_0_lang.BB7_4CuB.js","/Users/roule/Code/Perso/blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/Users/roule/Code/Perso/blog/src/components/general/ModeSwitch.astro?astro&type=script&index=0&lang.ts":"_astro/ModeSwitch.astro_astro_type_script_index_0_lang.BPyM0FhJ.js","/Users/roule/Code/Perso/blog/src/components/general/HamburgerButton.astro?astro&type=script&index=0&lang.ts":"_astro/HamburgerButton.astro_astro_type_script_index_0_lang.PVWBhw_i.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/roule/Code/Perso/blog/src/pages/blog/[...page].astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"loadMore\"),n=document.getElementById(\"remaining-posts\"),t=document.getElementById(\"posts-container\");e?.addEventListener(\"click\",()=>{n&&t&&(t.insertAdjacentHTML(\"beforeend\",n.innerHTML),e.remove())});"],["/Users/roule/Code/Perso/blog/src/pages/career.astro?astro&type=script&index=0&lang.ts","const i=new IntersectionObserver(e=>{e.forEach(o=>{if(o.isIntersecting){document.querySelectorAll(\"#toc a\").forEach(t=>{t.classList.remove(\"toc-active\")});const c=o.target.id,r=document.querySelector(`#toc a[href=\"#${c}\"]`);if(r){r.classList.add(\"toc-active\");const t=document.querySelector(\".toc-scrollbar\");if(t){const s=r.offsetTop,n=t.clientHeight,l=s-n/2;t.scrollTo({top:l,behavior:\"smooth\"})}}}})},{rootMargin:\"-50% 0px -50% 0px\",threshold:0});document.querySelectorAll('[id^=\"career-\"]').forEach(e=>{i.observe(e)});document.querySelectorAll(\"#toc a\").forEach(e=>{e.addEventListener(\"click\",o=>{o.preventDefault();const c=e.getAttribute(\"href\");document.querySelector(c)?.scrollIntoView({behavior:\"smooth\"})})});"],["/Users/roule/Code/Perso/blog/src/components/general/ModeSwitch.astro?astro&type=script&index=0&lang.ts","const e=()=>{document.querySelector(\"#mode_switcher\")?.addEventListener(\"click\",function(){document.documentElement.classList.toggle(\"dark\"),document.documentElement.classList.contains(\"dark\")?localStorage.darkMode=\"true\":localStorage.darkMode=\"false\"})};e();document.addEventListener(\"astro:after-swap\",e);"],["/Users/roule/Code/Perso/blog/src/components/general/HamburgerButton.astro?astro&type=script&index=0&lang.ts","const e=()=>{const t=document.querySelector(\"#menu_toggle\"),n=document.querySelector(\"#navigation_wrapper\");t?.addEventListener(\"click\",function(){n?.classList.toggle(\"hidden\"),document.documentElement.classList.toggle(\"overflow-hidden\")})};e();document.addEventListener(\"astro:after-swap\",e);"]],"assets":["/_astro/delioos.zd8bgDRq.jpg","/_astro/about-me.KJYZHetT.css","/delioos.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/fonts/inter-v12-latin_latin-ext-700.woff2","/fonts/inter-v12-latin_latin-ext-regular.woff2","/fonts/space-grotesk-v15-latin_latin-ext-600.woff2","/fonts/space-grotesk-v15-latin_latin-ext-700.woff2","/fonts/space-grotesk-v15-latin_latin-ext-regular.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vizq3YEHNSX/O5L1v47VbZCrCRTd2v4cr5glY9elPpo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
