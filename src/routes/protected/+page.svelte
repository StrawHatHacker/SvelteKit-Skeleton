<script lang="ts">
	import { goto } from '$app/navigation';
	import type { TResponse } from 'src/interfaces';
	import { post } from '$lib/utils/requestMethods';

	const logout = async () => {
		const res: TResponse<{}> = await post('/api/v1/user/logout');
		goto('/');
	};
</script>

<div>Example of a protected route</div>
<button on:click={logout}>Logout</button>
