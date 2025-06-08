import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request) => {
	const delocalized = deLocalizeUrl(request.url).pathname;
	console.log(delocalized);
	return delocalized;
};
