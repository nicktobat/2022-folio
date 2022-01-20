<script>
	import { base } from '$app/paths';
	import { browser, dev } from '$app/env';
	import Work from '$lib/Work.svelte';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;

	let tags = {
		google: ['Refugee Crisis', 'Social Good', 'Web Design'],
		america: ['Game Design', 'Branding', 'UI/UX']
	};
</script>

<svelte:head>
	<title>Blue Sky | Nicholas Tobat</title>
</svelte:head>

<main id="bluesky">
	<header>
		<div class="text">
			<h1>Blue Sky</h1>
			<h3>Projects I would love to work on given unlimited time & money.</h3>
		</div>
	</header>

	<section>
		<h4>
			The following are conceptual projects that I completed during my graduate studies. If you're interested
			in helping me make them a reality, please don't hesitate to contact me.
		</h4>
		<Work
			href="{base}/bluesky/america"
			name="AMERICA 2050"
			desc="Politically informative games with a liberal & satirical slant."
			src="{base}/america/hero.png"
			color="#1A1A1A"
			bgColor="26, 26, 26"
			tags={tags.america}
		/>
	</section>
</main>

<style lang="scss">
	section {
		margin-top: 64px;
		max-width: 800px;

		h4 {
			font-family: 'Forum';
			font-size: 20px;
			line-height: 28px;
			margin-bottom: 40px;
		}
	}
</style>
