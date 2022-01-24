<script>
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';

	export const prerender = true;

	let src;
	let boxed = false;

	function imgClick() {
		src = this.src;
		boxed = true;
	}

	function boxClick() {
		boxed = false;
	}
</script>


<svelte:head>
	<title>Reconciliation | Nicholas Tobat</title>
</svelte:head>

<main id="reconcile">
	<header>
		<div class="text">
			<h1>Reconciliation</h1>
			<h3>An intuitive interface for matching and posting book and bank transactions.</h3>
		</div>
	</header>

	<div id="hero">
		<img src="{base}/reconcilepreview.jpg" alt="app preview" />
	</div>

	<div id="info">
		<hr />
		<div class="infoRow">
			<p>ROLE</p>
			<p>Product Design Lead</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>CONTEXT</p>
			<p>Web App Feature Design</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>TIME</p>
			<p>November 2020 – January 2021</p>
		</div>
		<hr />
	</div>

	<section id="intro">
		<p>
			This case study is coming soon!
		</p>
	</section>

</main>


<style lang="scss">
  h1,
	/* h2, */
	h3,
	p {
		color: $white;
		max-width: 800px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
	}

	main#reconcile {
		width: calc(100% - 208px);
		background-color: $black;
		margin-left: 80px;
		padding-left: 64px;
		padding-bottom: 200px;

		#hero {
			width: calc(100% + 128px);
			margin: 40px 0 40px -64px;

			img {
				width: 100%;
				height: 400px;
				object-fit: cover;
			}
		}

		#info {
			width: 100%;

			.infoRow {
				display: flex;
				justify-content: space-between;
				padding: 16px;

				p {
					font-family: 'Days One';
					font-size: 24px;
					line-height: 32px;
				}

				:first-child {
					width: 40%;
					opacity: 0.76;
				}
			}
		}

		section {
			margin-top: 80px;
			display: flex;
			flex-flow: column nowrap;
    }
  }

			/* h2 {
				font-family: 'Days One';
				font-size: 40px;
				line-height: 56px;
			}

			div.imgset {
				width: 100%;
				display: flex;
				flex-flow: nowrap;
				justify-content: space-around;
				align-items: center;
				padding: 24px 0;
				border-radius: 16px;
				background-color: rgba($white, 0.12);

				&.imgset-3 {
					div.imgwrap {
						flex-basis: 480px;
					}
				}

				&.imgset-2 {
					div.imgwrap {
						flex-basis: 640px;
					}
				}

				div.imgwrap {
					min-width: 0;
					margin: 24px;
					height: fit-content;
					border-radius: 4px;
          transition: transform 400ms;
          cursor: zoom-in;

					img {
						min-width: 0;
						max-width: 480px;
						width: 100%;
						height: 100%;
						border-radius: 4px;
						box-shadow: 0.5em 0.5em #007aff;
            transition: box-shadow 400ms;
					}

          &:hover {
            transform: translateY(-0.5em);

            img {
              box-shadow: 1em 1em #007aff;
            }
          }
				}
			}

			:not(:first-child) {
				margin-top: 40px;
			}
		}

		.quote {
			padding: 8px 8px 8px 24px;
			border-left: 1px solid $white;

			p {
				font-size: 40px;
				line-height: 56px;
			}
		}

		a.button {
			padding: 12px 16px;
			border-radius: 4px;
			background-color: $black;
			display: flex;
			align-items: center;
			border: 1px solid $red;
			width: fit-content;
			transition-property: color, background-color, border, box-shadow, transform;
			transition-duration: 400ms;

			&:hover {
				animation: btn-animate 4s linear infinite;
				transform: scale(1.1);
				border-color: $white;
			}

			&:first-child {
				margin-right: 24px;
			}

			p {
				font-family: 'Days One';
				font-size: 16px;
				line-height: 20px;
				margin-right: 8px;
				color: $red;
				display: inline;
			}

			:global(svg) {
				fill: $red;
				height: 20px;
				width: 20px;
			}
		}
	}

  #lightbox {
		display: none;
		width: 100vw;
		height: calc(100vh - 80px);
		position: fixed;
		top: 0;
		left: 0;
		background: repeating-linear-gradient(
				135deg,
				transparent 0px,
				transparent 2px,
				$black 3px,
				$black 4px
			),
			repeating-linear-gradient(45deg, transparent 0px, transparent 2px, black 2px, black 3px);
		padding: 40px 24px;
		cursor: zoom-out;
		z-index: 9999;

    img {
      opacity: 0;
			padding: 40px 24px;
      max-height: calc(100% - 48px);
      transition: opacity 600ms 200ms;
      user-select: none;
		}

		&.boxed {
			display: flex;
			align-items: center;
			justify-content: center;

      img {
        opacity: 1;
      }
		}
	} */
</style>
