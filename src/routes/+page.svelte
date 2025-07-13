<script lang="ts">
	import PhotoNode from './PhotoNode.svelte';
	import worshipImage from '$lib/images/worship-image.jpg';

	const dummyEvents = ['event 1', 'event 2', 'event 3'];
</script>

<svelte:head>
	<title>Sturge Presbyterian Church - Home</title>
	<meta name="description" content="Sturge Presbyterian Church Home Page" />
</svelte:head>

<section>
	<div class="banner">Save the date: XXXX-XXX-XXX<a href="google.com">Learn more</a></div>
	<section class="hero">
		<div class="hero-text">
			<h1>worship. connect. grow.</h1>
			<span>together in christ jesus</span>
		</div>
	</section>
	<section class="worship-times">
		Join us for worship on Sundays in-person or online at 9:00am Japanese &bull; 10:45am English
	</section>
	<section class="photo-nodes">
		<PhotoNode
			href="google.com"
			title="worship with us"
			description="Join us Sundays at 9:00am for Nichigo service, or 10:45am for English service"
			imgSrc={worshipImage}
		/>
		<PhotoNode
			href="google.com"
			title="grow with us"
			description="Join us we serve our local and global communities"
			imgSrc={worshipImage}
			imgSide="right"
		/>
		<PhotoNode
			href="google.com"
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
	</section>
	<section class="contact-us">
		<h1>contact us</h1>
	</section>
</section>

<style>
	.banner {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 6px;

		width: 100%;
		padding: 6px;
		text-transform: uppercase;

		font-size: 14px;

		background-color: var(--red);
		color: white;

		a {
			border-radius: 99999px;
			border: 1px solid white;
			padding: 6px;
			font-size: 10px;
		}
	}

	.hero {
		background-image: url('$lib/images/bg-hero.jpg');
		background-size: cover;
		background-position: center;

		align-content: center;

		aspect-ratio: 6 / 2;

		.hero-text {
			backdrop-filter: contrast(60%) blur(5px);
			width: 100%;
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			color: white;

			h1 {
				font-size: 48px;
				line-height: 1.5;
				margin: 0;
			}

			span {
				text-transform: uppercase;
			}
		}
	}

	.worship-times {
		padding: 32px 0;
		background-color: var(--deep-purple);
		color: white;
		text-align: center;
	}

	.photo-nodes {
		padding: 50px;
		background-color: var(--cream);
		justify-items: center;
	}

	.upcoming-events {
		padding: 48px;

		h1 {
			margin: 0;
			font-size: 28px;
			margin-bottom: 20px;

			text-transform: lowercase;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 50px;

			li {
				display: flex;
				flex-direction: column;
			}

			img {
				width: 150px;
				aspect-ratio: 1 / 2;
				object-fit: cover;
			}
		}
	}

	.contact-us {
		background: gray;
		height: 200px;

		h1 {
			margin: 0;
		}
	}

	.sermons {
		background: var(--brown);
		height: 200px;

		h1 {
			margin: 0;
		}
	}
</style>
