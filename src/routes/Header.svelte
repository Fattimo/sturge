<script lang="ts">
	import { page } from '$app/state';
	import { processLink } from '$lib/utils';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href={processLink('/')}>Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href={processLink('/about')}>About</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/paraglide') ? 'page' : undefined}>
				<a href={processLink('/paraglide')}>i18n demo</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/counter') ? 'page' : undefined}>
				<a href={processLink('/counter')}>interactive</a>
			</li>
		</ul>
		<a href={processLink(page.url.pathname, 'en')} data-sveltekit-reload>English</a>
		<a href={processLink(page.url.pathname, 'jp')} data-sveltekit-reload>Japanese</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid cornflowerblue;
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
