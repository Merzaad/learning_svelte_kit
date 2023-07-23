<script>
	import { navigating } from '$app/stores';
	import { onDestroy } from 'svelte';

	/**
	 * @type {number}
	 */
	let timer = 2;
	/**
	 * @type {number}
	 */
	let interval;
	const startTimer = () => {
		interval = setInterval(() => {
			timer -= 1;
		}, 1000);
	};
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="dynamic">
	<a on:click={startTimer} href="dynamic/1">1</a>
	<a on:click={startTimer} href="dynamic/2">2</a>
	<a on:click={startTimer} href="dynamic/3">3</a>
	<a on:click={startTimer} href="dynamic/4">4 redirect</a>
	<a on:click={startTimer} href="dynamic/5">error</a>
	{#if $navigating}
		{timer}
		<br />
		from: {$navigating.from?.url.pathname}
		<br />
		to: {$navigating.to?.url.pathname}
	{/if}
</div>

<style>
	.dynamic {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		padding: 0.5rem;
		cursor: pointer;
		border: 1px solid rgba(255, 255, 255, 0.205);
		color: inherit;
		border-radius: 8px;
	}
</style>
