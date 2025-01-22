import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Progress and Reflections: A Day of Accomplishments",
  "pubDate": "2024-09-12T00:00:00.000Z",
  "intro": "From drafts to job insights, every step counts",
  "tag": ["progress"],
  "author": "delioos"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Another day of progress, and I’m feeling accomplished:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Finished a draft of the wallet tracker. It’s coming together nicely, and I’m excited to refine it further."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Read “Get a Job” de Thuna (cool commmunity made by the goat on how to make it to the corpo realm. It provided some valuable insights that I already used (writing a gud cv is a great start)"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Caught up on some emails."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Explored bullish projects that I can add to my CV. Definitely lacking huge accomplishments in the web3 space, hackaton will be on top of the experience in a few months I hope."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Read another article by gp."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Studied one LeetCode pattern. Progress is progress, no matter how small!"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Put some work on the wallet tracker."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Every small step adds up, and I’m looking forward to what tomorrow brings!"
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

const url = "src/content/blog/6.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/6.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/6.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
