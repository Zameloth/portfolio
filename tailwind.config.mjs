/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
