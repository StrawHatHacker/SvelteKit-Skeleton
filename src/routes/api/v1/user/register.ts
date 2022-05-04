import { UserModel } from '$lib/models/user';
import hashPassword from '$lib/utils/hashPassword';

interface IBody {
	email: string;
	password: string;
	username: string;
}

export async function post({ request }) {
	const body: IBody = await request.json();

	if (await UserModel.getUserByEmail(body.email))
		return {
			status: 400,
			body: { error: 'Email already exists' }
		};

	if (await UserModel.getUserByUsername(body.username))
		return {
			status: 400,
			body: { error: 'Username already exists' }
		};

	await UserModel.createUser(body.email, hashPassword(body.password), body.username);

	return {
		status: 200,
		body: {}
	};
}
