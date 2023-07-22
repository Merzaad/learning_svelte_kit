import { json } from '@sveltejs/kit';

export const GET = () => {
	const message = '401';
	return json({ message }, { status: 401, headers: { source: 'Api Route' } });
};

export const POST = async ({ request }) => {
	const body = await request.json();
	return json({ body });
};
