import { defineCollection, z } from 'astro:content';

const presentationSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  marp: z.boolean(),
  keywords: z.string().optional(),
  url: z.string().optional(),
  image: z.string().optional(),
  theme: z.string().optional(),
  updatedDate: z.coerce.date().optional(),
});
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export type PresentationSchema = z.infer<typeof presentationSchema>;
export type BlogSchema = z.infer<typeof blogSchema>;

const presentationCollection = defineCollection({
  type: 'content',
  schema: presentationSchema
});
const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema
});

export const collections = {
  'presentation': presentationCollection,
  'blog': blogCollection,
};
