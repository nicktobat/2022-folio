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
	<title>Utilization Reports | Nicholas Tobat</title>
</svelte:head>

<main id="util">
	<header>
		<div class="text">
			<h1>Utilization Reports</h1>
			<h3>A robust reporting tool for the building blocks of your company.</h3>
		</div>
	</header>

	<div id="hero">
		<img src="{base}/utilizepreview.png" alt="app preview" />
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
			<p>January 2020 – June 2020</p>
		</div>
		<hr />
	</div>

	<section id="intro">
		<p>
			Backbone is the only product development platform built for the direct-to-consumer economy.
			Their suite of connected features emphasize speed, flexibility, and connectivity for modern
			product&nbsp;teams. The mission:
		</p>
		<div class="quote">
			<p>
				The future of consumer brands is digital. Backbone provides the platform that empowers
				fashion brands to innovate, design, and develop products at digital speed while scaling for
				growth.
			</p>
		</div>
		<p>
			As a part of the platform moving from 1.0 to 2.0, we needed to ensure that our users retained
			all the tools and features they had come to expect in version 1. One of the biggest missing
			pieces was Utilization Reports. The majority of Backbone's clients are apparel companies, and
			our users needed a way to display selected sets of components in dynamic, exportable reports
			to help with Purchase Orders and product planning.
		</p>
		<a class="button" role="button" href="http://www.backboneplm.com" target="_blank">
			<p>Backbone Website</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="what">
		<h2>What is it?</h2>
		<p>
			Utilization Reports are an analytics tool leveraging powerful filtering on the entire company
			dataset to provide dynamic, flexible, real-time snapshots on the building blocks of each and
			every product: components. If you're in the tech world, you might think of components as
			independent, reusable chunks of code. In the apparel world, the idea is similar: components
			are the individual pieces of a garment that, put together, result in a finished product. For
			example, the shirt you're wearing right now might have buttons, one or two kinds of fabric,
			multiple stitching patterns, a tag, etc — these are all components.
		</p>
	</section>

	<section id="library">
		<h2>Report Library</h2>
		<div class="imgset imgset-3">
			{#each { length: 3 } as _, i}
				<div class="imgwrap">
					<img
						src="{base}/util/reportlib{i}.png"
						alt="report library screenshot"
						on:click={imgClick}
					/>
				</div>
			{/each}
		</div>
		<p>
			The report library serves as the landing page for this feature and houses all utilization
			reports created by or shared with the current user.
		</p>
	</section>

	<section id="create">
		<h2>Report Creation</h2>
		<div class="imgset imgset-3">
			{#each { length: 3 } as _, i}
				<div class="imgwrap">
					<img
						src="{base}/util/reportc{i}.png"
						alt="report creation screenshot"
						on:click={imgClick}
					/>
				</div>
			{/each}
		</div>
		<p>
			Here, the user decides which components to include in the report, using both component- and
			product-level attributes. I reimagined our established filtering UI/UX pattern in order to
			implement a simple, section-based filtering system with informative tooltips to let the user
			know how the report is generated in the backend.
		</p>
	</section>

	<section id="generate">
		<h2>Report Generation</h2>
		<div class="imgset imgset-3">
			{#each { length: 3 } as _, i}
				<div class="imgwrap">
					<img
						src="{base}/util/reportg{i}.png"
						alt="report creation screenshot"
						on:click={imgClick}
					/>
				</div>
			{/each}
		</div>
		<p>
			Reports are generated with a set of features to give the user ultimate control over the data
			displayed. These features include searching, sorting, filtering, and column management. While
			many of these patterns make use of reusable components found elsewhere in the app, I developed
			the column manager specifically for this reporting module.
		</p>
		<!-- <p>
			If you'd like to read more about the column manager interaction design you can see in the
			second image, hit the button below.
		</p>
		<a class="button" role="button" href="{base}/studio">
			<p>Column Manager</p>
			<Icon title="arrow-right" />
		</a> -->
	</section>

	<section id="process">
		<h2>UX Process</h2>
		<p>
			Luckily, we had an older requirements doc from 1.0 that helped to inform a lot of my initial
			direction. I also jumped into 1.0 to play around with the feature, noting interactions and
			jotting down my thoughts about the user experience. I worked with our wonderful CX lead to run
			a few Q&A sessions with our users to speak about their wants, needs, and biases.
		</p>
		<p>
			Once I was confident in my knowledge of the problem, it was time to start drawing rectangles
			on screens! I used our bespoke Wireframe Kit (designed and developed by yours truly) to map
			out some initial explorations. A lot of the head-scratching came from determining how best to
			filter on the entire dataset.
		</p>
		<div class="imgset imgset-3">
			{#each { length: 3 } as _, i}
				<div class="imgwrap">
					<img src="{base}/util/uteP{i}.png" alt="design process screenshot" on:click={imgClick} />
				</div>
			{/each}
		</div>
	</section>

</main>

<div id="lightbox" class:boxed on:click={boxClick}>
	<img {src} alt="expanded view" />
</div>


<style lang="scss">
	h1,
	h2,
	h3,
	p {
		color: $white;
		max-width: 800px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
	}

	main#util {
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

			h2 {
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
	}
</style>
