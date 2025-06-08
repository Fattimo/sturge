import { base } from '$app/paths';
import { deLocalizeHref, getLocale, localizeHref } from './paraglide/runtime';

export const processLink = (link: string, locale?: 'en' | 'jp') => {
	// logic should be link starts with base ? clean off base
	const relativePath = link.startsWith(`${base}`) ? link.slice(`${base}`.length) : link;
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(relativePath, {
		locale: nextLocale
	});

	let finalLink = localized;
	if (nextLocale === 'en') finalLink = deLocalizeHref(localized);
	return base + finalLink;
};
