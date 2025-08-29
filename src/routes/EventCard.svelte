<script lang="ts">
	import type { GcalEvent } from './+page.server';
	import ColorInheritLogo from './ColorInheritLogo.svelte';
	import Dialog from './Dialog.svelte';
	import EventDialogContent from './EventDialogContent.svelte';

	type Props = {
		event: GcalEvent;
	};
	const { event } = $props();

	let dialogRef: Dialog;
</script>

<Dialog bind:this={dialogRef}>
	<EventDialogContent {event} />
</Dialog>
<button
	onclick={() => {
		dialogRef.open();
	}}
>
	{#if event.attachments[0]}
		<img
			src={event.attachments[0]?.fileId
				? `https://drive.google.com/thumbnail?id=${event.attachments[0].fileId}&sz=w1000`
				: ''}
			alt={event.summary}
		/>
	{:else}
		<div class="img-placeholder">
			<ColorInheritLogo></ColorInheritLogo>
		</div>
	{/if}
	<span class="date">
		{new Date(event.start).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</span>
	<span class="event-title">
		{event.summary}
	</span>
</button>

<style>
	button {
		width: 100%;
		padding: 0;
		outline: none;
	}

	.date {
		text-transform: uppercase;
		font-size: 0.8rem;
		margin-top: 0.75rem;
	}

	.event-title {
		font-weight: 600;
	}

	button {
		border: none;
		background: transparent;
		cursor: pointer;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.img-placeholder,
	img {
		width: 100%;
		aspect-ratio: 8.5 / 11;
		object-fit: cover;
	}

	.img-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--deep-purple);
		border-radius: 0.25rem;
		color: var(--light-cream);
	}
</style>
