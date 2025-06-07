<script lang="ts">
	import { page } from '$app/state';
</script>

<section>
	<h1>{page.error?.message || 'Some error'}</h1>
	<div>this is the error page!</div>
</section>
