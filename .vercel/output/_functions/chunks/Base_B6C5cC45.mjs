import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderScript, m as maybeRenderHead, d as renderComponent, o as renderSlot, p as renderHead } from './astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { c as config } from './config_BcTNfR7q.mjs';

const $$Astro$3 = createAstro("https://www.delioos.xyz");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/roule/Code/Perso/blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/roule/Code/Perso/blog/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro$2 = createAstro("https://www.delioos.xyz");
const $$SeoHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SeoHead;
  const { postData } = Astro2.props;
  const title = (postData?.data?.title ? postData.data.title : config.title) + config.titleSuffix;
  const description = postData?.data?.description ? postData.data.description : config.description;
  const permalink = new URL(Astro2.url.pathname, Astro2.url);
  const image = postData?.data?.image ? postData.data.image.src : config.defaultOgImage;
  const type = postData?.data?.type ? postData.data.type : "website";
  return renderTemplate`<title>${title}</title><meta name="title"${addAttribute(title, "content")}>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<!-- Open Graph Tags (Facebook) --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title, "content")}>${permalink && renderTemplate`<meta property="og:url"${addAttribute(permalink, "content")}>`}${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`}${image && renderTemplate`<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}>${permalink && renderTemplate`<meta property="twitter:url"${addAttribute(permalink, "content")}>`}${description && renderTemplate`<meta property="twitter:description"${addAttribute(description, "content")}>`}${image && renderTemplate`<meta property="twitter:image"${addAttribute(image, "content")}>`}`;
}, "/Users/roule/Code/Perso/blog/src/components/general/SeoHead.astro", undefined);

const $$ModeSwitch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="mode_switcher" class="group" title="Switch mode"> <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" class="w-8 h-auto fill-pacamara-secondary transition-all duration-300 hover:fill-pacamara-accent dark:fill-white dark:hover:fill-pacamara-accent"> <path d="m12 18a6 6 0 1 1 6-6 6 6 0 0 1 -6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0 -4-4z"></path><path d="m12 15a1 1 0 0 1 -1-1v-4a1 1 0 0 1 1-1 3 3 0 0 1 0 6z"></path><path d="m12 5a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1z"></path><path d="m17.66 7.34a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29z"></path><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"></path><path d="m18.36 19.36a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path><path d="m12 22a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1z"></path><path d="m5.64 19.36a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24z"></path><path d="m4 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"></path><path d="m6.34 7.34a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29z"></path></svg> </button> ${renderScript($$result, "/Users/roule/Code/Perso/blog/src/components/general/ModeSwitch.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/roule/Code/Perso/blog/src/components/general/ModeSwitch.astro", undefined);

const $$HamburgerButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="menu_toggle" class="block md:hidden text-white" type="button" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation"> <svg class="w-8 h-auto fill-pacamara-dark stroke-pacamara-dark transition-all duration-300 hover:fill-pacamara-accent hover:stroke-pacamara-accent dark:fill-pacamara-accent dark:stroke-pacamara-accent dark:hover:fill-pacamara-secondary dark:hover:stroke-pacamara-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> </button> ${renderScript($$result, "/Users/roule/Code/Perso/blog/src/components/general/HamburgerButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/roule/Code/Perso/blog/src/components/general/HamburgerButton.astro", undefined);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="list-none text-[14px] font-normal flex flex-initial flex-col md:flex-row gap-5"> <li> <a href="/" class="opacity-60 text-pacamara-primary hover:opacity-100 hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Home</a> </li> <li> <a href="/blog" class="opacity-60 text-pacamara-primary hover:opacity-100 hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Blog</a> </li> <li> <a href="/projects" class="opacity-60 text-pacamara-primary hover:opacity-100 hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Projects</a> </li> <li> <a href="/career" class="opacity-60 text-pacamara-primary hover:opacity-100 hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Career</a> </li> <li> <a href="/about-me" class="opacity-60 text-pacamara-primary hover:opacity-100 hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">About me</a> </li> </ul> </nav>`;
}, "/Users/roule/Code/Perso/blog/src/components/general/Navigation.astro", undefined);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navigation flex-1 hidden absolute top-0 left-0 w-full bg-pacamara-white dark:bg-pacamara-dark transition-all duration-300 p-7 pt-[112px] z-10 shadow-2xl" id="navigation_wrapper"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> <header class="container mx-auto max-w-screen-xl px-7 py-10 bg-white flex flex-initial flex-row gap-10 items-center justify-between transition-all duration-300 dark:bg-pacamara-dark relative z-20"> <div class="logo flex-none"> <a href="/" class="font-bold font-pacamara-space text-lg hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Delioos</a> </div> <div class="navigation flex-1 hidden md:block"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> <div class="relative flex flex-initial flex-row items-center gap-5"> ${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})} ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, {})} </div> </header>`;
}, "/Users/roule/Code/Perso/blog/src/components/general/Header.astro", undefined);

