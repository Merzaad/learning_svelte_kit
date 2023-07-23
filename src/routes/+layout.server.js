export const load = ({ cookies }) => {
	const visited = cookies.get('visited');
	cookies.set('visited', 'true');

	return {
		pages: ['/basic', '/lifecycle', '/store', '/dynamic', '/error'],
		visited
	};
};
