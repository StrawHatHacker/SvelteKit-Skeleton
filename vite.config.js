import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {}
		}
	},
	build: {
		target: 'esnext'
	},
	define: {
		global: {}
	}
};

export default config;
