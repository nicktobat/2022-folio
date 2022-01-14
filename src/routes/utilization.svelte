<script context="module">
	import { browser, dev } from '$app/env';
  import Back from '$lib/Back.svelte';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;

  let portrait = './static/portrait.jpg';
</script>

<svelte:head>
	<title>Utilization Reports</title>
</svelte:head>

<main>

  <Back></Back>

  <div class="content">
    <div class="top">
      <h2>Utilization Reports</h2>
      <p>Dynamic, flexible, real-time reporting on the building blocks of your company: Component Utilization Reports leverage powerful filtering on your entire dataset for supremely segmented analytics.</p>
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

      .top {
        max-width: 800px;

        h2 {
          margin-bottom: 16px;
        }
        
        p {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
    
	}
</style>