const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 320 512"> <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/facebook.astro", undefined);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 496 512"> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/github.astro", undefined);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/instagram.astro", undefined);

const $$Pinterest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 384 512"> <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/pinterest.astro", undefined);

const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 512 512"> <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/twitter.astro", undefined);

const $$Messenger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 512 512"> <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/messenger.astro", undefined);

const $$Dribbble = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 512 512"> <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/dribbble.astro", undefined);

const $$Mastodon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 512 512"> <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/mastodon.astro", undefined);

const $$Skype = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-auto h-[15px] transition-all duration-300 fill-pacamara-primary/60 hover:fill-pacamara-secondary dark:fill-pacamara-accent dark:hover:fill-pacamara-secondary" viewBox="0 0 512 512"> <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path> </svg>`;
}, "/Users/roule/Code/Perso/blog/src/components/icons/skype.astro", undefined);

const $$Astro$1 = createAstro("https://www.delioos.xyz");
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { socialUrl = false, socialType } = Astro2.props;
  const socialComponents = {
    github: $$Github,
    twitter: $$Twitter,
    facebook: $$Facebook,
    instagram: $$Instagram,
    pinterest: $$Pinterest,
    messenger: $$Messenger,
    dribbble: $$Dribbble,
    mastodon: $$Mastodon,
    skype: $$Skype
  };
  const SocialComponent = socialComponents[socialType];
  return renderTemplate`${socialUrl && renderTemplate`${maybeRenderHead()}<li><a${addAttribute(socialUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${socialType} link`, "aria-label")}>${renderComponent($$result, "SocialComponent", SocialComponent, {})}</a></li>`}`;
}, "/Users/roule/Code/Perso/blog/src/components/general/SocialIcon.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="w-full h-[1px] overflow-hidden gradient-line"></div> <div class="py-14 transition-all duration-300 bg-gradient-to-r from-pacamara-secondary/10 to-pacamara-accent/10 dark:bg-gradient-to-r dark:from-pacamara-accent/[2%] dark:to-pacamara-secondary/[5%]"> <footer class="container mx-auto max-w-screen-xl flex flex-initial lg:flex-row flex-col gap-10 items-center px-7"> <div class="logo flex-none"> <a href="/" class="font-bold font-pacamara-space text-lg hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent">Delioos</a> </div> <ul class="list-none text-[14px] font-normal flex flex-initial flex-row content-center items-center gap-x-[35px]"> ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.dribbble, "socialType": "dribbble" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.facebook, "socialType": "facebook" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.github, "socialType": "github" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.instagram, "socialType": "instagram" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.mastodon, "socialType": "mastodon" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.pinterest, "socialType": "pinterest" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.skype, "socialType": "skype" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "socialUrl": config?.social?.twitter, "socialType": "twitter" })} </ul> </footer> <div class="container mx-auto max-w-screen-xl px-7 mt-10 text-center text-sm text-pacamara-primary/60 dark:text-white/60"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Delioos. All rights reserved.</p> </div> </div></div>`;
}, "/Users/roule/Code/Perso/blog/src/components/general/Footer.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.delioos.xyz");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { postData } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" class="h-full"> <head><script>
        const setDarkMode = () => {
            if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                localStorage.darkMode = 'true';
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.darkMode = 'false';
            }
        }

        setDarkMode();
        // Runs on view transitions navigation
        document.addEventListener('astro:after-swap', setDarkMode);
    <\/script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="view-transition" content="same-origin"><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="./rss.xml">`, '<link rel="preload" href="/fonts/inter-v12-latin_latin-ext-regular.woff2" as="font" crossorigin><link rel="preload" href="/fonts/inter-v12-latin_latin-ext-700.woff2" as="font" crossorigin><link rel="preload" href="/fonts/space-grotesk-v15-latin_latin-ext-regular.woff2" as="font" crossorigin><link rel="preload" href="/fonts/space-grotesk-v15-latin_latin-ext-600.woff2" as="font" crossorigin><link rel="preload" href="/fonts/space-grotesk-v15-latin_latin-ext-700.woff2" as="font" crossorigin>', '<link rel="icon" type="image/jpeg" href="/delioos.jpg"><link rel="apple-touch-icon" href="/delioos.jpg">', '</head> <body class="flex flex-col min-h-full font-pacamara-inter transition-all duration-300 bg-white dark:bg-pacamara-dark"> ', ' <main class="flex-1"> ', " </main> ", " </body></html>"])), renderComponent($$result, "SeoHead", $$SeoHead, { "postData": postData }), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/roule/Code/Perso/blog/src/layouts/Base.astro", undefined);

export { $$Base as $ };
