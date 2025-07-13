<script lang="ts">
	let {
		title,
		description,
		href,
		imgSrc,
		imgSide = 'left'
	}: {
		title: string;
		description: string;
		href: string;
		imgSrc: string;
		imgSide?: 'left' | 'right';
	} = $props();
</script>

<section class="photo-node">
	{#snippet image()}
		<div><img src={imgSrc} alt={`image of ${title}`} /></div>
	{/snippet}
	{#if imgSide === 'left'}
		{@render image()}
	{/if}
	<div>
		<h3>{title}</h3>
		<div>{description}</div>
		<a {href}>Learn More</a>
	</div>
	{#if imgSide === 'right'}
		{@render image()}
	{/if}
</section>

<style>
	.photo-node {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 20px;
		width: 100%;
		max-width: 1000px;

		img {
			width: 100%;
		}
	}
</style>
