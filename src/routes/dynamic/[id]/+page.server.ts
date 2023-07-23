import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params }: { params: { id: string } }) => {
	if (!['1', '2', '3', '4'].includes(params.id)) throw error(404);
	if (params.id === '4') throw redirect(308, '/dynamic/3');
	const promise = () =>
		new Promise((resolve) => {
			setTimeout(() => resolve(params.id), 2000);
		});
	return {
		value: await promise()
	};
};
