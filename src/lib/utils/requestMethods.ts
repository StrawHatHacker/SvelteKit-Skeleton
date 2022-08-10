export async function post(endpoint: string, data?: unknown) {
	const r = await fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	return { status: r.status, body: await r.json(), ok: r.ok };
}
