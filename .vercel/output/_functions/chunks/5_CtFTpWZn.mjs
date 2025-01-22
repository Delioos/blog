import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Solana, Monet, and Code: A Day of Diverse Learning",
  "pubDate": "2024-09-11T00:00:00.000Z",
  "intro": "Balancing tech skills with artistic appreciation",
  "tag": ["progress"],
  "author": "delioos"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Another day, another smol post packed with progress:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Kicked off day one of 60 days of Solana. The journey of a thousand miles begins with a single  “hello world”"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Finished the novel about Monet."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Pushed code like there’s no tomorrow. The git log is looking healthier than my sleep schedule."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Rustlings: tackled one exercise per chapter. Rust is starting to feel less like wrestling and more like dancing."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Dove into 2 LeetCode patterns."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Anki’d my way through some Italian."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Devoured another article by GP."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Made solid progress on the subscribe manager:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Implemented ", createVNode(_components.code, {
              children: "get_subscribers(wallet: String) -> Vec<i32>"
            }), "."]
          }), "\n", createVNode(_components.li, {
            children: "Pondering whether to denormalize for that sweet performance boost. Future me problem?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Past generations studied the art of war and politics to bring peace, so their sons could study science and finance to create generational wealth, so their sons could become writers and painters. The beauty of today’s world is that this cycle is achievable in a single lifespan. Moreover, ‘war’ - finance and science - and a certain form of art can cohabitate through software engineering."
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

const url = "src/content/blog/5.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/5.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
