import { json } from '@sveltejs/kit';
import { deleteSession } from '$lib/utils/sessionHandler';
import cookie from 'cookie';
import { PUBLIC_ENVIRONMENT } from '$env/static/public';

export async function POST({ request }) {
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	deleteSession(cookies.session_id);

	return json({}, {
		headers: {
			'Set-Cookie': cookie.serialize('session_id', null, {
				httpOnly: true,
				sameSite: 'lax',
				secure: false,
				path: '/',
				domain: PUBLIC_ENVIRONMENT === 'DEV' ? '' : "DOMAIN_HERE",
				expires: new Date()
			})
		}
	});
}
