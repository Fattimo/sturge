import { dev } from '$app/environment';

// we don't need any JS on most pages, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data on the site, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
