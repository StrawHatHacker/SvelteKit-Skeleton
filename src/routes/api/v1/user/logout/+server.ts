import { json } from '@sveltejs/kit';
import { deleteSession } from '$lib/utils/sessionHandler';
import cookie from 'cookie';

export async function POST({ request }) {
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	deleteSession(cookies.session_id);

	return json({}, {
		headers: {
			'Set-Cookie': cookie.serialize('session_id', null, {
				path: '/',
				sameSite: 'strict',
				expires: new Date()
			})
		}
	});
}
