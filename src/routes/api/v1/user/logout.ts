import { deleteSession } from '$lib/utils/sessionHandler';
import cookie from 'cookie';

export async function post({ request }) {
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	deleteSession(cookies.session_id);

	return {
		status: 200,
		body: {},
		headers: {
			'Set-Cookie': cookie.serialize('session_id', null, {
				path: '/',
				sameSite: 'strict',
				expires: new Date()
			})
		}
	};
}
