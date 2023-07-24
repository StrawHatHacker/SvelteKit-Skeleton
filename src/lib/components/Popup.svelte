<!-- 
	Usage 
	
	<script>let showPopup = false;</script>
	<button on:click={() => showPopup = true}>Show</button>
    <button on:click={() => showPopup = false}>Hide</button>
	<Popup show={showPopup} on:change={() => (showPopup = !showPopup)}>
		html here
	</Popup>

-->
<script lang="ts">
	import { center } from '../utils/animations';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	const handleChange = () => dispatch('change', false);

	export let show: boolean;
	export const position = 'center';
	export let duration = 300;
	export let delay = 0;
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="shade"
		transition:fade={{ duration, delay }}
		on:click={handleChange}
		on:touchmove|preventDefault
	/>
	<div transition:center={{ duration, delay }} class="content center">
		<slot />
	</div>
{/if}

<style>
	

	.content {
		width: max-content;
		max-width: 90%;
		overflow: hidden;
		position: fixed;
		z-index: 11;
		background-color: black;
		opacity: 1;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 3px solid black;
		box-shadow: 3px 3px 5px black;
	}

	.shade {
		position: fixed;
		z-index: 10;
		inset: 0;
		background-color: black;
		opacity: 0.7;
	}

	.center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transform-origin: 0 0;
	}
</style>
