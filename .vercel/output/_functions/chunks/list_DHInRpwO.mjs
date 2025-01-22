import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Software Engineer Intern",
  "company": "Luxembourg Institute of Science and Technology",
  "location": "Esch-sur-Alzette, Luxembourg",
  "startDate": "2024-03-01T00:00:00.000Z",
  "endDate": "2024-07-31T00:00:00.000Z",
  "type": "work",
  "description": ["Designed and implemented an intelligent routing algorithm for autonomous shuttles to optimize passenger pickups based on real-time demand and time constraints", "Built a full-stack digital twin visualization system using TypeScript:", "Developed NestJS backend for real-time shuttle data processing and route optimization", "Created responsive NextJS frontend dashboard for live monitoring of shuttle fleet", "Implemented interactive map visualization showing real-time shuttle positions and routing decisions", "Built historical data viewer for analyzing past routes and system performance", "Led deployment initiatives and knowledge sharing sessions to ensure successful system adoption"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/career/list.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/career/list.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/career/list.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
