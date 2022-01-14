<script>
  import Icon from '$lib/Icon.svelte';
  import { base } from '$app/paths';
</script>


<div class="wrapper">
	
  <header>
		<div id="portrait">
			<img src='{base}/portrait.jpg' alt="portrait of Nick" />
		</div>
		<div class="text">
			<h1>Nicholas Tobat</h1>
			<h3>Product Designer (&& Occasional Front-end Developer)</h3>
		</div>
	</header>

	<div class="content">
		<p>
			Hey, viewers. I’m Nick. I am a tireless tinkerer and hybrid designer of web, mobile, product,
			and brand experiences.
      <br><br>
      I believe natural input fuels creative output. Currently you can find
			me living out my dreams in the foothills of the Rocky Mountains: beautiful Boulder, Colorado.
			<br><br>
      Use the icons in the left nav to view my work.
		</p>

    <div class="actions">
      <a role="button" href="{base}/Nicholas Tobat Resume.pdf" target="_blank">
        <p>View Resume</p>
        <Icon title="open-new" height="20px" width="20px" />
      </a>
      <a role="button" href="{base}/Nicholas Tobat Resume.pdf" download>
        <p>Download Resume</p>
        <Icon title="dl" />
      </a>
    </div>
	</div>

</div>


<style lang="scss">
	.wrapper {
		header {
			width: 100%;
			display: flex;
			margin-bottom: 64px;

			#portrait {
				height: 112px;
				width: 112px;
				border-radius: 8px;
				overflow: hidden;

				img {
					height: 100%;
					width: 100%;
				}
			}

			.text {
				margin-left: 24px;
			}
		}

    .content {
      max-width: 800px;

      p {
        font-size: 28px;
        line-height: 40px;
      }

      .actions {
        display: flex;
        margin-top: 40px;

        a {
          padding: 12px 16px;
          border: 2px solid transparent;
          border-radius: 4px;
          background-color: $black;
          display: flex;
          align-items: center;
          transition-property: color, background-color, border, box-shadow, transform;
          transition-duration: 400ms;
          
          &:hover {
            animation: btn-animate 4s linear infinite;
            transform: scale(1.1);
            border-color: $white;
          }

          &:first-child {
            margin-right: 32px;
          }

          p {
          font-family: 'Days One';
          font-size: 16px;
          line-height: 20px;
          margin-right: 8px;
          color: $white;
          display: inline;
          }

          :global(svg) {
            fill: $white;
          }
        }
      }
    }
	}
</style>
