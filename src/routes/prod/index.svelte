<script context="module">
  import { browser, dev } from '$app/env';
  import Work from '$lib/Work.svelte';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;

  let tags = {
    kinis: ['Mobile App', 'Health', 'SaaS', 'UI Library'],
    reconcile: ['Fintech', 'Product', 'Feature', 'SaaS'],
    utilize: ['PLM', 'Product', 'Feature', 'SaaS'],
  };
</script>


<svelte:head>
	<title>Product Design | Nicholas Tobat</title>
</svelte:head>

<main>
  <header>
    <div class="text">
      <h1>Product Design</h1>
      <h3>My day job is all about moving rectangles around.</h3>
    </div>
  </header>
  
  <section>
    <Work
      href="/prod/kinis"
      name="Kinis App"
      desc="Leading design and product management for a brand-new fitness and wellness application."
      src="/kinispreview.png"
      color="#1A1A1A"
      bgColor="26, 26, 26"
      tags={tags.kinis}
    />
    <Work
      name="Reconciliation"
      desc="An intuitive interface for matching and posting book and bank transactions."
      src="/reconcilepreview.jpg"
      color="#006064"
      bgColor="0, 96, 100"
      tags={tags.reconcile}
    />
    <Work
      name="Utilization Reports"
      desc="A robust reporting tool for the building blocks of your company: components."
      src="/utilizepreview.png"
      color="#007AFF"
      bgColor="0, 122, 255"
      tags={tags.utilize}
    />
  </section>
</main>


<style lang="scss">
  section {
    margin-top: 64px;
  }
</style>
