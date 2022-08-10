import { UserModel } from '$lib/models/user';
import hashPassword from '$lib/utils/hashPassword';

interface IBody {
	email: string;
	password: string;
}

export async function POST({ request }) {
	const body: IBody = await request.json();

	if (await UserModel.getUserByEmail(body.email))
		return {
			status: 400,
			body: { error: 'Email already exists' }
		};

	await UserModel.createUser(body.email, hashPassword(body.password));

	return {
		status: 200,
		body: {}
	};
}
