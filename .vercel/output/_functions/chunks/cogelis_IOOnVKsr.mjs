import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Data Engineering Intern",
  "company": "Cogelis",
  "location": "Nancy, France",
  "startDate": "2023-06-01T00:00:00.000Z",
  "endDate": "2023-08-31T00:00:00.000Z",
  "type": "work",
  "description": ["Developed a Power BI solution to manage internal resources for a priced support system, integrating data from 4 distinct sources into a centralized data warehouse architecture", "Optimized data flows and processing operations, reducing dashboard refresh time from several minutes to seconds", "Created comprehensive business insights through dynamic dashboards, enabling real-time monitoring of support system metrics"]
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

const url = "src/content/career/cogelis.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/career/cogelis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/career/cogelis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
