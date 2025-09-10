import type { PageServerLoad } from './$types';

export const load = (({ setHeaders }) => {
	const randomNumber = Math.random();

	// cache-control 15 seconds

	setHeaders({
		'cache-control': 'public, max-age=60'
	});

	return {
		randomNumber
	};
}) satisfies PageServerLoad;
