// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vosbek.github.io',
	base: '/dev-8125',
	trailingSlash: 'always',
	image: {
		service: { entrypoint: 'astro/assets/services/noop' }
	},
	integrations: [
		starlight({
			title: 'AI Developer Tools Intelligence',
			description: 'Comprehensive intelligence database for AI developer tools - 250+ tools across 18+ categories with strategic insights and technical analysis.',
			favicon: '/favicon.svg',
			pagefind: false,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vosbek/dev-8125' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '🎯 Executive Dashboard',
					items: [
						{ label: 'Market Overview', slug: 'executive/overview' },
					],
				},
				{
					label: '🔧 Developer Resources',
					items: [
						{ label: 'Quick Start Guide', slug: 'developer/quickstart' },
					],
				},
				{
					label: '🛠️ Core SDLC Tools',
					items: [
						{ label: 'MCP Servers', slug: 'tools/mcp-servers' },
					],
				},
				{
					label: '💡 Innovation & Future',
					items: [
						{ label: 'Innovation Features', slug: 'innovation/features' },
					],
				},
				{
					label: '📊 Research & Analysis',
					items: [
						{ label: 'Comprehensive Research', slug: 'research/comprehensive' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/vosbek/dev-8125/edit/main/',
			},
		}),
	],
});
