import { derived, readable, writable } from 'svelte/store';

export const someStore = writable(0);
export const someOtherStore = writable(0);
export const timerStore = readable(new Date().toLocaleTimeString(), (set) => {
	const interval = setInterval(() => {
		set(new Date().toLocaleTimeString());
	}, 1000);
	return () => clearInterval(interval);
});
export const otherTimerStore = derived(timerStore, (timer) => timer + ' derived');

const createCustomeStore = () => {
	const { subscribe, set, update } = writable(0);
	return { subscribe, increase: () => update((prev) => prev + 1), reset: () => set(0) };
};

export const customStore = createCustomeStore();
export const inputStore = writable(0);
