<script lang="ts" context="module">
</script>

<script lang="ts">
	import { post } from '$lib/utils/requestMethods';
	import type { Iresponse } from 'src/interfaces';
	import '../styles/index.scss';

	const login = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/login', {
			email: 'abc',
			password: '123'
		});
	};

	const logout = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/logout');
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<header />

<main>
	<button on:click={login}>Login</button>
	<button on:click={logout}>Logout</button>
	<button on:click={() => (window.location.href = '/protected')}>Goto protected</button>
</main>

<footer />

<style>
</style>
