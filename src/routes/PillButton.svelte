<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
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
	const { children, href, onclick, className }: Props = $props();
</script>

<svelte:element
	this={!!href ? 'a' : 'button'}
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{onclick}
	role={!!href ? 'link' : 'button'}
	class={`${className ? `.${className}` : ''}`}
>
	{@render children()}
</svelte:element>

<style>
	a,
	button {
		font-size: 0.8rem;

		padding: 0.25rem 0.75rem;
		border: 1px solid currentColor;
		border-radius: 1rem;
		color: currentColor;
		background: transparent;

		text-decoration: none;
		outline: none;

		&:focus-visible,
		&:hover {
			background-color: color-mix(in oklch, currentColor, transparent 90%);
			border: 1px solid currentColor;
		}
	}
</style>
