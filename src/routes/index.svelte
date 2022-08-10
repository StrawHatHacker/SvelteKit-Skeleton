<main>
	<button on:click={() => (window.location.href = '/login')}>Login</button>
	<button on:click={() => (window.location.href = '/register')}>register</button>
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
	<p class="p-5 text-xl text-gray-400 font-extrabold">Tailwind styled paragraph</p>
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
