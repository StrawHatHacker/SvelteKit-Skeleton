<script lang="ts">
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import PhoneFilled from 'carbon-icons-svelte/lib/PhoneFilled.svelte';
</script>

<section aria-labelledby="team-title" class="text-gray-600 body-font">
	<div class="container px-5 pt-20 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h2
				id="team-title"
				class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest"
			>
				OUR TEAM
			</h2>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				A trully passionate team, ready to pick up new challenges and grow together !
			</p>
		</div>
		<div class="flex flex-wrap -m-4">
			<div class="p-4 lg:w-1/2">
				<div
					class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
				>
					<img
						alt="team"
						class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
						src="https://dummyimage.com/200x200"
					/>
					<div class="flex-grow sm:pl-8">
						<h3 class="title-font font-medium text-lg text-gray-900">Λεωνίδας</h3>
						<h4 class="text-gray-500 mb-3">Fullstack Developer / Team leader</h4>
						<p class="mb-4">
							DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
						</p>
						<span class="inline-flex">
							<LogoGithub size={25} class="text-black" />
							<LogoLinkedin size={26} class="text-black ml-2" />
							<PhoneFilled size={25} class="text-black ml-2" />
							<span class="ml-2">6977-777-777</span>
						</span>
					</div>
				</div>
			</div>
			<div class="p-4 lg:w-1/2">
				<div
					class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
				>
					<img
						alt="team"
						class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
						src="https://dummyimage.com/201x201"
					/>
					<div class="flex-grow sm:pl-8">
						<h3 class="title-font font-medium text-lg text-gray-900">Παναγιώτης</h3>
						<h4 class="text-gray-500 mb-3">Web Developer</h4>
						<p class="mb-4">
							DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
						</p>
						<span class="inline-flex">
							<LogoGithub size={25} class="text-black" />
							<LogoLinkedin size={26} class="text-black ml-2" />
							<PhoneFilled size={25} class="text-black ml-2" />
							<span class="ml-2">6977-777-777</span>
						</span>
					</div>
				</div>
			</div>
			<div class="p-4 lg:w-1/2">
				<div
					class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
				>
					<img
						alt="team"
						class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
						src="https://dummyimage.com/204x204"
					/>
					<div class="flex-grow sm:pl-8">
						<h3 class="title-font font-medium text-lg text-gray-900">Θεοδόσης</h3>
						<h4 class="text-gray-500 mb-3">Backend Developer</h4>
						<p class="mb-4">
							DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
						</p>
						<span class="inline-flex">
							<LogoGithub size={25} class="text-black" />
							<LogoLinkedin size={26} class="text-black ml-2" />
							<PhoneFilled size={25} class="text-black ml-2" />
							<span class="ml-2">6977-777-777</span>
						</span>
					</div>
				</div>
			</div>
			<div class="p-4 lg:w-1/2">
				<div
					class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
				>
					<img
						alt="team"
						class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
						src="https://dummyimage.com/206x206"
					/>
					<div class="flex-grow sm:pl-8">
						<h3 class="title-font font-medium text-lg text-gray-900">Other</h3>
						<h4 class="text-gray-500 mb-3">Designer</h4>
						<p class="mb-4">
							DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
						</p>
						<span class="inline-flex">
							<LogoGithub size={25} class="text-black" />
							<LogoLinkedin size={26} class="text-black ml-2" />
							<PhoneFilled size={25} class="text-black ml-2" />
							<span class="ml-2">6977-777-777</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
