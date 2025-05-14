import { redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (params.slug === 'ml')
		return {
			slug: params.slug,
		};
	redirect(308, '/coming-soon');
};
