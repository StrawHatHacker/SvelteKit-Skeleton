<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	import { post } from '$lib/utils/requestMethods';
	import type { Iresponse } from 'src/interfaces';

	// export let data;
	
	const logout = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/logout');
		await invalidateAll();
		goto('/')
	};
</script>

<div>Example of a protected route</div>
<button on:click={logout}>Logout</button>
