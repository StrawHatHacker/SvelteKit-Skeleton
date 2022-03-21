import { createSession } from '$lib/utils/sessionHandler';
import cookie from 'cookie';

interface IBody {
    email: string;
    password: number;
}

export async function post({ request }) {

    const body: IBody = await request.json();

    const newSessionId = createSession('1');

    return {
        status: 200,
        body: {},
        headers: {
            'Set-Cookie': cookie.serialize('session_id', newSessionId, {
                path: '/',
                httpOnly: true,
                // sameSite: 'strict',
                // secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // one week
            }),
        }
    };
}
