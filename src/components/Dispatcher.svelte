<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const onClick = () => {
		dispatch('dispatch');
	};
</script>

<div class="dispatcher" on:click={onClick}>
	<slot />
</div>

<style>
	.dispatcher {
		border: 1px solid rgb(128, 128, 128);
		padding: 0.5rem;
		cursor: pointer;
		border-radius: 8px;
		text-align: center;
	}
	.dispatcher:hover {
		background-color: rgba(240, 248, 255, 0.138);
	}
</style>
