<script lang="ts">
	import PhotoNode from './PhotoNode.svelte';
	import worshipImage from '$lib/images/worship-image.jpg';
	import PillButton from './PillButton.svelte';

	const dummyEvents = ['event 1', 'event 2', 'event 3'];
	const dummyVideos = ['event 1', 'event 2', 'event 3'];
</script>

<svelte:head>
	<title>Sturge Presbyterian Church - Home</title>
	<meta name="description" content="Sturge Presbyterian Church Home Page" />
</svelte:head>

<section>
	<div class="banner">
		Save the date: XXXX-XXX-XXX<PillButton onclick={() => {}}>Learn more</PillButton>
	</div>
	<section class="hero">
		<div class="hero-text">
			<h1>worship. connect. grow.</h1>
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
			title="worship with us"
			description="Join us Sundays at 25 S Humboldt St, San Mateo, CA 94401 at 9:00am for Nichigo service, or 10:45am for English service"
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
			title="connect with us"
			description="Come fellowship with us and celebrate our faith, cultures, history, and food!"
			imgSrc={worshipImage}
		/>
	</section>
	<section class="upcoming-events">
		<h1>Upcoming Events</h1>
		<ul>
			{#each dummyEvents as event}
				<li>
					<img src={worshipImage} alt={event} />
					{new Date().toLocaleDateString()}
					{event}
				</li>
			{/each}
		</ul>
	</section>
	<section class="sermons">
		<h1>Recent Sermons</h1>
		<ul>
			{#each dummyVideos as event}
				<li>
					<img src={worshipImage} alt={event} />
					{event}
				</li>
			{/each}
		</ul>
	</section>
	<section class="contact-us">
		<div>
			<h1>contact us</h1>
			<p>We'd love to hear from you!</p>
		</div>
		<form>
			<input placeholder="Name*" />
			<input placeholder="Email*" />
			<input placeholder="Phone*" />
			<textarea placeholder="Questions"></textarea>
			<button>Submit</button>
		</form>
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
		padding: 1rem;

		@media (min-width: 700px) {
			padding: 2rem;
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
		padding: 1rem;
		color: white;

		display: grid;
		align-items: center;
		gap: 0 3rem;

		max-width: 1000px;

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
