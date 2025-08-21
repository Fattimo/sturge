<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
		size?: 'sm' | 'md' | 'responsive';
		children: Snippet;
	} & (
		| {
				href: string;
				onclick?: never;
		  }
		| {
				href?: never;
				onclick: () => void;
		  }
	);
	const { children, href, onclick, className, size = 'md' }: Props = $props();
</script>

<svelte:element
	this={!!href ? 'a' : 'button'}
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{onclick}
	role={!!href ? 'link' : 'button'}
	class={`${className ? `.${className}` : ''}`}
	data-is-small={size === 'sm'}
	data-is-responsive={size === 'responsive'}
>
	{@render children()}
</svelte:element>

<style>
	a,
	button {
		font-size: 0.8rem;

		padding: 0.25rem 0.75rem;

		&[data-is-small='true'] {
			padding: 0.2rem 0.5rem;
			font-size: 0.7rem;
		}

		&[data-is-responsive='true'] {
			padding: 0.2rem 0.5rem;
			font-size: 0.7rem;

			@media (min-width: 700px) {
				font-size: 0.8rem;
				padding: 0.25rem 0.75rem;
			}
		}

		border: 1px solid currentColor;
		border-radius: 1rem;
		color: currentColor;
		background: transparent;
		text-wrap: nowrap;

		text-decoration: none;
		outline: none;

		&:focus-visible,
		&:hover {
			background-color: color-mix(in oklch, currentColor, transparent 90%);
			border: 1px solid currentColor;
		}
	}
</style>
