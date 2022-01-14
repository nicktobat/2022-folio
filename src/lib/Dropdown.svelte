<script>
  /**
   * @typedef {string} DropdownItemId
   * @typedef {string} DropdownItemText
   * @typedef {{ id: DropdownItemId; text: DropdownItemText; }} DropdownItem
   * @event {{ selectedId: DropdownItemId, selectedIndex: number, selectedItem: DropdownItem }} select
   */
  /**
   * Set the dropdown items
   * @type {DropdownItem[]}
   */

   onMount(() => {
    // Set default tab value
    if (Array.isArray(items) && items.length && items[0].id) {
      activeTabValue = 0;
      console.log(selectedIndex, selectedItem, selectedId);
    }
  });
  
  export let items = [];
  /**
   * Override the display of a dropdown item
   * @type {(item: DropdownItem) => string}
   */
  export let itemToString = (item) => item.text || item.id;
  /** Specify the selected item index */
  export let selectedIndex = 0;
  export let activeTabValue = 0;
  /**
   * Specify the type of dropdown
   * @type {"default" | "inline"}
   */
  export let type = "default";
  /**
   * Specify the direction of the dropdown menu
   * @type {"bottom" | "top"}
   */
  // export let direction = "bottom";
  /**
   * Specify the size of the dropdown field
   * @type {"sm" | "lg" | "xl"}
   */
  export let size = undefined;
  /** Set to `true` to open the dropdown */
  export let open = false;
  /** Set to `true` to use the inline variant */
  export let inline = false;
  /** Set to `true` to enable the light variant */
  export let light = false;
  /** Set to `true` to disable the dropdown */
  export let disabled = false;
  /** Specify the title text */
  export let titleText = "";
  /** Set to `true` to indicate an invalid state */
  export let invalid = false;
  /** Specify the invalid state text */
  export let invalidText = "";
  /** Set to `true` to indicate an warning state */
  export let warn = false;
  /** Specify the warning state text */
  export let warnText = "";
  /** Specify the helper text */
    /** export let helperText = ""; */
  /**
   * Specify the list box label
   * @type {string}
   */
  export let label = undefined;
  /** Set to `true` to visually hide the label text */
  export let hideLabel = false;
  /**
   * Override the default translation ids
   * @type {(id: any) => string}
   */
  export let translateWithId = undefined;
  /** Set an id for the list box component */
  export let id = "ccs-" + Math.random().toString(36);
  /**
   * Specify a name attribute for the list box
   * @type {string}
   */
  export let name = undefined;
  /** Obtain a reference to the button HTML element */
  export let ref = null;
  import { createEventDispatcher, onMount } from "svelte";
  import Icon from '$lib/Icon.svelte'
  // import WarningFilled16 from "carbon-icons-svelte/lib/WarningFilled16/WarningFilled16.svelte";
  // import WarningAltFilled16 from "carbon-icons-svelte/lib/WarningAltFilled16/WarningAltFilled16.svelte";
  // import {
  //   ListBox,
  //   ListBoxMenu,
  //   ListBoxMenuIcon,
  //   ListBoxMenuItem,
  // } from "../ListBox";
  const dispatch = createEventDispatcher();
  let selectedId = '0';
  let highlightedIndex = -1;
  function change(dir) {
    let index = highlightedIndex + dir;
    if (index < 0) {
      index = items.length - 1;
    } else if (index >= items.length) {
      index = 0;
    }
    highlightedIndex = index;
  }
  $: if (selectedIndex > -1) {
    dispatch("select", { selectedId, selectedIndex, selectedItem });
  }
  $: inline = type === "inline";
  $: selectedItem = items[selectedIndex];
  $: selectedId = items[selectedIndex] ? items[selectedIndex].id : undefined;
  $: if (!open) {
    highlightedIndex = -1;
  }
</script>


<svelte:window
  on:click="{({ target }) => {
    if (open && ref && !ref.contains(target)) {
      open = false;
    }
  }}"
/>

<div
  class:dropdown-wrapper="{true}"
  {...$$restProps}
>
  {#if titleText}
    <label
      for="{id}"
      class:bx--label="{true}"
      class:label-disabled="{disabled}"
      class:label-hidden="{hideLabel}"
    >
      {titleText}
    </label>
  {/if}
  <div
    type="{type}"
    size="{size}"
    id="{id}"
    name="{name}"
    aria-label="{$$props['aria-label']}"
    class="
      dropdown
      {open && 'dropdown-open'}
      {disabled && 'dropdown-disabled'}
    "
    on:click="{({ target }) => {
      open = ref.contains(target) ? !open : false;
    }}"
    disabled="{disabled}"
    open="{open}"
    invalid="{invalid}"
    invalidText="{invalidText}"
    light="{light}"
    warn="{warn}"
    warnText="{warnText}"
  >
    <button
      bind:this="{ref}"
      class:dropdown-trigger="{true}"
      tabindex="0"
      aria-expanded="{open}"
      on:keydown="{(e) => {
        const { key } = e;
        if (['Enter', 'ArrowDown', 'ArrowUp'].includes(key)) {
          e.preventDefault();
        }
        if (key === 'Enter') {
          open = !open;
          if (highlightedIndex > -1 && highlightedIndex !== selectedIndex) {
            selectedIndex = highlightedIndex;
            open = false;
          }
        } else if (key === 'Tab') {
          open = false;
          ref.blur();
        } else if (key === 'ArrowDown') {
          change(1);
        } else if (key === 'ArrowUp') {
          change(-1);
        }
      }}"
      disabled="{disabled}"
      translateWithId="{translateWithId}"
      id="{id}"
    >
      <span class="bx--list-box__label">
        {#if selectedItem}{itemToString(selectedItem)}{:else}{label}{/if}
      </span>
      <Icon title="{!!open ? 'caret-up' : 'caret-down'}" />
    </button>
  </div>
  {#if open}
  <div aria-labelledby="{id}" id="{id}" class="dropdown-items">
    {#each items as item, i (item.id)}
    <div
      id="{item.id}"
      class="
        dropdown-item
        {(selectedIndex === i || selectedId === item.id) && 'active'}
      "
      active="{selectedIndex === i || selectedId === item.id}"
      highlighted="{highlightedIndex === i || selectedIndex === i}"
      on:click="{() => {
        selectedId = item.id;
        selectedIndex = i;
        activeTabValue = i;
        ref.focus();
      }}"
      on:mouseenter="{() => {
        highlightedIndex = i;
      }}"
    >
      {itemToString(item)}
    </div>
    {/each}
  </div>
  {/if}
</div>


<style lang="scss">

div.dropdown-wrapper {

  width: 328px;

  label {
    &.label-disabled {
      color: grey;
    }
    &.label-hidden {
      display: none;
    }
  }

  div.dropdown {

    button.dropdown-trigger {
      width: 100%;
      border: 2px solid $black;
      border-radius: 8px;
      padding: 24px;
      background-color: $white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: box-shadow 400ms;

      &:hover {
        box-shadow: inset 0 0 0 2px $black;
      }

      :first-child {
        margin-right: 12px;
      }
    }
  
  }

  div.dropdown-items {
    width: 318px;
    margin-top: 2px;
    padding: 4px;
    border: 1px solid $black;
    border-radius: 8px;
    background-color: $white;
    overflow: hidden;
    position: absolute;

    div.dropdown-item {
      border-radius: 8px;
      padding: 16px 12px;
      background-color: $white;
      transition: background-color 250ms;
      cursor: pointer;

      &:hover {
        background-color: rgba($black, 0.12);
      }
      &.active {
        background-color: rgba($black, 0.24);
      }
    }
  }

}

</style>
