<script context="module">
  import { base } from '$app/paths';
  import Index from '$lib/Index.svelte';
	export const prerender = true;
</script>


<svelte:head>
	<title>Nicholas Tobat - Home</title>
  <link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<main>

  <Index></Index>

</main>


<style lang="scss">

  

</style>
