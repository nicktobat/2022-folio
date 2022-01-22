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

<main id="google">
	<header>
		<div class="text">
			<h1>Google Refuge</h1>
			<h3>A mobile device-based solution for the Syrian refugee crisis.</h3>
		</div>
	</header>

	<div id="hero">
		<img src="{base}/google/ui.jpg" alt="app preview" />
	</div>

	<div id="info">
		<hr />
		<div class="infoRow">
			<p>ROLE</p>
			<p>Experience Designer</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>CONTEXT</p>
			<p>Web & Product Design</p>
		</div>
		<hr />
		<div class="infoRow">
			<p>TIME</p>
			<p>September 2018 – November 2018</p>
		</div>
		<hr />
	</div>

	<section id="intro">
		<p>
			My team was asked to tackle a very broad issue: Refugees in America. Google Refuge is the
			result of five weeks of research, planning, and execution, from the initial stages of
			identifying the specific problem we wanted to address, to 3D modeling and video production.
			Throughout each stage of the process we had to ensure that we were putting the needs of
			refugees first.
		</p>
		<p>
			I was specifically responsible for: designing the phone's hardware specs; designing the
			phone’s operating system and eInk versions of Google apps; and designing and developing the
			campaign website. To see the fully realized products, keep on scrolling.
		</p>
		<a
			class="button"
			role="button"
			href="https://nicktobat.github.io/google-refuge/"
			target="_blank"
		>
			<p>Visit the Campaign Website</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="what">
		<h2>Overview</h2>
		<div id="iframer">
			<iframe
				src="https://player.vimeo.com/video/297623214?h=a9b11ef1bf"
				title="video overview"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
			/>
		</div>
		<p>
			Over 25 million people globally have been forced to flee their homes from persecution or
			violence. They are now refugees. Google Refuge provides connectivity for those who have lost
			everything else.
		</p>
		<p>
			The resettlement process for a refugee is a long one, often beginning with a catastrophe or
			some terrible event forcing the refugee to flee. They may not have time to gather the whole
			family, or retrieve important documents such as property ownership documents, birth
			certificates and IDs, etc. And once they arrive in a camp, access to the Internet is often
			limited or entirely unavailable.
		</p>
		<p>
			Google, as one of the only companies in the world with the infrastructure and resources
			necessary to provide Internet capabilities to refugee camps, will launch a new project: Google
			Refuge. WiFi-emitting beacons stocked with hundreds of specially-designed phones are
			air-dropped into locations with the greatest need.
		</p>
		<figure>
			<img src="{base}/google/beacon05.jpg" alt="Close-up view of the Beacon" on:click={imgClick} />
			<figcaption>Close-up view of the Google Refuge Beacon.</figcaption>
		</figure>
	</section>

	<section id="product">
		<h2>Physical Product Design</h2>
		<video class="image lgImg el el-img" autoplay muted playsinline loop>
			<source src="{base}/google/light.mp4" type="video/mp4" />
		</video>
		<h3>Building a Cheap & Indestructible Phone</h3>
		<p>
			The phone had to withstand rugged outdoor conditions and cross-country travel, as well as
			operate hyper-efficiently for users who often go long periods without access to charging.
		</p>
		<p>
			The phones are built to military standards, with Corning Gorilla Glass DX (the glare-resistant
			glass used on smart watches) and a protective non-slip rubber casing. The phones use eInk
			technology to render the UI, saving on both manufacturing costs and processing power by
			foregoing colors and animations. See the full technical specifications below.
		</p>
		<figure>
			<img
				src="{base}/google/techSpecs.jpg"
				alt="The Google Light Phone technical specifications"
				on:click={imgClick}
			/>
			<figcaption>The Google Light Phone technical specifications.</figcaption>
		</figure>
	</section>

	<section id="ui">
		<h2>UI Design</h2>
		<figure>
			<img
				src="{base}/google/ui.jpg"
				alt="The Google Light Phone app screens"
				on:click={imgClick}
			/>
			<figcaption>The Google Light Phone app screens.</figcaption>
		</figure>
		<h3>It's Google — In Grayscale</h3>
		<p>
			There were three main constraints to consider in developing the UI for the phones: the Google
			design system, eInk technology, and efficiency. Additionally, knowing the vast majority of
			camp populations speak Arabic as their first language, the default language is Arabic and all
			of the text and UI elements are laid out right to left.
		</p>
		<p>
			The phones ship with six apps — pictured above — selected for their utility when it comes to
			the resettlement process. Everything is rendered in grayscale due to the eInk technology. The
			phone UI and app UIs are all faithful to Google’s design system and the Pixel 2 UI.
		</p>
		<a
			class="button"
			role="button"
			href="https://projects.invisionapp.com/prototype/refuge-cjukal822004a5m01cwecipc9/play/9e032318"
			target="_blank"
		>
			<p>Explore the Prototype</p>
			<Icon title="open-new" />
		</a>
		<figure>
			<img
				src="{base}/google/icons.gif"
				alt="The Google Light Phone app icons"
				on:click={imgClick}
			/>
			<figcaption>The Google Light Phone app icons.</figcaption>
		</figure>
	</section>

	<section id="web">
		<h2>Web Design</h2>
		<figure>
			<img src="{base}/google/iMac.png" alt="The Google Refuge website" on:click={imgClick} />
			<figcaption>The Google Refuge website.</figcaption>
		</figure>
		<h3>An Innovative Campaign Rooted in Familiarity</h3>
		<p>
			The website should feel familiar to Google users and similar to other Google product pages.
			The copy and visuals needed to clearly frame the narrative and describe Google's new
			initiative. Drawing from the Google Pixel 2 and Google One sites, the resulting design is a
			unique hybrid that effectively serves as both a campaign platform and the home base for an
			emerging social good effort.
		</p>
		<a
			class="button"
			role="button"
			href="https://nicktobat.github.io/google-refuge/"
			target="_blank"
		>
			<p>Visit the Campaign Website</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="process">
		<h2>UX Process</h2>
		<p>
			The project began with a topic assignment: the refugee crisis. Our first task, then, was to
			figure out exactly which sub-problem we wanted to tackle within the larger topic. We
			established a long list of possibilities by reading countless articles and interviews with
			past and current refugees, listening to relevant podcast episodes, and researching both UN and
			US policy documents related to refugees.
		</p>
		<h3>Insight</h3>
		<p>
			As we sifted through the piles of data we collected, one statistic from the UNHCR (United
			Nations High Commissioner for Refugees) practically leapt off the page: <em
				>Refugees often spend a third of their income on staying connected.</em
			> And as we further explored the relationship between refugees and communication & connectivity,
			the role and value of internet access and smartphones in their lives became increasingly apparent.
			The quote below speaks for itself.
		</p>
		<div class="quote">
			<p>
				See why this phone is so dear? It has everything. All my family, all my world is here.
				That's why I'm always holding it.
			</p>
		</div>
		<figure>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/google/refugee-phone1.png"
				alt="Yemeni refugee shows his son's picture on a mobile phone"
				on:click={imgClick}
			/>
			<figcaption>Yemeni refugee shows his son's picture on a mobile phone.</figcaption>
		</figure>
		<h3>Big Idea</h3>
		<p>
			Along with the above quotes and statistic, we learned that refugees are about half as likely
			as the general population to own a phone, and that roughly 30% of refugee households do not
			even own a phone. If phones are often more important than food and water, it was hard for us
			to imagine how those refugees without access felt — and we wanted to help. This led us to our
			big idea: <em>Provide refugees with smartphones and internet access.</em> Which, of course, is
			far easier said than done. But it is a noble goal, and it is directly relevant to the UNHCR directive
			laid out in their 2016 connectivity report:
		</p>
		<div class="quote">
			<p>
				UNHCR believes we can do better. Through creative partnerships and smart investments, UNHCR
				aims to ensure that all refugees, and the communities that host them, are connected to
				mobile networks and the internet so that they can leverage these technologies to improve
				their lives.
			</p>
		</div>
		<a href="https://www.unhcr.org/5770d43c4.pdf" target="_blank">
			<figure>
				<img src="{base}/google/unhcr.jpg" alt="UN Connectivity Report" />
				<figcaption>The UNHCR connectivity report: click to view.</figcaption>
			</figure>
		</a>
	</section>

	<section id="partner">
		<h2>Partnership</h2>
		<p>
			Obviously, this idea would need a large technology company behind it to work. A global brand
			with the necessary infrastructure, manufacturing capabilities, and corresponding brand
			mission. Three big ones come to mind ...
		</p>
		<figure>
			<img
				src="{base}/google/companies.png"
				alt="Our three brand contenders to lead the project"
				on:click={imgClick}
			/>
			<figcaption>Our three brand contenders to lead the project.</figcaption>
		</figure>
		<p>
			We eliminated Apple first, due to their irrelevant brand mission and closed ecosystem of
			products and software. Additionally, refugees already tend to use cheap Android smartphone
			models and are likely more familiar with the Android operating system.
		</p>
		<p>
			Google was chosen over Samsung due to the fact that they developed the Android operating
			system and their history of refugee relief efforts, including device donations and sending
			volunteers to install WiFi in refugee camps.
		</p>
		<a
			class="button"
			role="button"
			href="https://www.google.org/our-work/crisis-response/nethope/"
			target="_blank"
		>
			<p>Google Gives Back</p>
			<Icon title="open-new" />
		</a>
		<figure>
			<img
				src="{base}/google/google-gives.jpg"
				alt="Google volunteers with NetHope in Greece"
				on:click={imgClick}
			/>
			<figcaption>Google volunteers with NetHope in Greece.</figcaption>
		</figure>
		<h3>It's a Win-Win-Win!</h3>
		<p>
			In order for this plan to work, we had to be sure that all parties involved were benefiting in
			some way — or else refugees wouldn't use it, Google wouldn't pay for it, and the UNHCR
			wouldn't allow it.
		</p>
		<h4>REFUGEES</h4>
		<p>
			Refugees are provided free phones, free WiFi, and free charging (at the Refuge Beacon). The
			apps included are vital to sharing information, traveling between safe locations,
			communicating with family members, and organizing important documents for the resettlement
			process. Additionally, as a congratulations for successful resettlement, they are granted a
			free Pixel phone from Google.
		</p>
		<h4>UNHCR</h4>
		<p>
			The UNHCR explicitly states in their report that they are seeking "engagement of the private
			sector – in particular, large technology companies and mobile network operators – if we are to
			achieve this vision." If Google were to enact this solution, it would be exactly the kind of
			private sector support they are looking for.
		</p>
		<h4>GOOGLE</h4>
		<p>
			While the benefits to Google may have a hard time outweighing the costs financially, they will
			gain an admirable and invaluable social good reputation. Additionally, this gives them a
			chance to expand their user base among a less-represented population and develop innovative
			solutions for those in need.
		</p>
    <figure>
			<img
				src="{base}/google/benefits.png"
				alt="Google & the UNHCR working together to help refugees"
				on:click={imgClick}
			/>
			<figcaption>Google & the UNHCR working together to help refugees.</figcaption>
		</figure>
	</section>

	<section id="summary">
		<h2>Summary</h2>
		<p>
			In order to frame the idea as something realistically possible, we needed to develop assets
			showing how it could work. These included 3D models of the phone & beacon, a UI prototype of
			the phone, a campaign website, and a concept video. You can see the finished products in the
			sections above.
		</p>
		<p>
			I used a variety of tools to bring this project to life: Sketch to wireframe the phone OS &
			apps and website, InVision Studio for the high-fidelity prototype, Cinema 4D for the phone and
			beacon models & animations, and my three favorite front-end technologies (HTML, CSS, jQuery)
			for the live website.
		</p>
		<figure>
			<img
				src="{base}/google/tools.png"
				alt="Tools & technologies used in this project"
				on:click={imgClick}
			/>
			<figcaption>Tools & technologies used in this project.</figcaption>
		</figure>
		<p>
			I had two team members with me on this project. Joshua Perry, copywriter, and Joe Jones, art
			director. Josh was essential in capturing the dual emotional / explanatory tone needed on the
			campaign website and video. Joe helped us define our concept and pushed for creating our own
			phones, edited and voiced-over the video, and mocked up the Refuge Beacon 3D model in Cinema
			4D. These folks are incredible — I couldn't have done it without them.
		</p>
	</section>
