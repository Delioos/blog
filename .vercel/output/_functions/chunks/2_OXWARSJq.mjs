import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DuJbMrHn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Inspirations and self-awareness",
  "pubDate": "2024-09-06T00:00:00.000Z",
  "intro": "Day in the life",
  "tag": ["progress"],
  "author": "delioos"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "what-ive-done-today",
    "text": "What I’ve done today"
  }, {
    "depth": 2,
    "slug": "designing-data-intensive-applications---storage-system-implementations",
    "text": "Designing Data-Intensive Applications -> Storage System Implementations"
  }, {
    "depth": 2,
    "slug": "ofas",
    "text": "OFAs"
  }, {
    "depth": 2,
    "slug": "demystifying-zks",
    "text": "Demystifying ZKs"
  }, {
    "depth": 2,
    "slug": "how-to-build-a-brand",
    "text": "How to build a brand"
  }, {
    "depth": 2,
    "slug": "a-bit-of-algorithm-work",
    "text": "A bit of algorithm work"
  }, {
    "depth": 2,
    "slug": "schedule",
    "text": "Schedule"
  }, {
    "depth": 1,
    "slug": "thoughts",
    "text": "Thoughts"
  }, {
    "depth": 2,
    "slug": "the-importance-of-blogging",
    "text": "The importance of blogging"
  }, {
    "depth": 2,
    "slug": "identity-as-the-cornerstone-of-progress",
    "text": "Identity as the cornerstone of progress"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "what-ive-done-today",
      children: "What I’ve done today"
    }), "\n", createVNode(_components.h2, {
      id: "designing-data-intensive-applications---storage-system-implementations",
      children: "Designing Data-Intensive Applications -> Storage System Implementations"
    }), "\n", createVNode(_components.p, {
      children: "Hash index"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["B-tree index DB storage structure for fast reads\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Leaf search for updates ensuring O(log n) depth in a tree with ", createVNode(_components.em, {
              children: "n"
            }), " keys"]
          }), "\n", createVNode(_components.li, {
            children: "A four-level tree of 4KB with a branching factor of 500 can store up to 256 TB"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "LSM trees"
      }), "\n", createVNode(_components.li, {
        children: "How to benchmark a storage engine"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "On another note → it’s mainly use-case dependent, knowing whether we need to optimise for the highest percentile or not, for example"
    }), "\n", createVNode(_components.h2, {
      id: "ofas",
      children: "OFAs"
    }), "\n", createVNode(_components.p, {
      children: "Read about order flow auctions in the Atlas Labs whitepaper. I’m discovering a whole new paradigm after thinking that AMMs were the key to DeFi."
    }), "\n", createVNode(_components.h2, {
      id: "demystifying-zks",
      children: "Demystifying ZKs"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Generating proofs might become easier than ever (watched a ", createVNode(_components.a, {
            href: "https://youtu.be/6yVNyuY7lDY?si=VIlCteeVW_ebTfi1",
            children: "cool video about Rust running on zkVM"
          }), ")"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "The biggest obstacle for devs regarding ZKs is their fear of maths. I had this cognitive bias that if it allows running large systems, then it must be unattainable for me, and I never tried to understand it. (Not that I’m an expert on the subject now, but I’m no longer terrified at the idea of delving into cryptology)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "It’s actually quite cool, and I’m bullish on Aztec"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-build-a-brand",
      children: "How to build a brand"
    }), "\n", createVNode(_components.p, {
      children: "Read a blog post from Degathchi (will retrieve the link later) about building a brand.\nSo I started this blog and deployed it ^^"
    }), "\n", createVNode(_components.h2, {
      id: "a-bit-of-algorithm-work",
      children: "A bit of algorithm work"
    }), "\n", createVNode(_components.p, {
      children: ["Did a small LeetCode challenge and built an elegant solution to check parenthesis pair integrity (just the integrity of the string).\nBy the way, if you’re interested in my LeetCode progress, here’s ", createVNode(_components.a, {
        href: "https://leetcode.com/u/Delioos/",
        children: "my LeetCode page"
      }), ".\nAnd my personal notes / solutions are in ", createVNode(_components.a, {
        href: "https://github.com/Delioos/awesome-leetcode-resources",
        children: "this repo"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "schedule",
      children: "Schedule"
    }), "\n", createVNode(_components.p, {
      children: "I’ve set up a medium-term plan (over 6 months) to try and complete several projects in parallel.\nThese ambitions have then been transformed into a daily “macro” plan. This means I have work time slots for projects every day. The goal isn’t to create a military-style schedule and stress about time slots, but rather to have a direction to guide me."
    }), "\n", createVNode(_components.h1, {
      id: "thoughts",
      children: "Thoughts"
    }), "\n", createVNode(_components.p, {
      children: "I’ve drawn some rather amusing conclusions from my first day, so I think this section isn’t superfluous"
    }), "\n", createVNode(_components.h2, {
      id: "the-importance-of-blogging",
      children: "The importance of blogging"
    }), "\n", createVNode(_components.p, {
      children: "One of the great frustrations I regularly experience is the feeling that I could always do more."
    }), "\n", createVNode(_components.p, {
      children: "And in writing this article upon waking up on September 7th, I can officially say that I have done more. Writing is truly a great way to be accountable. Not that I live for the cameras, but last night, as I was about to go to bed, I stepped back and realised that the man I wanted to become couldn’t end his day with so few boxes ticked."
    }), "\n", createVNode(_components.h2, {
      id: "identity-as-the-cornerstone-of-progress",
      children: "Identity as the cornerstone of progress"
    }), "\n", createVNode(_components.p, {
      children: "It’s enough to take a deep breath and realise that to be a good worker, one must work. I’ve always been a big dreamer and had a fairly defined vision, but pursuing a vision is different. It requires even deeper introspection than knowing what you’d like to do or become.\nIt might seem absurd to reflect on this, “if you really love what you do, you wouldn’t need to think about it”.\nI can understand that, but I’m deeply convinced that our animal nature pushes us to seek comfort.\nTicking boxes and working towards a very long-term goal, even when we’re tired, even when we have doubts, is what separates us from the animal that hunts on instinct and flees at the first sign of danger."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Survival is the enemy of life."
      })
    }), "\n", createVNode(_components.p, {
      children: "Some people have probably accomplished a lot by being simply driven by their passion at every moment. But in my case, I know that my momentary desires don’t necessarily align with the path leading to my deepest dreams.\n“If we don’t know exactly what we can do to move in the right direction, we can at least avoid moving backwards.”\nI quite like the concept of anti-vision as it greatly simplifies introspection by allowing us to freely untick the boxes that don’t please us."
    }), "\n", createVNode(_components.p, {
      children: "Anyway, I’m quite pleased with the work session from 11:30 PM to 2:30 AM."
    }), "\n", createVNode(_components.p, {
      children: "Thanks to Alto for the new normal state and the reflection on identity."
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

const url = "src/content/blog/2.mdx";
const file = "/Users/roule/Code/Perso/blog/src/content/blog/2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/roule/Code/Perso/blog/src/content/blog/2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
