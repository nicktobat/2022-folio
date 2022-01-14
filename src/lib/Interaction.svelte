<script>
  import { fly } from 'svelte/transition';

  export let links = [
    { id: 'about', href: '/about', label: 'Column Organizer' },
    { id: 'resume', href: '#', label: 'File Manager' },
    { id: 'achieve', href: '/achieve', label: 'Animation Explorations' },
  ];
</script>


<div class="wrapper">
  {#each links as link}
    <a href={link.href} class="linkbox" sveltekit:prefetch>
      <div class="descrip">
        {link.label}
      </div>
    </a>
  {/each}
</div>


<style lang="scss">

.wrapper {
		width: 100%;
    height: 360px;
    display: flex;
    justify-content: space-between;
 }

    a.linkbox {
      height: 360px;
      min-width: 360px;
      max-width: 100%;
      border: 1px solid $black;
      flex: 0 0 30%;
      display: flex;
      align-items: flex-end;

      .descrip {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 -1px 0 0 $black;
      }
    }

</style>
