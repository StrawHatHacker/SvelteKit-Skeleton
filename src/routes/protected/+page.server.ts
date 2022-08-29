import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchSession } from '../../lib/utils/sessionHandler';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session?.id || !fetchSession(locals.session.id)) throw redirect(302, '/login');

	console.log('1. This is executed on the server');

	// Passing data to +page.ts
	return {};
}
