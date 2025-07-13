<script lang="ts">
	// import github from '$lib/images/github.svg';

	import type { LayoutProps } from './$types';

	import Header from './Header.svelte';

	import '../app.css';

	const { children }: LayoutProps = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="red-spacer"></div>
		<section class="content-area">
			<div>
				Stay connected with out <b>Weekly eNewsletter</b>
				<input />
				<input />
				<input />
				<button>Submit</button>
			</div>
			<div class="center">
				<b>Join us for Sunday worship</b>
				<span>9:00am Japanese service</span>
				<span>10:45am English service</span>
				<div>logo here, Sturge</div>
			</div>
			<div>
				<div>
					Contact:
					<a href="">650.344.6803</a>
				</div>
				<div>Visit: 25 S. Humboldt Street San Mateo, CA 94401</div>
				<div>
					<b>Follow:</b>
					youtuve, instagram, faacebook
				</div>
			</div>
		</section>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		max-width: 100vw;
		overflow-x: hidden;
		overflow-y: auto;
	}

	footer {
		background-color: var(--deep-purple);
		color: white;

		.red-spacer {
			background-color: var(--red);
			height: 16px;
			width: 100%;
		}

		.content-area {
			padding: 16px 48px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;

			.center {
				display: flex;
				flex-direction: column;
				text-align: center;
			}
		}
	}
</style>
