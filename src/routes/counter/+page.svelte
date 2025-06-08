<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Counter from '../Counter.svelte';
</script>

<svelte:head>
	<title>Javascript page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<p>This page has js</p>
	<p>{m.hello_world({ name: 'interactive page' })}</p>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
