<script lang="ts">
	// import github from '$lib/images/github.svg';

	import type { LayoutProps } from './$types';

	import Header from './Header.svelte';

	import '../app.css';
	import FooterLogo from './FooterLogo.svelte';

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
				Stay connected with our <b>Weekly eNewsletter</b>
				<input name="name" placeholder="name" />
				<input name="email" placeholder="email" />
				<button>Submit</button>
			</div>
			<div class="join">
				<b>Join us for Sunday worship</b>
				<span>9:00am Japanese service</span>
				<span>10:45am English service</span>
			</div>
			<div class="logo"><FooterLogo /></div>
			<div class="contact">
				Contact:
				<a href="tel:+6503446803">650.344.6803</a>
				<a href="mailto:admin@sturge.org">admin@sturge.org</a>
			</div>
			<div class="visit">
				Visit:
				<a
					href="https://maps.app.goo.gl/xCPBSYawYzBjYnGz6"
					target="_blank"
					rel="noopener noreferrer"
				>
					25 S. Humboldt Street San Mateo, CA 94401
				</a>
			</div>
			<div class="follow">
				<b>Follow:</b>
				youtube, instagram, facebook
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
			max-width: 1000px;
			margin: 0 auto;

			@media (min-width: 700px) {
				padding: 1em 2em;
			}

			display: grid;
			gap: 0 1em;

			grid-template-areas:
				'join'
				'contact'
				'visit '
				'follow'
				'contact-form'
				'logo';
			grid-template-columns: 1fr;

			@media (min-width: 700px) {
				gap: 0 2rem;
				grid-template-areas:
					'contact-form join contact'
					'contact-form join contact'
					'contact-form join visit'
					'contact-form logo visit'
					'contact-form logo follow'
					'contact-form logo follow';
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-rows: repeat(6, fit-content);
			}

			.contact-form {
				grid-area: contact-form;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				font-weight: 350;

				> b {
					font-size: 1.25rem;
				}

				> input {
					background: transparent;
					border: 1px solid white;
					color: white;
					padding: 0.5rem 0.75rem;
					border-radius: 10px;

					&::placeholder {
						color: lightgray;
					}
				}

				> button {
					background-color: var(--orange);
					color: white;
					text-transform: uppercase;
					padding: 0.5rem 0.75rem;
					border-radius: 10px;
				}
			}

			.logo {
				grid-area: logo;
				fill: white;
				margin-top: 2rem;
				place-self: center;
			}

			.contact {
				grid-area: contact;
			}

			.follow {
				grid-area: follow;
				visibility: hidden;
			}

			.visit {
				grid-area: visit;
			}

			.contact,
			.follow,
			.visit {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				font-weight: 600;
				text-transform: uppercase;
				margin-top: 1rem;

				text-align: center;

				@media (min-width: 700px) {
					text-align: left;
				}

				> a {
					color: white;
					font-weight: 350;
					text-transform: none;
					font-size: 0.75rem;
				}
			}

			.join {
				grid-area: join;

				display: flex;
				flex-direction: column;
				text-align: center;

				height: 100%;
				justify-content: flex-end;

				span {
					font-weight: 350;
				}

				b {
					margin-bottom: 1rem;
					font-size: 1.25rem;
					font-weight: bold;
				}
			}
		}
	}

	.copyright {
		padding: 1em;
		width: 1000px;
		max-width: 100vw;
		margin: 0 auto;

		@media (min-width: 700px) {
			padding: 1em 2em;
			font-size: 0.5rem;
		}
	}
</style>
