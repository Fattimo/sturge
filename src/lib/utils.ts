import { base } from '$app/paths';
import { deLocalizeHref, getLocale, localizeHref } from './paraglide/runtime';

const makeRelativeLink = (link: string) => {
	if (process.env.NODE_ENV === 'development') return link;
	if (link === '/') return base;

	return base + link;
};

export const processLink = (link: string, locale?: 'en' | 'jp') => {
	const relativePath = makeRelativeLink(link);
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(relativePath, {
		locale: nextLocale
	});

	if (nextLocale === 'en') return deLocalizeHref(localized);

	return localized;
};
