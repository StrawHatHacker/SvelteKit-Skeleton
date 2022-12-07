<script lang="ts">
	import type { TResponse, LoginRes } from 'src/interfaces';
	import { post } from '$lib/utils/requestMethods';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

	let email = '';
	let password = '';
	let signupError: string = null;
	let timeOuts: NodeJS.Timeout[] = [];

	async function submit() {
		const res: TResponse<LoginRes> = await post('/api/v1/user/register', { email, password });

		if (res.ok) window.location.href = '/login';

		signupError = res.body.error;

		// Making every new timeout active for its full duration
		timeOuts.forEach((t) => clearTimeout(t));

		timeOuts.push(
			setTimeout(() => {
				signupError = null;
			}, 5000)
		);
	}
</script>

<section
	aria-labelledby="signup-title"
	class="text-gray-600 body-font relative container px-5 py-24 mx-auto max-w-[500px]"
>
	<div class="flex place-content-between items-center">
		<h1 id="signup-title" class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
			Sign Up
		</h1>
		{#if signupError}
			<span transition:fade={{ duration: 300, easing: sineIn }} class="text-red-500 text-base">
				{signupError}
			</span>
		{/if}
	</div>

	<form class="flex flex-col gap-2">
		<div>
			<label for="email" class="leading-6 text-base text-gray-600">Email</label>
			<input
				bind:value={email}
				type="email"
				id="email"
				name="email"
				class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
			/>
		</div>
		<div>
			<label for="password" class="leading-6 text-base text-gray-600">Password</label>
			<input
				bind:value={password}
				type="password"
				id="password"
				name="password"
				class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
			/>
		</div>
		<div>
			<button
				type="button"
				class="flex mx-auto text-white bg-indigo-500 border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				on:click={submit}>Sign up</button
			>
		</div>
	</form>
</section>
