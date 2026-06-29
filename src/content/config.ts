import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		stack: z.array(z.string()),
		repo: z.string().url().optional(),
		demo: z.string().url().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects };
