<script>
	import { onDestroy, onMount } from 'svelte';
	import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import {
		someStore,
		someOtherStore,
		timerStore,
		otherTimerStore,
		customStore,
		inputStore
	} from '../../stores/stores';
	/**
	 * @type {number}
	 */
	let storedValue;
	const unsubscribe = someOtherStore.subscribe((value) => {
		storedValue = value;
	});
	const updateSomeOtherStore = () => {
		someOtherStore.update((value) => value + 1);
	};
	onDestroy(unsubscribe);
</script>

<div class="store">
	<Box>
		unsubscribe onDestory: {$someStore}
		<Button on:click={() => $someStore++}>+1</Button>
	</Box>
	<Box>
		auto unsubscribe: {storedValue}
		<Button on:click={updateSomeOtherStore}>+1</Button>
	</Box>
	<Box>
		readable: {$timerStore}
	</Box>
	<Box>
		derived: {$otherTimerStore}
	</Box>
	<Box>
		custom store: {$customStore}
		<Button on:click={customStore.increase}>+1</Button>
		<Button on:click={customStore.reset}>reset</Button>
	</Box>
	<Box>
		binded store {$inputStore}
		<input bind:value={$inputStore} />
	</Box>
</div>

<style>
	.store {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
