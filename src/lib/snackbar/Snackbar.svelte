<script>
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'
  import Icon from '$lib/Icon.svelte'
  const dispatch = createEventDispatcher()

  export let type = 'error';
  export let dismissible = true;
</script>

<article class={type} role="alert" transition:fade>
  <div class="text">
    <slot />
  </div>

  {#if dismissible}
    <button class="close" on:click={() => dispatch('dismiss')}>
      <Icon title="close" />
    </button>
  {/if}
</article>

<style lang="scss">
  article {
    background-color: $black;
    color: $white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;

    .text {
      font-family: 'Days One';
    }
  }

  button {
    color: $white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
    fill: $white;
    cursor: pointer;
  }
</style>