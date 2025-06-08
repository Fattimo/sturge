import { getLocale, localizeHref } from './paraglide/runtime';

export const processLink = (link: string, locale?: 'en' | 'jp') => {
	// logic should be link starts with base ? clean off base
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(link, {
		locale: nextLocale
	});

	return localized;
};
