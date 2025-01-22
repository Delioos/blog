import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({image}) => z.object({
        title: z.string(),
        intro: z.string(),
        tag: z.array(z.string()),
        image: image().optional(),
        author: reference('author'),
        pubDate: z.date(),
        type: z.string().optional(),
    }),
});

const pageCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date().optional(),
        type: z.string().optional(),
    }),
});

const authorCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: ({image}) => z.object({
        displayName: z.string(),
        bio: z.string().optional(),
        photo: image().optional()
    }),
});

const projectCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: image().optional(),
        github: z.string().optional(),
        demo: z.string().optional(),
        featured: z.boolean().default(false),
        pubDate: z.date(),
    }),
});

const careerCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        type: z.enum(['work', 'education', 'certification']),
        description: z.array(z.string()),
    }),
});

export const collections = {
    'blog': blogCollection,
    'author': authorCollection,
    'page': pageCollection,
    'project': projectCollection,
    'career': careerCollection,
};