</main>

<div id="lightbox" class:boxed on:click={boxClick}>
	<img {src} alt="expanded view" />
</div>

<style lang="scss">
	h1,
	h2,
	h3,
	h4,
	p {
		color: $white;
		max-width: 800px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
	}

	main#google {
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

		div#iframer {
			position: relative;
			padding-bottom: 56.25%;

			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

		section {
			margin-top: 80px;
			display: flex;
			flex-flow: column nowrap;
			max-width: 920px;

			h3 {
				font-family: 'Days One';
			}

			figure {
				margin: 40px 0 0 0;

				img {
					max-width: 100%;
					max-height: 640px;
					cursor: zoom-in;
				}

				figcaption {
					margin-top: 16px;
					color: $white;
					padding-left: 16px;
					border-left: 1px solid $white;
					font-family: 'Forum';
				}
			}

			h2 {
				font-family: 'Days One';
				font-size: 40px;
				line-height: 56px;
			}

			p,
			a,
			figure,
			video,
			div,
			h3,
			h4 {
				margin-top: 40px;
			}

			a.button p {
				margin-top: 0;
			}
		}

		.quote {
			padding: 8px 8px 8px 24px;
			border-left: 1px solid $white;

			p {
				margin-top: 0;
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
			max-width: calc(100% - 80px);
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
