import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh-cn', 'en']).default('zh-cn'),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['zh-cn', 'en']).default('zh-cn'),
  }),
});

export const collections = {
  posts,
  pages,
};