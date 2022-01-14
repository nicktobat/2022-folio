<script>
	import { page } from '$app/stores';
  import Icon from '$lib/Icon.svelte';

  export let title;
  export let href;
  export let name;
</script>


<a {href} class:active="{$page.url.pathname.includes(href)}">
  <Icon {title} />
  <span class="ttText">{name}</span>
</a>


<style lang="scss">
  a {
    display: block;
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 400ms;

    &.active {
      background-color: rgba(255,255,255,0.24);

      &:hover {
        background-color: rgba(255,255,255,0.32);
      }
    }
    &:hover {
      background-color: rgba(255,255,255,0.12);

      span.ttText {
        visibility: visible;
        opacity: 1;
      }
    }
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    > :global(svg) {
      fill: $white;
    }

    span.ttText {
      display: block;
      width: max-content;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      left: 64px;
      font-size: 14px;
      line-height: 16px;
      color: $white;
      background-color: $black;
      padding: 4px 8px;
      border-radius: 4px;
      z-index: 99;
      transition: opacity 600ms 400ms;

      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 100%; /* To the left of the tooltip */
        margin-top: -4px;
        border-width: 4px;
        border-style: solid;
        border-color: transparent $black transparent transparent;
      }
    }
  }
</style>