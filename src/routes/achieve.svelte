<script context="module">
	import { browser, dev } from '$app/env';
  import Back from '$lib/Back.svelte';

	export const hydrate = dev;

	export const router = browser;

	export const prerender = true;
</script>

<svelte:head>
	<title>Achievements</title>
</svelte:head>

<div class="content">

  <Back></Back>

  <div class="text">
    <h2>Achievements</h2>
    <p>
      I am a fully self-taught designer, life-long learner, and adventure-seeker. My journey in design began when I moved to San Francisco in 2014, where I learned to delight in the process and intersection of discovery and creation. Since then, my adventures have taken me around the world and back again. I strive to produce work that makes the terms "useful" and "beautiful" redundant.
    </p>
  </div>


</div>

<style lang="scss">
	.content {
    padding: 64px 64px 80px;
    min-height: 504px;

    .text {
      max-width: 480px;

      p {
        margin-top: 16px;
        font-family: 'Forum';
      }
    }
	}
</style>
