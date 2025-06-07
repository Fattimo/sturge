<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.error?.message || 'Some error'}</h1>
