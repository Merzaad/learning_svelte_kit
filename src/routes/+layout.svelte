<script>
	/* 	import { page } from '$app/stores';
	const { url } = $page; */
	const pages = ['/basic', '/lifecycle', '/store', '/', '/dynamic'];
</script>

<nav>
	{#each pages as page}
		<a class="nav" href={page}>{page.slice(1) || 'home'}</a>
	{/each}
</nav>
<div class="outlet">
	<slot />
</div>

<style>
	nav {
		position: sticky;
		top: 0;
		right: 0;
		left: 0;
		min-height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		backdrop-filter: blur(5px);
		flex-wrap: wrap;
	}
	.nav {
		text-decoration: none;
		color: inherit;
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 8px;
	}
	.nav:hover {
		background: rgba(58, 57, 57, 0.343);
	}
	.outlet {
		padding: 1rem 0;
	}
</style>
