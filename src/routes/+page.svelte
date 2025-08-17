<script lang="ts">
	import PhotoNode from './PhotoNode.svelte';
	import worshipImage from '$lib/images/worship-image.jpg';
	import PillButton from './PillButton.svelte';
	import { processLink } from '$lib/utils';
	import type { PageProps } from './$types';

	const dummyVideos = ['event 1', 'event 2', 'event 3'];
	// TODO:
	// functional youtube
	// functional dialog hooked into key event
	// cron job
	// assets

	const { data }: PageProps = $props();
	const { events } = data;
	const firstEvent = events[0];
</script>

<svelte:head>
	<title>Sturge Presbyterian Church - Home</title>
	<meta name="description" content="Sturge Presbyterian Church Home Page" />
</svelte:head>

<section>
	{#if firstEvent}
		<div class="banner">
			Save the date: {new Date(firstEvent.start).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}: {firstEvent.summary}
			<PillButton onclick={() => {}}>Learn more</PillButton>
		</div>
	{/if}
	<section class="hero">
		<div class="hero-text">
			<h1>connect. grow. worship</h1>
			<span>together in christ jesus</span>
		</div>
	</section>
	<section class="worship-times">
		Join us for worship on Sundays in-person at <a href="https://maps.app.goo.gl/ttgJf9wqB37656627"
			>Sturge Presbyterian Church</a
		>
		or <a href="https://us06web.zoom.us/j/82465688368">online on Zoom</a> at 9:00am Japanese &bull; 10:45am
		English
	</section>
	<section class="photo-nodes">
		<PhotoNode
			href="https://google.com"
			title="connect with us"
			description="Come fellowship with us and celebrate our faith, cultures, history, and food!"
			imgSrc={worshipImage}
		/>
		<PhotoNode
			href="https://google.com"
			title="grow with us"
			description="Join us we serve our local and global communities"
			imgSrc={worshipImage}
			imgSide="right"
		/>
		<PhotoNode
			href="https://google.com"
			title="worship with us"
			description="Join us Sundays at 25 S Humboldt St, San Mateo, CA 94401 at 9:00am for Nichigo service, or 10:45am for English service"
			imgSrc={worshipImage}
		/>
	</section>
	<section class="upcoming-events">
		<h1>Upcoming Events</h1>
		<ul>
			{#each events as event}
				<li>
					<img
						src={event.attachments[0].fileId
							? `https://drive.google.com/thumbnail?id=${event.attachments[0].fileId}`
							: worshipImage}
						alt={event.summary}
					/>
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
				</li>
			{/each}
		</ul>
	</section>
	<section class="sermons">
		<div>
			<h1>Recent Sermons</h1>
			<ul>
				{#each dummyVideos as event}
					<li>
						<img src={worshipImage} alt={event} />
						{event}
					</li>
				{/each}
			</ul>
		</div>
	</section>
	<section class="contact-us">
		<div class="contents">
			<div>
				<h1 id="contact-success">contact us</h1>
				<p>We'd love to hear from you!</p>
			</div>
			<form action="https://api.web3forms.com/submit" method="POST">
				<input placeholder="Name*" name="name" required />
				<input placeholder="Email*" name="email" required type="email" />
				<input placeholder="Phone*" name="phone" required type="tel" />
				<textarea placeholder="Questions" name="questions"></textarea>

				<input type="hidden" name="access_key" value="b7687713-373a-47bc-aead-650d3987eb01" />
				<input type="hidden" name="subject" value="[sturge.com] Contact Request" />
				<input type="hidden" name="redirect" value={processLink('#contact-success')} />

				<button type="submit">Submit</button>
			</form>
			<div class="success">request received!</div>
		</div>
	</section>
</section>

<style>
	.banner {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		width: 100%;
		padding: 0.5rem;

		font-size: 0.8rem;

		@media (min-width: 700px) {
			font-size: 1rem;
		}

		background-color: var(--slate-blue);
		color: white;
	}

	.hero {
		background-image: url('$lib/images/bg-hero.jpg');
		background-size: cover;
		background-position: center;

		align-content: center;

		aspect-ratio: 3 / 2;
		@media (min-width: 700px) {
			aspect-ratio: 6 / 2;
		}

		.hero-text {
			--padding-x: 1rem;

			backdrop-filter: contrast(60%) blur(5px);
			width: calc(100% - 2 * var(--padding-x));
			height: 100%;

			padding: 0 var(--padding-x);

			display: flex;
			gap: 0.2rem;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			color: white;

			h1 {
				font-size: 2.5rem;
				line-height: 1.5;
				margin: 0;

				@media (min-width: 700px) {
					font-size: 3rem;
				}
			}

			span {
				text-transform: uppercase;
				align-self: flex-start;

				@media (min-width: 580px) {
					align-self: auto;
				}
			}
		}
	}

	.worship-times {
		padding: 1rem;
		font-size: 0.8rem;

		@media (min-width: 700px) {
			padding: 2rem;
			font-size: 1rem;
		}

		background-color: var(--deep-purple);
		color: white;
		text-align: center;

		a {
			color: currentColor;

			&:focus-visible,
			&:hover {
				text-decoration-thickness: 2px;
			}
		}
	}

	.photo-nodes {
		padding: 3rem 2rem;
		background-color: var(--cream);
		justify-items: center;
	}

	.upcoming-events {
		padding: 2rem;
		margin: 0 auto;
		max-width: 1000px;

		h1 {
			margin: 0;
			font-size: 2rem;
			margin-bottom: 1.5rem;

			text-transform: lowercase;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			display: grid;
			justify-content: center;

			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;

			@media (min-width: 700px) {
				gap: 3rem;
				grid-template-columns: repeat(3, 1fr);
			}

			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.date {
					text-transform: uppercase;
					font-size: 0.8rem;
					margin-top: 0.75rem;
				}

				.event-title {
					font-weight: 600;
				}
			}

			img {
				width: 100%;
				aspect-ratio: 8.5 / 11;
				object-fit: cover;
			}
		}
	}

	.sermons {
		background: var(--khaki);
		> div {
			margin: 0 auto;
			padding: 1rem;
			max-width: 1000px;

			@media (min-width: 700px) {
				padding: 2rem;
			}
		}

		h1 {
			margin: 0;
			font-size: 1.5rem;
			text-transform: lowercase;
			color: var(--deep-purple);

			margin-bottom: 1.5rem;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			display: grid;
			justify-content: center;

			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;

			@media (min-width: 700px) {
				gap: 3rem;
				grid-template-columns: repeat(4, 1fr);
			}

			li {
				display: flex;
				flex-direction: column;
			}

			img {
				width: 100%;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}
		}
	}

	.contact-us {
		background: var(--gray);

		.success {
			margin-top: 0.5rem;
			display: none;
		}

		&:has(#contact-success:target) {
			.success {
				display: block;
			}
		}

		.contents {
			margin: 0 auto;
			padding: 1rem;
			max-width: 1000px;
			color: white;

			display: grid;
			align-items: center;
			gap: 0 3rem;

			@media (min-width: 700px) {
				padding: 2rem;
				grid-template-columns: 1fr auto;

				> div:first-child {
					grid-column: 2 / 3;
				}

				> form {
					margin-top: 0;
					grid-column: 1 / 2;
					grid-row: 1 / 2;
				}
			}
		}

		h1 {
			margin: 0;
			font-size: 3rem;
		}

		p {
			margin: 0.3rem 0;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
			font-size: 0.7rem;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			margin-top: 1rem;

			textarea,
			input {
				padding: 0.4rem;
				background-color: var(--light-gray);
				margin: 0;
				border: 0;
				border-radius: 0.25rem;
				resize: vertical;

				&::placeholder {
					font-size: 0.6rem;
					font-family: Lexend;
					color: black;
					text-transform: uppercase;
					font-weight: 700;
					transform: translateY(-0.25rem);
				}
			}

			button {
				background-color: var(--orange);
				padding: 0.5rem;
				border: none;
				border-radius: 0.25rem;
				color: white;

				font-size: 0.7rem;
				text-transform: uppercase;
				font-weight: 500;
				letter-spacing: 0.08rem;
			}
		}
	}
</style>
