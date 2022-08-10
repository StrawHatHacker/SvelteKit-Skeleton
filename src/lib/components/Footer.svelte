<script lang="ts">
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import LogoTwitter from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
	import PhoneFilled from 'carbon-icons-svelte/lib/PhoneFilled.svelte';
</script>

<section aria-labelledby="footer-title">
	<footer class="text-gray-600 body-font">
		<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
				href="/"
			>
				<LogoDiscord size={50} class="text-indigo-600" />
				<h2 id="footer-title" class="ml-3 text-xl">Tailblocks</h2>
			</a>
			<p
				class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
			>
				© 2020 Skeleton —
				<a
					href="https://twitter.com/knyttneve"
					class="text-gray-600 ml-1"
					rel="noopener noreferrer"
					target="_blank">Skeleton</a
				>
			</p>
			<div
				class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-500"
			>
				<PhoneFilled size={26} class="mr-2" />
				<span>2810-431-431</span>
			</div>
			<div class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<a class="text-gray-500" href="/">
					<LogoDiscord size={26} />
				</a>
				<a class="text-gray-500" href="/">
					<LogoTwitter size={26} />
				</a>
			</div>
		</div>
	</footer>
</section>
