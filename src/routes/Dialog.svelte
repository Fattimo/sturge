<!-- Dialog.svelte -->
<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog;

	/**
	 * Props including defaultOpen and children snippet
	 */
	let { defaultOpen = false, children } = $props();

	onMount(() => {
		if (defaultOpen && dialog) {
			dialog.showModal();
		}
	});

	/**
	 * Open the dialog
	 */
	export function open() {
		dialog?.showModal();
	}

	/**
	 * Close the dialog
	 */
	export function close() {
		dialog?.close();
	}

	/**
	 * Handle backdrop clicks
	 * @param {MouseEvent} e
	 */
	function handleBackdropClick(e) {
		// a click on the dialog will always include the backdrop, as its the entire screen.
		// We just need to check if it is within the bounds of the content
		const dialogContent = dialog.querySelector('.dialog-content');
		if (!dialogContent) {
			return;
		}

		const contentRect = dialogContent.getBoundingClientRect();
		const isOutsideContent =
			e.clientX < contentRect.left ||
			e.clientX > contentRect.right ||
			e.clientY < contentRect.top ||
			e.clientY > contentRect.bottom;

		if (isOutsideContent) {
			dialog.close();
		}
	}

	/**
	 * Handle escape key (native behavior, but we can add custom logic if needed)
	 * @param {Event} e
	 */
	function handleClose(e) {
		// You can add custom close logic here if needed
	}
</script>

<dialog bind:this={dialog} onclick={handleBackdropClick} onclose={handleClose} class="dialog">
	<div class="dialog-content">
		{@render children?.()}
	</div>
</dialog>

<style>
	/* Enable discrete animations */
	.dialog {
		/* Transition for open/close states */
		--transition-common: 0.2s ease-in-out;
		transition:
			opacity var(--transition-common),
			transform var(--transition-common),
			overlay var(--transition-common) allow-discrete,
			display var(--transition-common) allow-discrete;
	}

	/* Closed state */
	.dialog:not([open]) {
		opacity: 0;
	}

	/* Open state */
	.dialog[open] {
		opacity: 1;
	}

	/* Starting style for animation from display: none */
	@starting-style {
		.dialog[open] {
			opacity: 0;
		}
	}

	/* Dialog base styles */
	.dialog {
		padding: 0;
		border: none;
		border-radius: 12px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		max-width: 90vw;
		max-height: 90vh;
		background: white;
	}

	/* Backdrop animation */
	.dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		transition:
			opacity var(--transition-common),
			backdrop-filter var(--transition-common),
			overlay var(--transition-common) allow-discrete,
			display var(--transition-common) allow-discrete;
	}

	/* Backdrop starting style */
	@starting-style {
		.dialog[open]::backdrop {
			opacity: 0;
			backdrop-filter: blur(0px);
		}
	}

	/* Backdrop closed state */
	.dialog:not([open])::backdrop {
		opacity: 0;
		backdrop-filter: blur(0px);
	}

	/* Backdrop open state */
	.dialog[open]::backdrop {
		opacity: 0.35;
		backdrop-filter: blur(4px);
	}

	/* Content container */
	.dialog-content {
		min-width: 300px;
		position: relative;
		max-height: 90vh;
	}
</style>
