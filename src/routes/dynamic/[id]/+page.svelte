<script>
	import { page } from '$app/stores';
</script>

<div class="dynamic">{$page.params.id}</div>

<style>
	.dynamic {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
