<script>
  import { base } from '$app/paths';
  import Icon from '$lib/Icon.svelte';
  import NavLink from '$lib/NavLink.svelte';
</script>


<nav class="container">
  <div id="logo">
    <a href="{base}/">
      <Icon title="logo" width="32px" height="32px" />
      <span class="ttText">Home</span>
    </a>
  </div>
  <div id="links">
    <NavLink
      name="Product Design"
      href="{base}/prod"
      title="design"
    />
    <NavLink
      name="Studio"
      href="{base}/studio"
      title="studio"
    />
    <!-- <NavLink
      name="Code"
      href="/code"
      title="code"
    /> -->
    <NavLink
      name="Blue Sky"
      href="{base}/bluesky"
      title="sky"
    />
  </div>
</nav>


<style lang="scss">
  nav.container {
    width: 64px;
    background-color: $black;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid $white;
    height: calc(100vh - 104px);
    padding: 40px 8px 64px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    #logo a {
      background-color: $white;
      display: block;
      height: 40px;
      width: 40px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        span.ttText {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    span.ttText {
      display: block;
      width: max-content;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      left: 84px;
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
