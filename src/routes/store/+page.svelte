<script>
	import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import { someStore } from '../../stores/stores';
	/**
	 * @type {number}
	 */
	let storedValue;
	someStore.subscribe((value) => {
		storedValue = value;
	});
	const updateStore = () => {
		someStore.update((value) => value + 1);
	};
</script>

<div class="store">
	<Box>
		stored: {storedValue}
		<Button on:click={updateStore}>store+1</Button>
	</Box>
</div>

<style>
	.store {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
