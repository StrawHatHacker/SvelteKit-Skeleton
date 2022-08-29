<script lang="ts">
	import { post } from '$lib/utils/requestMethods';
	import type { Iresponse } from 'src/interfaces';

	// export let data;
	console.log('3. This is executed on the client');

	const logout = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/logout');

		window.location.href = '/';
	};
</script>

<div>Example of a protected route</div>
<button on:click={logout}>Logout</button>
<a href="/protected/3" sveltekit:reload>3</a>
