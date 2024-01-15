<script>
	import ThemeSelect from './ThemeSelect.svelte';
</script>

<section aria-labelledby="title">
	<header class="text-gray-600 body-font">
		<div class="container mx-auto flex flex-wrap px-6 py-4 flex-col md:flex-row items-center">
			<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
				<i class="fa fa-brands fa-superpowers text-4xl text-primary mr-2" aria-hidden="true" />
				<h1 id="title" class="text-xl text-indigo-600 hover:text-indigo-400 p-1 font-bold">
					Skeleton Business
				</h1>
			</a>
			<ThemeSelect />
			<nav class="md:ml-auto flex flex-wrap items-center justify-center font-medium">
				<a class="mr-5 text-indigo-600 hover:text-indigo-400 text-base py-2" href="/">About</a>
				<a class="mr-5 text-indigo-600 hover:text-indigo-400 text-base py-2" href="/">Pricing</a>
				<a class="mr-5 text-indigo-600 hover:text-indigo-400 text-base py-2" href="/">Solutions</a>
				<a class="mr-5 text-indigo-600 hover:text-indigo-400 text-base py-2" href="/">Gallery</a>
				<a
					class="inline-flex items-center text-indigo-600 bg-gray-200 border-0 py-1 px-3 focus:bg-gray-200 hover:bg-gray-100 rounded-md text-base mt-4 md:mt-0"
					href="/login"
				>
					Log in
					<i class="fa fa-arrow-right ml-2" aria-hidden="true" />
				</a>
			</nav>
		</div>
	</header>
</section>
