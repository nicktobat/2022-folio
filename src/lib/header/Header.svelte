<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>


<header>
	<div class="left">
		<h1>Nicholas Tobat</h1>
    <h3>Product Designer && Front-end Developer</h3>
	</div>

  <nav>
    <a class="button active:{$page.url.pathname === '/studio'}" sveltekit:prefetch href="{base}/studio">Studio</a>
    <a class="button active:{$page.url.pathname === '/contact'}" sveltekit:prefetch href="{base}/contact">Say Hi</a>
	</nav>
</header>


<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
    padding: 40px 64px 0;
    max-width: 100%;

    h1 {
      margin-bottom: 8px;
    }

    nav {
      display: flex;
      justify-content: center;
    
      a.button {
        width: 160px;
        height: 64px;
        display: block;
        position: relative;
        text-transform: uppercase;
        text-align: center;
        color: $black;
        background-color: $white;
        font-size: 18px;
        line-height: 24px;
        text-decoration: none;
        border-radius: 8px;
        border: 2px solid black;
        box-shadow: 6px 6px 0 0 $black;
        transition-property: color, background-color, border, box-shadow;
        transition-duration: 400ms;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          animation: btn-animate 4s linear infinite;
          background-color: $black;
          border: 2px solid white;
          color: $white;
        }

        &.active {
          background-color: $black;
          border: 2px solid $white;
          box-shadow: 6px 6px 0 0 $black;
          color: $white;
        }

        &:last-child {
          margin-left: 40px;
        }
      }
    }
	}

  @media screen and (max-width: 600px) {
    header {
      flex-direction: column-reverse;

      nav {
        margin-bottom: 32px;

        a.button {
          width: 100%;
        }
      }
    }
  }

</style>
