import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  index: z.number(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  lastUpdated: z.string(), // z.date(),
  published: z.boolean().optional(),
})

const chapterCollection = defineCollection({ 
  schema: baseSchema.extend({
    part: z.union([z.literal("1-introduction"), z.literal("2-dl"), z.literal("3-safety"), z.literal("4-appendix")]),
    headings: z.array(z.string()),
    authors: z.array(z.record(z.string())),
  }),
});

const partCollection = defineCollection({ 
  schema: baseSchema
});

export const collections = {
  'chapter': chapterCollection,
  'part': partCollection,
};