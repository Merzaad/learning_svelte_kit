<script>
	import Box from '../components/Box.svelte';
	import Button from '../components/Button.svelte';
	import ListItem from '../components/ListItem.svelte';

	let count = 0;
	let numbers = [1, 2];
	let numbersWithId = [
		{ id: 1, value: 'a' },
		{ id: 2, value: 'b' },
		{ id: 3, value: 'c' }
	];
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
	const sliceArray = () => {
		numbersWithId = numbersWithId.slice(1);
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
	const promise = () =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 3000);
		});
</script>

<div class="main">
	<Box>
		<div>
			count: {count}
			{#if count > 3}
				{'>'}
			{:else}
				{'<'}
			{/if}
			3
		</div>
		<div>count + 1 = {calculated}</div>
		<Button onClick={increase}>+1</Button>
		<Button onClick={increaseWithDelay}>+1 + delay</Button>
	</Box>
	<Box>
		<div>array: {[...numbers]}</div>
		<Button onClick={updateArray}>[...array]</Button>
		<Button onClick={pushArray}>array.push</Button></Box
	>
	<Box>
		<div>object: {JSON.stringify(object)}</div>
		<Button onClick={updateObject}>{'{...object}'}</Button>
		<Button onClick={mutateRefrencedObject}>mutate refrenced object</Button>
		<Button onClick={mutateObject}>mutate object</Button>
		<Button onClick={mutateObjectWithDelay}>mutate object with delay</Button></Box
	>
	<Box>
		<div class="numbers">
			array without key:
			{#each numbersWithId as number, index}
				<ListItem value={number.value}>{number.value}</ListItem>
			{/each}
		</div>
		<div class="numbers">
			array with key:
			{#each numbersWithId as number, index (number.id)}
				<ListItem value={number.value}>{number.value}</ListItem>
			{/each}
		</div>
		<Button onClick={sliceArray}>arrayWithId.slice(1)</Button>
	</Box>
	<Box>
		{#await promise()}
			fetching
		{:then number}
			resloved: {number}
		{:catch error}
			error: {error}
		{/await}
	</Box>
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
	.numbers {
		display: flex;
		flex-wrap: wrap;
		gap: 0.1rem;
	}
</style>
