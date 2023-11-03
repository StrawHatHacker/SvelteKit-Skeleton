<script lang="ts">
	import { onMount } from 'svelte';
	import { themes } from '$lib/utils/themes';

	export let alingCenter = false;
	let currentTheme = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				currentTheme = theme;
			}
		}
	});

	function setTheme(event: Event) {
		const select = event.target as HTMLSelectElement;
		const theme = select.value;
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.setAttribute('data-theme', theme);
			currentTheme = theme;
		}
	}
</script>

<select
	bind:value={currentTheme}
	data-choose-theme
	class="select select-bordered select-sm w-full max-w-[160px] text-md capitalize"
	class:self-center={alingCenter}
	on:change={setTheme}
>
	<option value="" disabled={currentTheme !== ''}> Choose a theme </option>
	{#each themes as theme}
		<option value={theme} class="capitalize">{theme}</option>
	{/each}
</select>