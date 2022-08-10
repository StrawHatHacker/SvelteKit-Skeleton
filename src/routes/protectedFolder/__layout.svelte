<script context="module" lang="ts">
	export async function load({ session: user }) {
		if (!user?.id)
			return {
				status: 302,
				redirect: '/login'
			};

		return {
			props: { user }
		};
	}
</script>

<script lang="ts">
	import type { ISessionUser } from 'src/interfaces';

	export let user: ISessionUser;
</script>

<slot />
