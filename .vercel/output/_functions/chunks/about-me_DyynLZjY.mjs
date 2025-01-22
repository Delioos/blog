import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "About me",
  "intro": "Delios, the man, the myth (mr nobody)"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Hey there! My journey into tech started like many others - fascinated by hackers and the idea of bending computers to my will. At 16, I was building my first games (the classic Snake being one of them), but it wasn’t until I tumbled down the cypherpunk rabbit hole in 2021 that I truly fell in love with programming. The crypto world opened my eyes to a whole new paradigm of what’s possible with code."
    }), "\n", createVNode(_components.p, {
      children: "Currently, I’m building low-latency market insight products at Altitude, working with Rust, TypeScript and PostgreSQL to optimize distributed systems. I focus on creating scalable solutions that process real-time market data with maximum efficiency - the kind of challenge that combines blazing speed with reliable decentralization."
    }), "\n", createVNode(_components.p, {
      children: "I believe decentralization is the next evolution in building trust at scale. Deep in my low-level programming journey, I’m mastering optimization through Huff and Yul while unraveling the EVM’s inner workings. This exploration of distributed systems and DeFi protocols feeds my curisoity and new passion for performance - whether it’s optimizing database queries or crafting gas-efficient smart contracts."
    }), "\n", createVNode(_components.p, {
      children: "When I’m not coding, you might find me backpacking through south east asia or hiking somewhere in france."
    }), "\n", createVNode(_components.p, {
      children: "I’m always open to new opportunities and collaborations. If you’re working on something that pushes the boundaries of what’s possible, I’d love to connect."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/page/about-me.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/page/about-me.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/page/about-me.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
