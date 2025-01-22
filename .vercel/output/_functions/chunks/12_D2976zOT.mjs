import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Progress and Reflections: A Day of Accomplishments",
  "pubDate": "2024-09-18T00:00:00.000Z",
  "intro": "back at it",
  "tag": ["philo", "news"],
  "author": "delioos"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "travel-update",
    "text": "travel update"
  }, {
    "depth": 1,
    "slug": "career-update",
    "text": "Career update"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "lacked  bit on blogging, no specifics reasons, just had to move many times and kept my time for pushing the projects (and watiching a bit of bleach ngl). But I’m back at it!"
    }), "\n", createVNode(_components.h1, {
      id: "travel-update",
      children: "travel update"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "still in vietnam\nDidn’t move really far, but I did get to see new spots in Nha Trang. Really enjoying the sea view tbh. 1e milk coffee + palms tree really are fullfilling."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "met the buddies\nFinally got to meet the ceo + reunited (almost) the whole Altitude team.\nVery happy to work with such goated people tbh."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "next steps\nplanning to go to the north, Hanoi was delayed due to typhoon. But I really hope to see the capital + Ha Long Bay. I’m really excited tbh."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "career-update",
      children: "Career update"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Wallet tracker should be up and running in less than 48h"
      }), "\n", createVNode(_components.li, {
        children: "secret project is almost up too and I’m hyped to launch new features to monetize it"
      }), "\n", createVNode(_components.li, {
        children: "Built a solid  trajectory for the 3/4 next years. (Skillset will be everything in the web3 jungle) - in three words: sol and rust"
      }), "\n"]
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

const url = "src/content/blog/12.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/12.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/12.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
