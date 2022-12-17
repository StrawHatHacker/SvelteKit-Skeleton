import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session?.id) throw redirect(302, '/login');

	// Passing data to +page.ts
	return {};
};
