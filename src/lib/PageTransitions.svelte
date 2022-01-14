<script>
  import { fly, fade } from 'svelte/transition';
  export let refresh = '';
</script>


{#key refresh}
  <div
    out:fly|local="{{ y: -50, duration: 250 }}"
  >
    <slot />
  </div>
{/key}


<style lang="scss">

  /* div {
    opacity: 0;
    animation: page 400ms linear forwards;
  } */

  @keyframes page {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }

</style>