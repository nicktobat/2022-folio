<script context="module">
	import { browser, dev } from '$app/env';
  import Back from '$lib/Back.svelte';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main>

  <Back></Back>

  <div class="content">
    <div class="portrait">
      <img src='/portrait.jpg' alt="Portrait of Nick" />
    </div>
    <div class="text">
      <h2>I'm Nick.</h2>
      <p>
        I am a fully self-taught designer, life-long learner, and adventure-seeker. My journey in design began when I moved to San Francisco in 2014, where I learned to delight in the process and intersection of discovery and creation. Since then, my adventures have taken me around the world and back again. I strive to produce work that makes the terms "useful" and "beautiful" redundant.
      </p>
    </div>
  </div>


</main>


<style lang="scss">
	main {
    padding: 64px 64px 80px;
    min-height: 504px;

    .content {
      display: flex;
      align-items: center;
      padding: 0 6px;

      .portrait {
        img {
          max-width: 360px;
          height: auto;
          padding: 4px;
          border: 1px solid $black;
          background-color: $white;
          box-shadow: -4px 4px $white, -5px 5px $black, 4px -4px white, 5px -5px $black;
        }
      }

      .text {
        max-width: 480px;
        margin-left: 40px;
  
        p {
          margin-top: 16px;
          font-family: 'Forum';
        }
      }
    }
    
	}
</style>
