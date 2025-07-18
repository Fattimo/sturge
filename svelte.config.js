import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base:
				process.argv.includes('dev') || !process.env.REPO_NAME ? `` : `/${process.env.REPO_NAME}`
		}
	}
};

export default config;
