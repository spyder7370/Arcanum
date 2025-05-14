import { error } from '@sveltejs/kit';
export const load = ({ params }) => {
	if (params.slug === '123')
		return {
			slug: params.slug,
		};
	error(404, 'Not found');
};
