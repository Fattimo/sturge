<script lang="ts">
	import { sanitizeHTML } from '$lib/utils';
	import type { GcalEvent } from './+page.server';
	import ColorInheritLogo from './ColorInheritLogo.svelte';

	type Props = {
		event: GcalEvent;
	};

	const { event } = $props();

	const timeRangeFormatter = Intl.DateTimeFormat(undefined, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});
</script>

<section class="event-snippet">
	{#if event.attachments[0]}
		<div class="event-snippet-img-wrapper">
			<img
				src={event.attachments[0]?.fileId
					? `https://drive.google.com/thumbnail?id=${event.attachments[0].fileId}&sz=w1000`
					: ''}
				alt={event.summary}
			/>
		</div>
	{/if}
	<div class="floating-logo">
		<ColorInheritLogo></ColorInheritLogo>
	</div>
	<div class="event-body">
		<h2>
			{event.summary}
		</h2>
		<span class="date-days">
			{new Date(event.start).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				weekday: 'long'
			})}
		</span>
		<span class="date-time">
			{timeRangeFormatter.formatRange(new Date(event.start), new Date(event.end))}
		</span>

		<div class="body">
			{@html sanitizeHTML(event.description)}
			{#if event.location}
				<br />
				<br />
				{event.location}
			{/if}
		</div>
	</div>
</section>

<style>
	.event-snippet {
		display: flex;
		flex-direction: column;
		height: 90vh;
		position: relative;

		@media (min-width: 900px) {
			flex-direction: row;
			overflow: hidden;
		}
	}

	.floating-logo {
		position: absolute;
		color: var(--light-cream);
		right: 0;
		top: 0;
		width: 36rem;
		pointer-events: none;
		z-index: 0;

		transform: translate(30%, 30%);

		display: none;
		@media (min-width: 900px) {
			display: block;
		}
	}

	.event-snippet-img-wrapper {
		box-sizing: border-box;
		background: black;
		padding: 3rem;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		img {
			height: 100%;
			aspect-ratio: 8.5/ 11;
			object-fit: cover;
		}
	}

	.event-body {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		box-sizing: border-box;
		background-color: var(--cream);

		@media (min-width: 900px) {
			overflow: auto;
		}

		h2 {
			font-size: 3rem;
			text-transform: uppercase;
			margin: 0;

			z-index: 1;
		}
	}

	.date-time {
		text-transform: none;
		margin-bottom: 2rem;
		z-index: 1;
	}
	.date-days {
		text-transform: uppercase;
		font-size: 1.25rem;
		z-index: 1;
	}

	.body {
		font-weight: normal;
		text-transform: none;
		z-index: 1;
	}
</style>
