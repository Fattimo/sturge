<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		description,
		imgSrc,
		imgSide = 'left'
	}: {
		title: string;
		description: Snippet;
		imgSrc: string;
		imgSide?: 'left' | 'right';
	} = $props();
</script>

<section class={`photo-node  ${imgSide}`}>
	{#snippet image()}
		<div class="img-wrapper"><img src={imgSrc} alt={`image of ${title}`} /></div>
	{/snippet}
	{#if imgSide === 'left'}
		{@render image()}
	{/if}
	<div class="node-content">
		<h3>{title}</h3>
		<div>{@render description()}</div>
	</div>
	{#if imgSide === 'right'}
		{@render image()}
	{/if}
</section>

<style>
	.photo-node {
		display: grid;
		align-items: center;
		gap: 20px;
		width: 100%;
		max-width: 1000px;

		--negative-margin: 0;
		--text-size: 40%;
		grid-template-columns: 1fr var(--text-size);

		&:where(.right) {
			grid-template-columns: var(--text-size) 1fr;
		}

		@media (min-width: 700px) {
			--negative-margin: -2rem;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}

		@media (min-width: 900px) {
			--negative-margin: -5rem;
		}

		&:not(:first-child) {
			margin-top: var(--negative-margin);
		}

		&:first-child {
			.node-content {
				margin-bottom: calc(var(--negative-margin) * -1 / 2);
			}
		}

		&:last-child {
			.node-content {
				margin-top: calc(var(--negative-margin) * -1 / 2);
			}
		}

		@media (min-width: 700px) {
			&.left .node-content > div {
				margin-left: 2rem;
			}

			&.right .node-content {
				> div {
					margin-right: 2rem;
				}
			}
		}

		&.right .node-content {
			text-align: right;
		}

		.node-content {
			font-size: 0.7rem;

			@media (min-width: 700px) {
				font-size: 1rem;
			}
		}

		img {
			width: 100%;
		}

		h3 {
			font-size: 1.3rem;
			text-wrap: balance;
			margin: 0 0 0.5rem;

			@media (min-width: 700px) {
				font-size: 2rem;
			}
		}

		.img-wrapper {
			flex-shrink: 0;
		}
	}
</style>
