import { getLocale, localizeHref } from './paraglide/runtime';

const BASE_PATH =
	process.argv.includes('dev') || !process.env.REPO_NAME ? '' : `/${process.env.REPO_NAME}`;

export const processLink = (link: string, locale?: 'en' | 'jp') => {
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(link, {
		locale: nextLocale
	});

	let finalLink = localized;
	if (!localized.startsWith(BASE_PATH)) finalLink = BASE_PATH + localized;
	return finalLink.length > 1 && finalLink.endsWith('/') ? finalLink.slice(0, -1) : finalLink;
};
