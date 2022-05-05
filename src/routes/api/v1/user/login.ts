import { createSession } from '$lib/utils/sessionHandler';
import hashPassword from '$lib/utils/hashPassword';
import { UserModel } from '$lib/models/user';
import cookie from 'cookie';

interface IBody {
	email: string;
	password: string;
}

export async function post({ request }) {
	const body: IBody = await request.json();

	const User = await UserModel.findOne({
		email: body.email,
		password: hashPassword(body.password)
	});

	if (!User)
		return {
			status: 400,
			body: { error: 'Invalid email or password' }
		};

	const newSessionId = createSession(User._id);

	return {
		status: 200,
		body: {},
		headers: {
			'Set-Cookie': cookie.serialize('session_id', newSessionId, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: true,
				maxAge: 60 * 60 * 24 * 7 // one week
			})
		}
	};
}
