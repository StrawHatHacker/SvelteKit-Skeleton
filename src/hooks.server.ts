import { fetchSession } from '$lib/utils/sessionHandler';
import { MONGO_URI } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { themes } from '$lib/utils/themes';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
await mongoose.connect(MONGO_URI);

export const handle = (async ({ event, resolve }) => {
	const sessionID = event.cookies.get('session_id');;
	const theme = event.cookies.get('theme');

	event.locals.session = null;

	if (sessionID) {
		const session = fetchSession(sessionID);
		if (session)
			event.locals.session = { id: sessionID };
	}

	if (theme && themes.includes(theme)) return await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('data-theme=""', `data-theme="${theme}"`)
	})

	return await resolve(event);
}) satisfies Handle;
