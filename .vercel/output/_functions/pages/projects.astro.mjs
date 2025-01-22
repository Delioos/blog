/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_DuJbMrHn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/config_BcTNfR7q.mjs';
import { $ as $$Base } from '../chunks/Base_B6C5cC45.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Rie6pq5m.mjs';
import { $ as $$Tag } from '../chunks/Tag_CAwToemE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.delioos.xyz");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white dark:bg-pacamara-dark rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"> ${project.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": project.data.image, "alt": project.data.title, "width": 800, "height": 400, "class": "w-full h-48 object-cover" })}`} <div class="p-6"> <h3 class="text-2xl font-bold text-pacamara-dark dark:text-white mb-2"> ${project.data.title} </h3> <p class="text-pacamara-primary/70 dark:text-white/70 mb-4"> ${project.data.description} </p> <div class="flex flex-wrap gap-2 mb-4"> ${renderComponent($$result, "Tag", $$Tag, { "tags": project.data.tags })} </div> <div class="flex gap-4"> ${project.data.github && renderTemplate`<a${addAttribute(project.data.github, "href")} target="_blank" rel="noopener noreferrer" class="text-pacamara-accent hover:text-pacamara-dark dark:hover:text-white transition-colors">
GitHub
</a>`} ${project.data.demo && renderTemplate`<a${addAttribute(project.data.demo, "href")} target="_blank" rel="noopener noreferrer" class="text-pacamara-accent hover:text-pacamara-dark dark:hover:text-white transition-colors">
Live Demo
</a>`} </div> </div> </article>`;
}, "/Users/roule/Code/Perso/blog/src/components/projects/ProjectCard.astro", undefined);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("project");
  const featuredProjects = projects.filter((p) => p.data.featured);
  const otherProjects = projects.filter((p) => !p.data.featured);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto max-w-screen-lg px-7 py-10"> <h1 class="text-4xl font-bold text-pacamara-dark dark:text-white mb-8">Featured Projects</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> <h2 class="text-3xl font-bold text-pacamara-dark dark:text-white mb-8">Other Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${otherProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section> ` })}`;
}, "/Users/roule/Code/Perso/blog/src/pages/projects.astro", undefined);

const $$file = "/Users/roule/Code/Perso/blog/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
