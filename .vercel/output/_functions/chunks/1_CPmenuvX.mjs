import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "welcome to my blog",
  "pubDate": "2024-09-05T00:00:00.000Z",
  "intro": "First daily post of a (hopefully) long-lasting blog",
  "tag": ["philo", "dev"],
  "author": "delioos"
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
      children: "Hi there, welcome to my blog!\nThis isn’t intended to be a professional page nor a concentrate of tutorials, but rather a place to reflect on my life and my journey.\nI will try to keep it short and avoid to spread too wide, the writing will be more like a daily review of my progress in the fields I’m trying to break into / the aspects of life I wanna explore!\nthanks for reading!"
    }), "\n", createVNode(_components.p, {
      children: "Sept 5, still in Nha trang.\nSeeing my irl friends going back to school was kind of a smol internal win at a first glance… “that’s it I’m the shadowy crypto 21yo hustling from a skypool” but the truth is much more subtle."
    }), "\n", createVNode(_components.p, {
      children: "Being on my own makes me feel everything more intensely:\nI deeply savor the satisfaction of finishing a chapter, feel so grateful for eating a sandwich paid by the money I worked for.\nI enjoy 10x more the shots of dopamine when I send pull request.\nI feel in control on many aspects of my life and that brings me a lot of internal peace."
    }), "\n", createVNode(_components.p, {
      children: "But it also takes away all my excuses, the feeling of loneliness is heightened, the regrets of making a bad trade as well, and especially, every time I tell myself I could have been more efficient or worked longer, I’m the only one to blame."
    }), "\n", createVNode(_components.p, {
      children: "I guess it’s healthy to look at yourself in the mirror, detached from any influence.\nMaybe my dream of discovering the world was never more than a desire to discover myself!"
    }), "\n", createVNode(_components.p, {
      children: "Otherwise, concretely, I continue to work on an internal project for my DAO (some blockchain rust tooling), I’m sharpening my general (and technical) knowledge on software engineering: 2 chapters of DDIA, 1 leetcode, and some repo reading/ ytb."
    }), "\n", createVNode(_components.p, {
      children: "On a physical level, I’m still trying to regulate my body composition: it was the first day of a 12 weeks coaching to help me with the shred and go from about 15% BF to more or less 10%."
    }), "\n", createVNode(_components.p, {
      children: "Without elaborating on my deep reflections, I feel a bit like Batman going to train with Ra’s al Ghul. I hope to open the spiritual side of my life, while honing my weapons."
    }), "\n", createVNode(_components.p, {
      children: "still enjoying the beach tho :’)"
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

const url = "src/content/blog/1.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
