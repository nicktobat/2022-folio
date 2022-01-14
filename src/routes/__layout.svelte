<script>
	import SideNav from '$lib/SideNav.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import PageTransitions from '$lib/PageTransitions.svelte';
	import '../app.scss';
  import { page } from '$app/stores';

  $: isActive = $page.url.pathname === $$props.href;
</script>


<SideNav />
<!-- <PageTransitions refresh={$page.url.pathname}> -->
<slot />
<!-- </PageTransitions> -->
<Footer />


<style lang="scss">

</style>
