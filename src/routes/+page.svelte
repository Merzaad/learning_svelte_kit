<script>
	const type = 'button';
	let count = 0;
	let numbers = [1, 2];
	let object = { a: { b: 1 } };
	const increase = () => {
		count += 1;
	};
	const increaseWithDelay = () => {
		setTimeout(() => {
			count += 1;
		}, 1500);
	};
	const updateArray = () => {
		numbers = [...numbers];
	};
	const pushArray = () => {
		numbers.push(numbers.length + 1);
	};
	const updateObject = () => {
		object = { ...object };
	};
	const mutateRefrencedObject = () => {
		let { a } = object;
		a.b += 1;
	};
	const mutateObject = () => {
		object.a.b += 1;
	};
	$: calculated = count + 1;
	$: if (count > 3) console.log(count);
	$: console.log(numbers);
	$: console.log(object);
</script>

<div class="main">
	<div>count: {count}</div>
	<div>count + 1 = {calculated}</div>
	<button {type} on:click={increase}> +1 </button>
	<button {type} on:click={increaseWithDelay}> +1 + delay </button>
	<button {type} on:click={updateArray}> [...array] </button>
	<button {type} on:click={pushArray}> array.push </button>
	<button {type} on:click={updateObject}> {'{...object}'} </button>
	<button {type} on:click={mutateRefrencedObject}> mutate refrenced object </button>
	<button {type} on:click={mutateObject}> mutate object </button>
</div>

<style>
	.main {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		min-height: 100vh;
	}
</style>
