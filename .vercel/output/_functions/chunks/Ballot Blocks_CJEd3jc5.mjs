import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ballot Block",
  "description": "Dynamic DAO managment tool to manage proposals and voting, built on Ethereum with gas efficiency and user experience in mind",
  "featured": true,
  "tags": ["Go", "Solidity", "Huff", "Typescript", "CI/CD"],
  "github": "https://github.com/delioos/BallotBlock",
  "pubDate": "2025-01-21T00:00:00.000Z"
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

const url = "src/content/project/Ballot%20Blocks.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/project/Ballot Blocks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/project/Ballot Blocks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
