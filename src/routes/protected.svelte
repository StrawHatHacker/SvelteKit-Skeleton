<script context="module" lang="ts">
	export async function load({ session }) {
		if (!session?.id)
			return {
				status: 302,
				redirect: '/'
			};

		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<script lang="ts">
</script>

<div>Example of a protected route</div>

<style lang="scss">
</style>
