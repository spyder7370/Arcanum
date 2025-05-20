import { redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (params.title === 'ml')
		return {
			title: params.title,
		};
	redirect(308, '/coming-soon');
};
