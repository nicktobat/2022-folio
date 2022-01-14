<script>
  import Icon from "$lib/Icon.svelte";
  import { base } from '$app/paths';
</script>

<div>
  <a href="{base}/">
    <Icon title="arrow-left" />
    <span>Back</span>
  </a>
</div>


<style lang="scss">

  div {
    padding: 0 0 80px 0;

    a {
      fill: $red;
      height: 64px;
      padding: 0 24px;
      border: 2px solid $red;
      border-radius: 8px;
      width: fit-content;
      display: flex;
      align-items: center;
      transition-property: color, background-color, fill;
      transition-duration: 400ms;

      span {
        padding-left: 12px;
      }

      &:hover {
        background-color: $red;
        color: $white;
        fill: $white;
      }
    }
  }

</style>