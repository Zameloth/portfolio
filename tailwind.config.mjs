/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			slate: {
				50: '#f8fafc',
				100: '#f1f5f9',
				200: '#e2e8f0',
				300: '#cbd5e1',
				400: '#94a3b8',
				500: '#64748b',
				600: '#475569',
				700: '#334155',
				800: '#1e293b',
				900: '#0f172a',
				950: '#020617',
			},
		},
		extend: {
			backgroundColor: {
				dark: '#0f172a',
				'dark-secondary': '#1e293b',
			},
			textColor: {
				primary: '#f1f5f9',
				secondary: '#cbd5e1',
			},
		},
	},
	plugins: [],
};
