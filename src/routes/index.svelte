<script lang="ts">
	import { post } from '$lib/utils/requestMethods';
	import type { Iresponse } from 'src/interfaces';
	import '../styles/index.scss';

	const login = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/login', {
			email: 'StrawHatHacker@gmail.com',
			password: '123'
		});
	};

	const register = async () => {
		const res: Iresponse<{}> = await post('/api/v1/user/register', {
			email: 'StrawHatHacker@gmail.com',
			password: '123',
			username: 'StrawHatHacker'
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
	<button on:click={register}>register</button>
	<button on:click={logout}>Logout</button>
	<button on:click={() => (window.location.href = '/protected')}>Goto protected</button>
	<button on:click={() => (window.location.href = '/protectedFolder/inProtectedFolder')}
		>Goto protected folder</button
	>
	<input type="text" placeholder="Placeholder" />
	<input type="radio" />
	<h1>H1</h1>
	<h2>H2</h2>
	<h3>H3</h3>
	<h4>H4</h4>
	<h5>H5</h5>
	<h6>H6</h6>
	<p>p</p>
	<a href="/test">Link to /test</a>
	<ul>
		<li>First unordered list element</li>
		<li>Second unordered list element</li>
	</ul>
	<ol>
		<li>First ordered list element</li>
		<li>Second ordered list element</li>
	</ol>
	<dl>
		<dt>Definition title</dt>
		<dd>First Definition list element</dd>
		<dd>Second Definition list element</dd>
	</dl>
	<progress id="upload" max="100" value="70"> 70% </progress>
	<textarea name="textarea" id="textarea" cols="30" rows="10">Hi I'm a textarea :)</textarea>
	<dialog>ok</dialog>
</main>

<footer />

<style lang="scss">
	main > * {
		display: block;
		margin-bottom: 1rem;
	}
</style>
