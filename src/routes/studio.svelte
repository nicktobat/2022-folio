<script context="module">
	import { browser, dev } from '$app/env';
  import TabsContent from '$lib/TabsContent.svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>


<svelte:head>
	<title>Studio | Nicholas Tobat</title>
</svelte:head>

<main>
  <header>
    <div class="text">
      <h1>Studio</h1>
      <h3>I make stuff sometimes, in a variety of mediums.</h3>
    </div>
  </header>

  <section>
    <TabsContent />
  </section>

</main>


<style lang="scss">
  section {
    margin-top: 64px;
  }
</style>
