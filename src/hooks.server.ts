import { fetchSession } from '$lib/utils/sessionHandler';
import { MONGO_URI } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import mongoose from 'mongoose';
import cookie from 'cookie';

mongoose.set('strictQuery', false);
await mongoose.connect(MONGO_URI);

export const handle: Handle | unknown = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	if (cookies['session_id']) {
		const session = fetchSession(cookies['session_id']);

		if (session) {
			event.locals.session = { id: cookies['session_id'] };
			return await resolve(event);
		}
	}

	event.locals.session = null;
	return await resolve(event);
};
