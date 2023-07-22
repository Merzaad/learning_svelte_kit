import { json } from '@sveltejs/kit';

export const GET = ({ params }) => {
	const param = params.id;
	return json({ param });
};
