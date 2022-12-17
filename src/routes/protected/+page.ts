import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	// Passing data to +page.svelte
	return { ...data };
};
