import { getLocale, localizeHref } from './paraglide/runtime';

const BASE_PATH =
	process.argv.includes('dev') || !process.env.REPO_NAME ? '/sturge' : `/${process.env.REPO_NAME}`;

export const processLink = (link: string, locale?: 'en' | 'jp') => {
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(link, {
		locale: nextLocale
	});

	if (!localized.startsWith(BASE_PATH)) return BASE_PATH + localized;
	return localized;
};
