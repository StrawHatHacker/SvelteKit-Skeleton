import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		target: 'esnext'
	},
	define: {
		global: {}
	}
};

export default config;
