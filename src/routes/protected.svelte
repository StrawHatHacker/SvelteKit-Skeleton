<script context="module" lang="ts">
	export async function load({ session: user }) {
		if (!user?.id)
			return {
				status: 302,
				redirect: '/'
			};

		return {
			props: { user }
		};
	}
</script>

<script lang="ts">
	import type { ISessionUser } from 'src/interfaces';

	export let user: ISessionUser;
	console.log(user);
</script>

<div>Example of a protected route</div>

<style lang="scss">
</style>
