import { extractFromSvelteConfig, } from 'vitest-svelte-kit';

// TODO Since sveltekit requires a vite, tests need to be hacked to work.
// TODO When vitest fixes this, update code!
export default extractFromSvelteConfig({
    kit: {
        vite: {
            test: {
                environment: 'jsdom',
            }
        },
    }
});