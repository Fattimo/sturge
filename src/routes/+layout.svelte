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
			<div class="contact-form">
				Stay connected with out <b>Weekly eNewsletter</b>
				<input />
				<input />
				<input />
				<button>Submit</button>
			</div>
			<div class="join">
				<b>Join us for Sunday worship</b>
				<span>9:00am Japanese service</span>
				<span>10:45am English service</span>
			</div>
			<div class="logo">logo here, Sturge</div>
			<div class="contact">
				Contact:
				<a href="">650.344.6803</a>
			</div>
			<div class="visit">Visit: 25 S. Humboldt Street San Mateo, CA 94401</div>
			<div class="follow">
				<b>Follow:</b>
				youtuve, instagram, faacebook
			</div>
		</section>
		<div class="copyright">© 2025 Sturge Presbyterian Church. All rights reserved</div>
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
		max-width: 100vw;
		overflow: hidden;

		.red-spacer {
			background-color: var(--red);
			height: 16px;
			width: 100%;
		}

		.content-area {
			padding: 1em;

			@media (min-width: 700px) {
				padding: 1em 2em;
			}

			display: grid;
			gap: 1em;

			grid-template-areas:
				'logo join'
				'contact contact'
				'visit visit'
				'follow follow'
				'contact-form contact-form';

			@media (min-width: 700px) {
				gap: 1.25em;
				grid-template-areas:
					'contact-form join contact'
					'contact-form join contact'
					'contact-form join visit'
					'contact-form logo visit'
					'contact-form logo follow'
					'contact-form logo follow';
			}

			.contact-form {
				grid-area: contact-form;
			}

			.logo {
				grid-area: logo;
			}

			.contact {
				grid-area: contact;
			}

			.follow {
				grid-area: follow;
			}

			.visit {
				grid-area: visit;
			}

			.join {
				grid-area: join;

				display: flex;
				flex-direction: column;
				text-align: center;
			}
		}
	}

	.copyright {
		padding: 1em;

		@media (min-width: 700px) {
			padding: 1em 2em;
			font-size: 0.5rem;
		}
	}
</style>
