import { json } from '@sveltejs/kit';
import { UserModel } from '$lib/models/user';
import hashPassword from '$lib/utils/hashPassword';

interface IBody {
	email: string;
	password: string;
}

export async function POST({ request }) {
	const body: IBody = await request.json();

	if (await UserModel.getUserByEmail(body.email))
		return json({ error: 'Email already exists' }, {
			status: 400
		});

	await UserModel.createUser(body.email, hashPassword(body.password));

	return json({});
}
