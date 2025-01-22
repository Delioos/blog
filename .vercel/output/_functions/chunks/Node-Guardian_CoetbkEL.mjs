import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Node Guardian",
  "description": "Achieved top 100 ranking on Node Guardians, a world-class web3 educational platform, demonstrating advanced expertise in Solidity smart contracts, low-level EVM optimization, and theoretical blockchain concepts through complex technical challenges.",
  "featured": false,
  "tags": ["Ethereum", "Solidity", "Huff"],
  "demo": "https://nodeguardians.io/character/delioos",
  "pubDate": "2024-10-20T00:00:00.000Z"
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

const url = "src/content/project/Node-Guardian.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/project/Node-Guardian.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/project/Node-Guardian.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
