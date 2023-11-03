import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {

	// We don't need to check if the session is valid here.
	// If it is valid hooks.server.ts will give us a "session.id" below.
	// If it is not present here that means the user isn't authenticated,
	// and we can handle what happens with that information here.
	if (!locals.session?.id) throw redirect(307, '/login');

	// Passing data to +page.ts
	return { session: locals.session.id };
};
