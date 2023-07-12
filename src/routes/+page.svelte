<script>
	import Button from '../components/Button.svelte';

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
	const mutateObjectWithDelay = () => {
		setTimeout(() => {
			object.a.b += 1;
		}, 1500);
	};
	$: calculated = count + 1;
	$: if (count > 3) console.log(count);
</script>

<div class="main">
	<div>count: {count}</div>
	<div>count + 1 = {calculated}</div>
	<div>array: {[...numbers]}</div>
	<div>object: {JSON.stringify(object)}</div>
	<Button onClick={increase}>+1</Button>
	<Button onClick={increaseWithDelay}>+1 + delay</Button>
	<Button onClick={updateArray}>[...array]</Button>
	<Button onClick={pushArray}>array.push</Button>
	<Button onClick={updateObject}>{'{...object}'}</Button>
	<Button onClick={mutateRefrencedObject}>mutate refrenced object</Button>
	<Button onClick={mutateObject}>mutate object</Button>
	<Button onClick={mutateObjectWithDelay}>mutate object with delay</Button>
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
