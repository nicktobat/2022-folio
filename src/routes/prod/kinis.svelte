<script>
	import Icon from '$lib/Icon.svelte';

	export const prerender = true;
</script>

<main id="kinis">
	<header>
		<div class="text">
			<h1>Kinis App</h1>
			<h3>Designing a new fitness & wellness application from scratch.</h3>
		</div>
	</header>

	<div id="hero">
		<img src="/kinispreview.png" alt="app preview" />
	</div>

	<div id="info">
		<hr />
		<div class="infoRow">
			<p>ROLE</p>
			<p>Product Design Lead, Product Manager</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>CONTEXT</p>
			<p>Mobile App Design & Development</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>TIME</p>
			<p>June 2021 – Present</p>
		</div>
		<hr />
	</div>

	<section id="intro">
		<p>Kinis is a minimalist footwear company with grand aspirations. The mission:</p>
		<div class="quote">
			<p>To build a back to basics movement that helps people move naturally.</p>
		</div>
		<p>
			In an effort to expand this movement beyond apparel, Kinis approached me to help design a
			brand new fitness & wellness platform focused on helping clients achieve their health goals
			and on helping coaches build & manage their business.
			<br /><br />
			The Kinis app is currently in development, expected to release later this year.
		</p>
		<a class="button" role="button" href="http://www.kinis.com" target="_blank">
			<p>Kinis Website</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="what">
		<h2>What is it?</h2>
		<p>
			At its core, the Kinis app is a platform for connecting fitness & wellness coaches with
			clients. It’s chock-full of features that help coaches manage their small businesses, from
			scheduling to invoices. Clients make use of a robust search feature to find coaches they’d
			like to work with, along with local events related to their interests.
		</p>
	</section>

	<section id="core">
		<h2>Core Features</h2>
		<div class="imgset imgset-4">
			{#each { length: 4 } as _, i}
				<img src="/kinis/Tabs{i}.png" alt="core feature screenshot" />
			{/each}
		</div>
		<!-- <img src="/kinis_core.png" alt="screenshots of the four main app tabs" /> -->
		<p>
			The four main tabs of the app contain everything a coach or client needs to build their
			business or improve their wellness.
		</p>
	</section>

	<section id="onboard">
		<h2>Onboarding</h2>
		<div class="imgset imgset-4">
			{#each { length: 4 } as _, i}
				<img src="/kinis/Onboard{i}.png" alt="onboarding screenshot" />
			{/each}
		</div>
		<p>
			Registration and personalization are handled through a series of onboarding pages where the
			user sets up their profile and adds information. Users can skip through this process if
			desired and add information later on.
			<br /><br />
			Trust and authenticity are incredibly important to the foundation of this platform; we never want
			our client users to worry about whether they’ve booked a phony. The Kinis team manages a robust
			certification process on the back-end for coaches and centers in order to maintain this high level
			of trust for our users.
		</p>
	</section>

	<section id="search">
		<h2>Search & Filter</h2>
		<div class="imgset imgset-4">
			{#each { length: 4 } as _, i}
				<img src="/kinis/Search{i}.png" alt="discover tab screenshot" />
			{/each}
		</div>
		<p>
			The search & filter functions are housed in the Discover tab. Upon entering the tab, users are
			greeted with three relevant categories to browse through based on their profile information.
			Tapping the search bar will bring up recent searches as well as search suggestions. Entering
			three or more characters into the input brings up a focused search mode. The Discover tab also
			has a powerful filter system, allowing users to narrow their query based on criteria such as
			rating, type, and location.
		</p>
	</section>

	<section id="ux">
		<h2>User Experience</h2>
		<p>
			We began this project not with screens and artboards, but with a group of personal trainers,
			coaches, and fitness enthusiasts. Before we knew what we were going to build, we asked these
			folks what they were missing in their day-to-day fitness & wellness journeys. Many of them
			were stuck with a disparate amalgam of technologies, from the analog pen & paper, to Google
			Calendar, to invoicing software, and paying out of pocket for certain services. Our product
			vision arose from these early conversations, along with a robust industry analysis ensuring a
			market opportunity.
		</p>
		<div class="imgset imgset-2">
			<img src="/kinis/whiteboard.png" alt="whiteboard session" />
			<img src="/kinis/analysis.png" alt="research brief" />
		</div>
		<p>
			Our user experience has always, appropriately, been guided by our users. It is extremely
			beneficial to be able to bounce ideas and prototypes off of the actual end-users of the
			product. After we identified the core features of the app (onboarding, profile, discover,
			schedule, book, review, invoice), we were able to outline user flows and process patterns, and
			even begin to build a milestone map for the actual build.
		</p>
		<div class="imgset imgset-4">
			<img src="/kinis/trainerpath.png" alt="coach flow" />
			<img src="/kinis/custpath.png" alt="cient flow" />
			<img src="/kinis/process.png" alt="processes" />
			<img src="/kinis/milestones.png" alt="milestones" />
		</div>
	</section>

	<section id="lead">
		<h2>Project Leadership</h2>
		<p>
			In June of 2020, Kinis reached out to me asking if I would lead the design of their wellness
			platform (which, at that point, was just a sparkle in the eye). I was fortunate enough to have
			worked with Kinis back in 2017 when they were just getting the company off the ground,
			collaborating closely with the CEO to develop their logo, brand book, style guide, and website
			design.
		</p>
		<p>
			In addition to, of course, designing the application, I have taken on a great deal of
			responsibility for its overall development. Some of the work includes: designing a flexible UI
			kit in Figma; setting up and managing our JIRA board, writing tickets, and defining
			development milestones; owning our product hub in Notion; directing the dev team and
			responding to tech queries. Although I am exposed to much of these responsibilities in my day
			job at a software agency, this was my first time leading a team and delegating
			responsibilities to those under me. I count it as one of my most important adn influential
			projects to date.
		</p>
	</section>

	<section id="soon">
		<h2>Coming Soon!</h2>
		<p>
			The Kinis app will be available for download on both iOS and Android later this year. I can't
			wait for you to try it out. Thanks for reading!
		</p>
		<img src="/kinis/foot.png" alt="phone app held by a foot" style="border-radius: 24px" />
	</section>
</main>

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

	main#kinis {
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

				&.imgset-4 {
					img {
						flex-basis: 320px;
					}
				}

				&.imgset-2 {
					img {
						flex-basis: 640px;
					}
				}

				img {
					min-width: 0;
					margin: 24px;
					height: fit-content;
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
</style>
