<script>
	export let value;
	let index = 0;
	switch (value) {
		case 'a':
			index = 1;
			break;
		case 'b':
			index = 2;
			break;
		case 'c':
			index = 3;
			break;
		default:
			break;
	}
</script>

<div class="item">{index}<slot /></div>

<style>
	.item {
		background-color: #aafdff59;
		padding: 0rem;
		width: min-content;
		padding: 0 0.25rem;
		text-align: center;
		border-radius: 8px;
	}
</style>
