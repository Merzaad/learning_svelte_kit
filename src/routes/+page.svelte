<script>
	import { updated } from '$app/stores';
</script>

<div class="home">home</div>
<div class="home">
	{#if $updated}
		<p>
			A new version of the app is available
			<button on:click={() => location.reload()}> reload the page </button>
		</p>
	{/if}
</div>

<style>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
