import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				description: z.string(),
				stack: z.array(z.string()),
				repo: z.string().url().optional(),
				demo: z.string().url().optional(),
				date: z.coerce.date(),
				cover: image().optional(),
				coverAlt: z.string().optional(),
			})
			.refine((data) => !data.cover || !!data.coverAlt, {
				message: 'coverAlt is required when cover is set',
				path: ['coverAlt'],
			}),
});

export const collections = { projects };
