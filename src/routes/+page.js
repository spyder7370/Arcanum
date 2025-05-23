import { API_BASE_URL, GET_TITLES_API } from '$lib/constants/apiConstants';

export async function load({ fetch }) {
	try {
		const res = await fetch(`${API_BASE_URL}${GET_TITLES_API}`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
}
