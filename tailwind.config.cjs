/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			'gradient-dashed': '20px 2px, 100% 2px',
		},
		extend: {
			boxShadow: {
				'pacamara-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'pacamara-inter': ['"Inter"', 'sans-serif'],
				'pacamara-space': ['"Space Grotesk"', 'sans-serif'],
				'mono': ['JetBrains Mono', 'IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'serif': ['Georgia', 'system-ui', 'serif'],
			},
			colors: {
				'brutal': {
					'black': '#000000',
					'dark': '#1a1a1a',
					'light': '#f5f5f5',
					'white': '#ffffff',
					'gray': '#e0e0e0',
					'nav': '#1a1a1a',
				},
				'pacamara-primary': '#003049',
				'pacamara-secondary': '#B2A4FF',
				'pacamara-accent': '#FFB4B4',
				'pacamara-dark': '#282A36',
				'pacamara-white': '#ffffff',
			},
			fontSize: {
				'brutal-title': ['clamp(72px, 8vw, 96px)', {
					lineHeight: '0.9',
					letterSpacing: '-0.02em',
					fontWeight: '900',
				}],
				'brutal-meta': ['11px', {
					lineHeight: '1.2',
					textTransform: 'uppercase',
				}],
				'brutal-content': ['17px', {
					lineHeight: '1.6',
				}],
				'brutal-nav': ['14px', {
					lineHeight: '1.0',
				}],
			},
			aspectRatio: {
				'9/10': '9 / 16',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
