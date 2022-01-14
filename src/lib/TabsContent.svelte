<script>
  import Tabs from './Tabs.svelte';
  import Dropdown from '$lib/Dropdown.svelte';
  import IXD from '$lib/IXD.svelte';
  import Graphics from './Graphics.svelte';
  import DS from './DS.svelte';
  import Misc from './Misc.svelte';

  import { fly, fade } from 'svelte/transition';

  let w;

  // List of tab items with labels and values.
  let tabItems = [
    { id: '0', text: "Interaction Design" },
    { id: '1', text: "Graphics" },
    { id: '2', text: "Design Systems" },
    { id: '3', text: "Miscellaneous" }
  ];

  // Current active tab
  let currentTab;
</script>


<div id="wrapper" bind:clientWidth={w}>
  {#if w < 600}
  <Dropdown
    hideLabel
    titleText="Page"
    selectedIndex={0}
    items={tabItems}
    bind:activeTabValue={currentTab}
  />
  {:else}
  <Tabs bind:activeTabValue={currentTab} items={tabItems} />
  {/if}
</div>



<div class="transitioner">
  {#if 0 === currentTab}
  <div
    in:fly={{ x: -400, duration: 600 }}
    out:fly={{ y: 200, duration: 400 }}
    class="content"
  >
    <IXD />
  </div>
  {/if}

  {#if 1 === currentTab}
  <div
    in:fly={{ x: -400, duration: 600 }}
    out:fly={{ y: 200, duration: 400 }}
    class="content"
  >
    <Graphics />
  </div>
  {/if}

  {#if 2 === currentTab}
  <div
    in:fly={{ x: -400, duration: 600 }}
    out:fly={{ y: 200, duration: 400 }}
    class="content"
  >
    <DS />
  </div>
  {/if}

  {#if 3 === currentTab}
  <div
    in:fly={{ x: -400, duration: 600 }}
    out:fly={{ y: 200, duration: 400 }}
    class="content"
  >
    <Misc />
  </div>
  {/if}
</div>


<style lang="scss">

  #wrapper {
    padding: 0 0 64px 0;
  }

  .transitioner {
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 1;

    > * {
      grid-row: 1;
      grid-column: 1;
    }
  }
</style>
