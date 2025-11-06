<script lang="ts">
	import { page } from '$app/state';
	import { processLink } from '$lib/utils';
	import { GIVE_LINK } from '../constants';
	import HeaderLogo from './HeaderLogo.svelte';
	import PillButton from './PillButton.svelte';

	const PHASE_2 = false;
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href={processLink('/')}><HeaderLogo /></a>
			</li>
			{#if PHASE_2}
				<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
					<a href={processLink('/')}>Worship</a>
				</li>
				<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
					<a href={processLink('/about')}>Ministries</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/paraglide') ? 'page' : undefined}>
					<a href={processLink('/paraglide')}>About</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/counter') ? 'page' : undefined}>
					<a href={processLink('/counter')}>Contact Us</a>
				</li>
				<li>
					<a href={processLink(page.url.pathname, { locale: 'en' })} data-sveltekit-reload
						>English</a
					>
				</li>
				<li>
					<a href={processLink(page.url.pathname, { locale: 'jp' })} data-sveltekit-reload
						>Japanese</a
					>
				</li>
			{/if}
			<li>
				<PillButton href={GIVE_LINK}>Give</PillButton>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		height: 68px;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	nav {
		display: contents;
	}

	ul {
		--margin-x: 1rem;

		@media (min-width: 700px) {
			--margin-x: 2rem;
		}

		padding: 0;
		margin: 0 var(--margin-x);

		height: 100%;
		width: calc(100% - 2 * var(--margin-x));

		display: flex;
		align-items: center;
		list-style: none;
		background-size: contain;

		> li:first-child {
			margin-right: auto;
		}

		> li:nth-child(2) {
			color: var(--sand);
			/* color: var(--deep-purple); */
		}
		> li:nth-child(3) {
			color: var(--moss);
		}
		> li:nth-child(4) {
			color: var(--slate-blue);
		}
		> li:nth-child(5) {
			color: var(--pink);
		}
		> li:nth-child(6) {
			color: var(--orange);
		}
		> li:nth-child(7) {
			color: var(--brown);
		}
		> li:nth-child(8) {
			color: var(--sand);
		}
	}

	li {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: cornflowerblue;
	}
</style>
