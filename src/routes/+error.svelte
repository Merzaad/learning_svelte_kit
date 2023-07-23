<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1>{$page.status} {$page.error?.message}</h1>
	unexpected error
</div>

<style>
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
