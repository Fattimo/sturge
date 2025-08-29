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

export const EMAIL_ACCESS_KEY = 'b7687713-373a-47bc-aead-650d3987eb01';

type AllowedTags =
	| 'p'
	| 'div'
	| 'span'
	| 'a'
	| 'img'
	| 'strong'
	| 'b'
	| 'em'
	| 'i'
	| 'u'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'br'
	| 'hr'
	| 'ul'
	| 'ol'
	| 'li'
	| 'blockquote'
	| 'pre'
	| 'code'
	| 'table'
	| 'thead'
	| 'tbody'
	| 'tr'
	| 'td'
	| 'th';

type AllowedAttributes = {
	[key in AllowedTags | '*']?: string[];
};

export function sanitizeHTML(html: string = ''): string {
	// Define allowed tags
	const allowedTags: Set<string> = new Set([
		'p',
		'div',
		'span',
		'a',
		'img',
		'strong',
		'b',
		'em',
		'i',
		'u',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'br',
		'hr',
		'ul',
		'ol',
		'li',
		'blockquote',
		'pre',
		'code',
		'table',
		'thead',
		'tbody',
		'tr',
		'td',
		'th'
	]);

	// Define allowed attributes for each tag
	const allowedAttributes: AllowedAttributes = {
		a: ['href', 'title', 'target', 'rel'],
		img: ['src', 'alt', 'width', 'height'],
		blockquote: ['cite'],
		code: ['class'],
		'*': ['class', 'id'] // Allowed on all tags
	};

	// Regex patterns for matching tags and attributes
	const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/gi;
	const scriptStyleRegex = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi;

	// Remove script and style tags completely
	html = html.replace(scriptStyleRegex, '');

	// Process each tag
	html = html.replace(tagRegex, (match: string, tagName: string): string => {
		const lowerTagName = tagName.toLowerCase();
		const isClosingTag = match.startsWith('</');

		// If it's a closing tag
		if (isClosingTag) {
			return allowedTags.has(lowerTagName) ? `</${lowerTagName}>` : '';
		}

		// If tag is not allowed, return empty string
		if (!allowedTags.has(lowerTagName)) {
			return '';
		}

		// Extract and filter attributes
		const attributeRegex = /\s*([a-zA-Z-]+)(?:\s*=\s*["']([^"']*?)["']|\s*=\s*([^\s>]+))?/g;
		const tagAllowed = allowedAttributes[lowerTagName as AllowedTags] || [];
		const globalAllowed = allowedAttributes['*'] || [];

		const cleanedAttributes: string[] = [];
		let attrMatch: RegExpExecArray | null;

		// Extract the attributes part (everything after the tag name)
		const attributesString = match.substring(
			match.indexOf(lowerTagName) + lowerTagName.length,
			match.length - 1
		);

		while ((attrMatch = attributeRegex.exec(attributesString)) !== null) {
			const attrName = attrMatch[1].toLowerCase();
			const attrValue = attrMatch[2] || attrMatch[3] || '';

			// Skip event handlers
			if (attrName.startsWith('on')) {
				continue;
			}

			// Check if attribute is allowed
			if (tagAllowed.includes(attrName) || globalAllowed.includes(attrName)) {
				// Special handling for href and src
				if ((attrName === 'href' || attrName === 'src') && attrValue) {
					const valueLower = attrValue.toLowerCase().trim();
					if (valueLower.startsWith('javascript:') || valueLower.startsWith('data:')) {
						continue;
					}
				}
				cleanedAttributes.push(`${attrName}="${attrValue}"`);
			}
		}

		// Add target="_blank" and rel="noopener noreferrer" for anchor tags
		if (lowerTagName === 'a') {
			if (!cleanedAttributes.some((attr) => attr.startsWith('target='))) {
				cleanedAttributes.push('target="_blank"');
			}
			if (!cleanedAttributes.some((attr) => attr.startsWith('rel='))) {
				cleanedAttributes.push('rel="noopener noreferrer"');
			}
		}

		// Reconstruct the tag
		const attributesStr = cleanedAttributes.length > 0 ? ' ' + cleanedAttributes.join(' ') : '';

		// Handle self-closing tags
		const selfClosing = ['img', 'br', 'hr'].includes(lowerTagName);
		return selfClosing
			? `<${lowerTagName}${attributesStr} />`
			: `<${lowerTagName}${attributesStr}>`;
	});

	return html;
}
