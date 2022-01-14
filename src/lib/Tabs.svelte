<script>
  import { onMount } from "svelte";

  export let items = [];
  export let activeTabValue;

  onMount(() => {
    // Set default tab value
    activeTabValue = 0;
  });

  const handleClick = tabValue => () => {
    activeTabValue = tabValue;
  };
</script>


<ul class="chips">
  {#if Array.isArray(items)}
    {#each items as item, i (item.id)}
      <button
        class={activeTabValue === i ? 'active' : ''}
        on:click="{() => {
          activeTabValue = i;
        }}"
      >
        {item.text}
      </button>
    {/each}
  {/if}
</ul>


<style lang="scss">

ul.chips {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;

  button {
    color: $black;
    background-color: $white;
    border: 2px solid $black;
    margin-right: 16px;
    font-size: 18px;
    line-height: 24px;
    padding: 20px 24px;
    border-radius: 64px;
    transition: all 400ms;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background-color: rgba(0,0,0,0.24);
    }

    &.active {
      background-color: $black;
      color: $white;

      &:hover {
        background-color: rgba(0,0,0,0.76);
      }
    }
  }
}

</style>