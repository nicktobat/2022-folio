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

<main id="america">
	<header>
		<div class="text">
			<h1>AMERICA 2050</h1>
			<h3>Politically informative games with a liberal & satirical slant.</h3>
		</div>
	</header>

	<div id="hero">
		<img src="{base}/america/mobile_mock.jpeg" alt="app preview" />
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
			<p>Web & Mobile App</p>
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
			This project is the result of a team effort around the political education process. The
			political apathy among young voters is well documented, and we had to put our creative heads
			together to come up with an engaging solution that could circumvent the lack of enthusiasm.
		</p>
		<p>
			I was specifically responsible for: designing and developing the flagship video game;
			designing the web interface for the games; and naming & branding the product.
		</p>
		<a
			class="button"
			role="button"
			href="https://nicktobat.github.io/whack-a-scientist/"
			target="_blank"
		>
			<p>Play the Game</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="what">
		<h2>Overview</h2>
		<p>
			Crooked Media is a liberal political media company with a host of podcasts that aims to
			promote open conversation and support political participation. AMERICA 2050, in partnership
			with Crooked Media, provides an opportunity for users to educate themselves about how our
			government really works. By strengthening their listeners' foundation of political knowledge,
			they hoped to increase the value of their media offerings.
		</p>
		<p>
			If you’re alive and reading this, you know that American politics are chaotic, convoluted, and
			often just plain crazy. The situation isn't helped much by Americans' <a
				href="https://www.theatlantic.com/politics/archive/2010/06/americans-vs-basic-historical-knowledge/340761/"
				target="_blank">lack of civic knowledge</a
			>. It is crucial for voters to be informed in order for them to make the right decisions on
			voting day.
		</p>
		<p>
			AMERICA 2050 is a web-based gaming platform. Upon signing in, the user is greeted with a
			welcome message explaining the premise: it is 2050, and anyone with enough money now has the
			ability to purchase laws. The user plays a variety of arcade-style games to collect coins and
			buy laws, which are used to unlock new levels, games, and achievements, and attain a spot on
			the leaderboard. The tone is clearly satirical, matching the humorous dialogue in Crooked
			Media's podcasts.
		</p>
		<figure>
			<img src="{base}/america/beta.png" alt="early version of web interface" on:click={imgClick} />
			<figcaption>An early version of the web interface.</figcaption>
		</figure>
	</section>

	<section id="game">
		<h2>Game Design</h2>
		<div class="imgset imgset-2">
			{#each { length: 2 } as _, i}
				<div class="imgwrap">
					<img src="{base}/america/game{i}.png" alt="video game screenshot" on:click={imgClick} />
				</div>
			{/each}
		</div>
		<p>
			Taking into account the time frame of the project, we had to decide upon a single game to
			fully develop for the presentation. The key consideration in this area was to create something
			fun and engaging with the educational aspect almost a side-effect of the overall experience.
			Simplicity and familiarity will go a long way towards user engagement.
		</p>
		<p>
			We chose climate change as the topic for the flagship game: everyone is familiar with the
			controversy and likely has their own opinions on it, and it is an area of politics that will
			be at the forefront of public discussion for many election cycles to come. We adapted a
			whack-a-mole style game where the player smacks vocal climate change scientists for cash. Each
			play-through ends with an information panel that explains the connection between the game and
			real-world events, offering additional links to Crooked Media content and relevant articles.
		</p>
		<a
			class="button"
			role="button"
			href="https://nicktobat.github.io/whack-a-scientist/"
			target="_blank"
		>
			<p>Play the Game</p>
			<Icon title="open-new" />
		</a>
	</section>

	<section id="branding">
		<h2>Branding</h2>
		<div class="imgset imgset-2">
			{#each { length: 2 } as _, i}
				<div class="imgwrap">
					<img src="{base}/america/brand{i}.png" alt="branding ideas" on:click={imgClick} />
				</div>
			{/each}
		</div>
		<p>
			We wanted to keep the platform's branding in alignment with Crooked Media for familiarity's
			sake (we expect most users to arrive at the site from a Crooked Media offering), while
			endowing it with something unique to establish it as its own entity. Explorations included the
			United States' official color palette, old video games, and of course Crooked Media's own
			branding.
		</p>
		<p>
			Ultimately, we decided to move ahead with a slightly modified Crooked Media color palette and
			an 8-bit pixel art style. The 8-bit style was chosen to provide a level of abstraction from
			political reality as well as a callback to the target audience’s younger days and the video
			games of the 80s and 90s.
		</p>
	</section>

	<section id="ui">
		<h2>Web & UI Design</h2>
		<video autoplay controls muted playsinline loop>
			<source src="{base}/america/welcome.mp4" type="video/mp4" />
		</video>
		<p>
			The home screen needed to clearly communicate the hypothetical situation the user is placed
			in. Every important function within the platform should be accessible from the home screen,
			allowing the user to quickly get started playing games or exploring the social/profile
			settings.
		</p>
		<p>
			We decided to develop an introductory animation along with the login screen to convey the
			dystopian mood of the platform and clearly explain the premise. After logging in, users are
			able to jump right in to a game and start earning points.
		</p>
	</section>

	<section id="process">
		<h2>UX Process</h2>
		<p>
			Our research was primarily conducted online and supported by candid conversations with the
			target audience we identified. Our key findings didn't reveal any groundbreaking insight, but
			served to remind us of the breadth of the problem we were trying to solve. We organized the
			many facets of the issue at hand into four categories:
		</p>
		<ol>
			<li>Voter apathy</li>
			<li>General & specific lack of political knowledge</li>
			<li>Politics, as a subject, is "lame"</li>
			<li>The US government is incredibly complex</li>
		</ol>
		<p>
			Many of our initial ideas unfortunately suffered from the lame-ness that seems inextricably
			linked to all things political, but we noticed a trend among the few that were more plausible:
			they involved some sort of game or reward component. It seemed the only way to combat
			political ennui. Gamification makes less-fun stuff more fun! Our initial explorations gave
			rise to ideas such as: a "Guess Who?" game for politicians; a localized issue-tracking app
			with participation rewards (it already exists); politician trading cards; and a Build-Your-Own
			Political Platform competition among schools.
		</p>

		<h3>Persona</h3>
		<p>
			Crafting a user persona for this project was fairly easy, given the Crooked Media listenership
			demographics. Jill Abramson, former NY Times editor and current Guardian contributor, <a
				href="https://www.theguardian.com/media/2018/jan/09/pod-save-america-podcast-european-tour-jon-favreau-obama"
				target="_blank">summed it up thusly</a
			>:
		</p>
		<div class="quote">
			<p>
				They have the young liberal demographic sewn up in the same way Jon Stewart did on cable in
				2000.
			</p>
		</div>
		<p>
			Basically, we were targeting young left-leaning millennials, perhaps entering the political
			fray for the first time, likely feeling disenchanted with Trump-era politics, and exhibiting a
			desire to fight for change or at least willing to educate themselves and stay up to date on
			what's happening. Here's Troy:
		</p>
		<figure>
			<img src="{base}/america/troy.png" alt="early version of web interface" on:click={imgClick} />
			<figcaption>What a handsome millenial!</figcaption>
		</figure>
		<p>
			In sum, we were designing an educational tool for young liberals who, while ostensibly
			concerned with the state of politics in America, are likely shockingly ignorant of the
			political system itself. There are many reasons for this ignorance, and our solution must
			sidestep these obstacles by correctly applying the principles of gamification to drive
			engagement and subvert the “politics = boring” mindset. I brought the core idea to a team
			meeting, and together, we developed the full concept:
		</p>
		<div class="quote">
			<p>
				A satirical gaming platform that educates players about the prevailing issues in American
				politics.
			</p>
		</div>
	</section>

	<section id="partner">
		<h2>Partnership</h2>
    <figure>
			<img src="{base}/america/bullshit.jpg" alt="early version of web interface" on:click={imgClick} />
			<figcaption>Keep it real, folks.</figcaption>
		</figure>
		<h3>CROOKED AGENDAS, CROOKED MEDIA</h3>
		<p>
			Crooked Media is a liberal political media company with a host of podcasts that aims to
			promote open conversation and support political participation. They wanted to provide an
			opportunity for users to educate themselves about how our government really works. By
			strengthening their listeners' foundation of political knowledge, they hoped to increase the
			value of their media offerings. They are a perfect match for this initiative, due to both
			their humorous take on politics and their mission:
		</p>
		<div class="quote">
			<p>
				That’s why we launched Crooked Media — to talk about politics in a way that doesn’t make you
				want to throw your phone out the window – with shows and analysis and other forms of sweet,
				sweet content that inform, entertain, and inspire action.
			</p>
		</div>
    <p>
      In order to frame the idea as something realistically possible, we needed to develop assets showing how it could work. These included a working version of the flagship video game, a prototype of the web platform for desktop & mobile, and branding for the initiative. You can see the finished products in the sections above.
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
	p {
		color: $white;
		max-width: 800px;
	}

	h3 {
		font-family: 'Days One';
	}

	p {
		font-size: 24px;
		line-height: 32px;
	}

	main#america {
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

		section#what,
		section#process,
    section#partner {
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
		}

		section#process {
			ol {
        max-width: 672px;
				padding: 40px 64px;
				border-radius: 24px;
				background-color: rgba($white, 0.12);

				li {
					color: $white;
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
						box-shadow: 0.5em 0.5em #0bdcfc;
						transition: box-shadow 400ms;
					}

					&:hover {
						transform: translateY(-0.5em);

						img {
							box-shadow: 1em 1em #0bdcfc;
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
