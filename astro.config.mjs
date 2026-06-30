// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://theo-eloy.fr',
	output: 'static',
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: 'fr',
				locales: {
					fr: 'fr-FR',
					en: 'en-US',
				},
			},
		}),
	],
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
