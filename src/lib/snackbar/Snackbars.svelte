<script>
  import Snackbar from './Snackbar.svelte'

  import { dismissToast, toasts } from './store'
</script>

{#if $toasts}
<section>
  {#each $toasts as toast (toast.id)}
    <Snackbar
      type={toast.type}
      dismissible={toast.dismissible}
      on:dismiss={() => dismissToast(toast.id)}>{toast.message}</Snackbar>
  {/each}
</section>
{/if}

<style lang="scss">

  section {
    position: fixed;
    bottom: 24px;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }

</style>
