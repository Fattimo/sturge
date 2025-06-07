import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const url = `https://www.random.org/integers/?num=3&min=1&max=100&col=1&base=10&format=plain&rnd=new`;

	const response = await fetch(url);
	const data = await response.text();
	const numbers = data.split('\n');

	return {
		numbers
	};
};
