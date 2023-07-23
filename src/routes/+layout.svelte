<script>
	import { page } from '$app/stores';
	export let data;
	$: pathname = $page.url.pathname;
</script>

<nav>
	<a class={`nav ${pathname === '/' ? 'active' : ''}`} href="/">home</a>
	{#each data.pages as page}
		<a class={`nav ${pathname.includes(page) ? 'active' : ''}`} href={page}>{page.slice(1)}</a>
	{/each}
</nav>
{#if !data.visited}
	<div class="firstVisit">first time visiting</div>
{/if}
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
	.active {
		border: 1px solid teal;
		color: teal;
	}
	.firstVisit {
		text-align: center;
	}
	.outlet {
		padding: 1rem 0;
	}
</style>
