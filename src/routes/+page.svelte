<script lang="ts">
	import PhotoNode from './PhotoNode.svelte';
	import grow from '$lib/images/grow.png';
	import connect from '$lib/images/connect.png';
	import worship from '$lib/images/worship.png';
	import PillButton from './PillButton.svelte';
	import { processLink } from '$lib/utils';
	import type { PageProps } from './$types';
	import LogoOnly from './LogoOnly.svelte';
	import FooterLogo from './FooterLogo.svelte';
	import ColorInheritLogo from './ColorInheritLogo.svelte';

	// TODO:
	// functional dialog hooked into key event
	// cron job
	// assets

	const { data }: PageProps = $props();
	const { events, firstVideo } = data;
	const firstEvent = events[0];
</script>

<svelte:head>
	<title>Sturge Presbyterian Church - Home</title>
	<meta name="description" content="Sturge Presbyterian Church Home Page" />
</svelte:head>

<section>
	{#if firstEvent}
		<div class="banner">
			<div class="multiply-layer"></div>

			<div class="banner-content">
				Save the date: {new Date(firstEvent.start).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}: {firstEvent.summary}
				<PillButton size="responsive" onclick={() => {}}>Learn more</PillButton>
			</div>
		</div>
	{/if}
	<section class="hero">
		<div class="hero-text">
			<h2>connect. grow. worship.</h2>
			<span>together in christ jesus.</span>
			<div class="zoom-button">
				<PillButton href="https://us06web.zoom.us/j/82465688368">ENGLISH ZOOM</PillButton>
			</div>
		</div>
	</section>
	<section class="worship-times">
		<div class="worship-times-content">
			<h1>Sturge Presbyterian Church</h1>
			Join us for worship services on Sundays at<br /> 9:00am Japanese &bull; 10:45am English
			<a href="https://maps.app.goo.gl/ttgJf9wqB37656627">google maps</a>
		</div>
		<div class="multiply-layer"></div>
	</section>
	<div class="cream-background">
		<section class="photo-nodes">
			<PhotoNode
				href="https://google.com"
				title="connect with us"
				description="Come fellowship with us and celebrate our faith, cultures, history, and food!"
				imgSrc={connect}
			/>
			<PhotoNode
				href="https://google.com"
				title="grow with us"
				description="Join us we serve our local and global communities"
				imgSrc={grow}
				imgSide="right"
			/>
			<PhotoNode
				href="https://google.com"
				title="worship with us"
				description="Join us Sundays at 25 S Humboldt St, San Mateo, CA 94401 at 9:00am for Nichigo service, or 10:45am for English service"
				imgSrc={worship}
			/>
		</section>
		<div class="bg-flower">
			<ColorInheritLogo />
		</div>
		<section class="upcoming-events">
			<div>
				<h1>Featured Events</h1>
				<PillButton href="https://google.com">All Events</PillButton>
			</div>
			<ul>
				{#each events as event}
					<li>
						<img
							src={event.attachments[0].fileId
								? `https://drive.google.com/thumbnail?id=${event.attachments[0].fileId}`
								: connect}
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
	</div>
	<section class="sermons">
		<div>
			<div class="sermon-header">
				<h1>Latest Sermon</h1>
				<PillButton href="https://www.youtube.com/@sturgechurch">All sermons</PillButton>
			</div>
			<div class="sermon-video">
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${firstVideo?.id || 'Hbz8Slq6N5s'}`}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				>
				</iframe>
				<span>{firstVideo?.description || 'Random video!'}</span>
			</div>
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

	<section class="mission">
		<div class="mission-content">
			<div class="logo">
				<LogoOnly />
			</div>
			<div class="divider"></div>
			<div>
				<h2>our mission statement</h2>
				Bringing Asian believers together, while welcoming all into our family, to provide hope, support
				and service to local and global communities, in the name of Jesus Christ.
			</div>
		</div>
	</section>
</section>

<style>
	.banner {
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 0.7rem;

		@media (min-width: 700px) {
			font-size: 1rem;
			padding: 0.5rem 2rem;
		}

		background-color: var(--deep-purple);
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.8px;
		color: white;

		position: relative;

		.multiply-layer {
			height: 130%;
			width: 100%;
			background-color: color-mix(in oklch, var(--deep-purple), transparent 40%);
			top: 0;
			position: absolute;
			pointer-events: none;
			left: 0;
			z-index: 1;
		}

		.banner-content {
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			position: relative;
		}
	}

	.hero {
		position: relative;
		background-image: url('$lib/images/bg-hero.png');
		background-size: cover;
		background-position: center;

		align-content: center;

		aspect-ratio: 3 / 2;
		@media (min-width: 700px) {
			aspect-ratio: 6 / 2;
		}

		.zoom-button {
			position: absolute;
			bottom: 3rem;
		}

		.hero-text {
			--padding-x: 1rem;

			backdrop-filter: contrast(70%) blur(1px);
			width: calc(100% - 2 * var(--padding-x));
			height: 100%;

			padding: 0 var(--padding-x);

			display: flex;
			gap: 0.2rem;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			color: white;

			h2 {
				font-size: 1.8rem;
				line-height: 1.5;
				margin: 0;

				@media (min-width: 700px) {
					font-size: 3rem;
				}
			}

			span {
				text-transform: uppercase;
				align-self: flex-start;
				align-self: auto;
			}
		}
	}

	.worship-times {
		position: relative;
		padding: 1rem;
		font-size: 0.8rem;

		.worship-times-content {
			position: relative;
			z-index: 1;
		}

		@media (min-width: 700px) {
			padding: 2rem;
			font-size: 1rem;

			br {
				display: none;
			}
		}

		h1 {
			margin: 0 0 0.3rem;

			font-size: 1.2rem;

			@media (min-width: 700px) {
				font-size: 1.6rem;
			}
		}

		background-color: var(--sand);
		color: white;
		text-align: center;

		a {
			color: currentColor;

			&:focus-visible,
			&:hover {
				text-decoration-thickness: 2px;
			}
		}

		.multiply-layer {
			width: 100%;
			background-color: color-mix(in oklch, var(--sand), transparent 40%);
			position: absolute;
			bottom: -2px;
			left: 0;
			height: 120%;
			z-index: 0;
			pointer-events: none;
		}
	}

	.cream-background {
		background-color: var(--cream);

		.bg-flower {
			width: 90%;
			position: absolute;
			right: 0;
			transform: translate(150px, -50%);

			color: var(--light-cream);
		}
	}

	.photo-nodes {
		padding: 3rem 2rem;
		justify-items: center;

		position: relative;
		z-index: 1;
	}

	.upcoming-events {
		position: relative;
		z-index: 1;

		padding: 2rem;
		margin: 0 auto;
		max-width: 1000px;

		> div:first-child {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: space-between;
			margin-bottom: 1.5rem;
		}

		h1 {
			margin: 0;
			font-size: 2rem;

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
		position: relative;
		z-index: 1;

		.sermon-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1.5rem;
		}

		.sermon-video {
			display: flex;
			flex-direction: column;
			align-items: center;

			aspect-ratio: 16 / 9;

			> span {
				margin-top: 0.5rem;
			}
		}

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

	@media (min-width: 700px) {
		.mission {
			text-align: left;

			.mission-content {
				flex-direction: row;
				gap: 3rem;
			}

			.divider {
				height: 7rem;
				border-right: 1px solid var(--deep-purple);
				border-bottom: none;
				width: 0px;
			}
		}
	}

	.mission {
		background: var(--light-cream);
		text-align: center;

		.mission-content {
			max-width: 1000px;
			margin: 0 auto;
			padding: 2rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.logo {
			height: 7rem;
			width: 7rem;
			flex-shrink: 0;
		}

		.divider {
			height: 0px;
			width: 14rem;
			max-width: 100%;
			border-bottom: 1px solid var(--deep-purple);
			border-right: none;
		}

		h2 {
			font-size: 1.5rem;
			margin: 0 0 0.25rem;
		}
	}
</style>
