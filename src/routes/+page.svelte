<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<div>
	<button on:click={handleClick}>
		{count}
	</button>
</div>
