<script context="module" lang="ts">
	export async function load({ session: user }) {
		if (!user?.id)
			return {
				status: 302,
				redirect: '/login'
			};

		return {
			props: { user }
		};
	}
</script>

<script lang="ts">
	import type { ISessionUser } from 'src/interfaces';
	import { post } from '$lib/utils/requestMethods';
	import type { Iresponse } from 'src/interfaces';

	export let user: ISessionUser;

	const logout = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/logout');

		window.location.href = '/';
	};
</script>

<div>Example of a protected route</div>
<button on:click={logout}>Logout</button>
