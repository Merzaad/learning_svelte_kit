<script>
	export let data;
</script>

<div class="dynamic">{data.value}</div>

<style>
	.dynamic {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
