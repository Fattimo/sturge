import { getLocale, localizeHref } from './paraglide/runtime';
import { dev } from '$app/environment';

const BASE_PATH = dev || !process.env.REPO_NAME ? '' : `/${process.env.REPO_NAME}`;

export const processLink = (
	link: string,
	options: {
		locale?: 'en' | 'jp';
		/** If provided, stubs out the entire route, e.g. sturge.org/abc instead of /abc */
		absolute?: boolean;
	} = {}
) => {
	const { locale, absolute } = options;
	const currentLocale = getLocale();
	const nextLocale = locale || currentLocale;

	const localized = localizeHref(link, {
		locale: nextLocale
	});

	let finalLink = localized;
	if (!localized.startsWith(BASE_PATH)) finalLink = BASE_PATH + localized;
	const relative =
		finalLink.length > 1 && finalLink.endsWith('/') ? finalLink.slice(0, -1) : finalLink;

	if (absolute)
		return `${window.origin}${window.origin.includes('github') ? '/sturge' : ''}${relative}`;
	return relative;
};
