import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Software Engineer",
  "company": "Altitude",
  "location": "Remote",
  "startDate": "2024-07-01T00:00:00.000Z",
  "type": "work",
  "description": ["Engineered high-performance blockchain indexing system in Rust to process real-time swap logs and market events", "Designed architecture and implemented initial routes for market insights API using Actix-Web and Tokio, including custom debugging middleware for request handling", "Optimized 1TB+ PostgreSQL database through strategic partitioning and index restructuring, resulting in significant query performance improvements", "Developed comprehensive CI/CD pipeline with Docker Compose, including automated deployment scripts for Ubuntu setup, Rust compilation optimization, and distributed system configuration (PostgreSQL, Redis)"]
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

const url = "src/content/career/altitude.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/career/altitude.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/career/altitude.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
