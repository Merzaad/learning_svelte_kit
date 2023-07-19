import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	if (!['1', '2', '3'].includes(params.id)) throw error(404);
	const promise = () =>
		new Promise((resolve) => {
			setTimeout(() => resolve(params.id), 2000);
		});
	return {
		value: await promise()
	};
};
