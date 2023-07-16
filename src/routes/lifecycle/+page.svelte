<script>
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';

	let state = 0;
	onMount(() => {
		console.log('mount');
		// @ts-ignore
		const onApress = (event) => {
			if (event.key === 'a') {
				alert('a');
			}
		};
		window.addEventListener('keypress', onApress);
		return () => window.removeEventListener('keypress', onApress);
	});
	beforeUpdate(() => {
		console.log('before');
	});
	afterUpdate(() => {
		console.log('after');
	});
	$: console.log(state);
</script>

<div class="main">
	<Box>
		{state}
		<Button on:click={() => (state += 1)}>+</Button>
	</Box>
	<Box>
		<div>press "a"</div>
		<a href="/">home</a>
	</Box>
</div>

<style>
	.main {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
