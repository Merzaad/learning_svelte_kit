<script>
	/**
	 * @type {any}
	 */
	export let onClick;
</script>

<button on:click={onClick}>
	<slot />
</button>

<style>
	button {
		all: unset;
		padding: 0.25rem;
		background: rgb(54, 54, 54);
		color: rgb(207, 207, 207);
		border-radius: 5px;
		cursor: pointer;
		border: 1px solid transparent;
	}
	button:hover {
		background: rgb(69, 69, 69);
		border: 1px solid rgb(95, 95, 95);
	}
	button:active {
		transform: scale(0.98);
	}
	button:focus {
		border: 1px solid white;
	}
</style>
