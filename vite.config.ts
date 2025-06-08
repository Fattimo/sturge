import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const BASE_PATH =
	process.argv.includes('dev') || !process.env.REPO_NAME ? '' : `/${process.env.REPO_NAME}`;

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: `${BASE_PATH}/:path(.*)?`,
					localized: [
						['jp', `${BASE_PATH}/jp/:path(.*)?`],
						['en', `${BASE_PATH}/:path(.*)?`]
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['jp', '/jp/:path(.*)?'],
						['en', '/:path(.*)?']
					]
				}
			]
		})
	]
});
