<script>
	import { onMount } from 'svelte';
	import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import Dispatcher from '../../components/Dispatcher.svelte';
	import ListItem from '../../components/ListItem.svelte';
	import { someStore } from '../../stores/stores';

	let count = 0;
	let numbers = [1, 2];
	let numbersWithId = [
		{ id: 1, value: 'a' },
		{ id: 2, value: 'b' },
		{ id: 3, value: 'c' }
	];
	let object = { a: { b: 1 } };
	let inputValues = ['intial', 0, 0];
	let checkbox = false;
	let selections = [{ value: 1 }, { value: 2 }, { value: 3 }];
	let selected = 1;
	let textArea = 'abcd';
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
	const promise = () =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 3000);
		});
	$: calculated = count + 1;
	$: if (count > 3) console.log(count);
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
		<Button on:click={increase}>+1</Button>
		<Button on:click={increaseWithDelay}>+1 + delay</Button>
	</Box>
	<Box>
		<div>array: {[...numbers]}</div>
		<Button on:click={updateArray}>[...array]</Button>
		<Button on:click={pushArray}>array.push</Button></Box
	>
	<Box>
		<div>object: {JSON.stringify(object)}</div>
		<Button on:click={updateObject}>{'{...object}'}</Button>
		<Button on:click={mutateRefrencedObject}>mutate refrenced object</Button>
		<Button on:click={mutateObject}>mutate object</Button>
		<Button on:click={mutateObjectWithDelay}>mutate object with delay</Button></Box
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
		<Button on:click={sliceArray}>arrayWithId.slice(1)</Button>
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
	<Box>
		<div class="events" on:click|self={() => alert('self')}>
			<div on:click|once={() => alert('once')}>
				<div on:click|stopPropagation={() => alert('stopPropagation')}>click</div>
			</div>
		</div>
		<Dispatcher on:dispatch|once={() => alert('dispatch')}>dispatch|once</Dispatcher>
	</Box>
	<Box>
		{inputValues}
		<input type="text" bind:value={inputValues[0]} />
		<input type="number" bind:value={inputValues[1]} />
		<input type="range" min="0" max="4" bind:value={inputValues[2]} />
		<div>
			<input type="checkbox" bind:checked={checkbox} />
			{checkbox}
		</div>
		<div>
			selected: {selected}
			<select bind:value={selected}>
				{#each selections as selection}
					<option value={selection.value}>{selection.value}</option>
				{/each}
			</select>
		</div>
		<textarea bind:value={textArea} />
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
	.events {
		border: 1px solid rgb(94, 94, 94);
		padding: 1rem;
		cursor: pointer;
		border-radius: 8px;
	}
	.events:hover {
		background-color: rgba(64, 64, 64, 0.207);
	}
	.events div {
		border: 1px solid rgb(94, 94, 94);
		padding: 1rem;
		cursor: pointer;
		border-radius: 8px;
	}
	.events div:hover {
		background-color: rgba(245, 245, 220, 0.207);
	}
</style>
