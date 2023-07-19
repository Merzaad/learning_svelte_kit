<script>
	import { onDestroy } from 'svelte';

	/**
	 * @type {number}
	 */
	let timer;
	/**
	 * @type {number}
	 */
	let interval;
	const startTimer = () => {
		timer = 2;
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
	{timer ? timer : ''}
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
