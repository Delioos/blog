import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "EVM deep dive and bot progress",
  "pubDate": "2024-09-10T00:00:00.000Z",
  "intro": "A productive day balancing tech and creativity",
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
      children: "Smol post, but big moves:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Dove deep into EVM intricacies. Devoured two articles from Noxx’s substack:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Completed part 3"
          }), "\n", createVNode(_components.li, {
            children: "Finished part 4 + took some notes and settled up an obsidian vault\nconcl: evm goes brr"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Made massive pushes on the bot project:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Polished the API, making it clean and well-refactored with consistent HTTP responses throughout"
          }), "\n", createVNode(_components.li, {
            children: "Kicked off the notification manager development"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Took a breather to read an article by gp (gp me manque)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Checked out the Solana rareskill. Fascinating to see innovations in this ever-evolving ecosystem."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Tomorrow’s looking just as exciting. Still so much to explore and create."
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

const url = "src/content/blog/4.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
