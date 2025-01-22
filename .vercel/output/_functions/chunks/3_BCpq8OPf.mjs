import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Smol post and reflection on the purpose",
  "pubDate": "2024-09-07T00:00:00.000Z",
  "intro": "grind isn't sexy",
  "tag": ["progress"],
  "author": "delioos"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Smol post today."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Heavy progress, built a telegram  bot (can’t disclose much rn but I will make a public version) for approximately 6 hours."
      }), "\n", createVNode(_components.li, {
        children: "Hit the gym with fren"
      }), "\n", createVNode(_components.li, {
        children: "Studied financial market for 1h30"
      }), "\n", createVNode(_components.li, {
        children: "Read about the notion of liberty in the  spiritual life of a christian monk."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It’s interesting to see that hard work is key for many people. Not that the goal is everything, but rather that the journey is paramount. However, without purpose, work is nothing short of torture. I relate strongly to this because building for myself and visualising the impact on my future has brought me joy. We must follow a vision or purpose, but in the end, when this purpose is achieved, the most memorable part is the journey itself. If Jesus were simply suffering for the sake of it, Christians would merely worship outright masochism. But the suffering and pain endured were borne to absolve the sins of all humanity. The beauty resides in the sacrifice, its finality, and its effect on others"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Purpose is everything"
      }), " but without hard work, it’s just a bottomless pit that risks emptying the souls of inactive dreamers, so make the hard work an easy process."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "dreams comes true when we stop sleeping"
      })
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

const url = "src/content/blog/3.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
