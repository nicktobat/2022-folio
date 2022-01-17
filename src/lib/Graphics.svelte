<script>
  import { base } from '$app/paths';
	export const prerender = true;
	let src;
	let target = document.querySelector('#lightbox');
	let boxed = false;

	function imgClick() {
		src = this.src.slice(0, -4) + '_.png';
		boxed = true;
	}

	function boxClick() {
		boxed = false;
	}
</script>

<h4>The following graphic designs were created in Affinity Designer. Tap to expand.</h4>
<article>
	<div class="imgWrap">
		<img class="image" src="{base}/graphix/scooby.png" alt="scooby" on:click={imgClick} />
	</div>

	<div class="imgWrap">
		<img class="image" src="{base}/graphix/gods.png" alt="gods" on:click={imgClick} />
	</div>

	<div class="imgWrap">
		<img class="image" src="{base}/graphix/howl.png" alt="howl" on:click={imgClick} />
	</div>

	<div class="imgWrap">
		<img class="image" src="{base}/graphix/cig.png" alt="cig" on:click={imgClick} />
	</div>

	<div class="imgWrap">
		<img class="image" src="{base}/graphix/basenji.png" alt="basenji" on:click={imgClick} />
	</div>

	<div class="imgWrap">
		<img class="image" src="{base}/graphix/oasis.png" alt="oasis" on:click={imgClick} />
	</div>
</article>

<div id="lightbox" class:boxed on:click={boxClick}>
	<img {src} alt="expanded view" />
</div>

<style lang="scss">
	h4 {
		font-family: 'Forum';
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 40px;
	}

	article {
		display: flex;
		flex-flow: row wrap;
		max-width: 1280px;
		margin: -24px 0 0 -24px;

		.imgWrap {
			position: relative;
			width: 360px;
			height: 360px;
			overflow: hidden;
			margin: 24px;
			border: 2px solid $black;
			border-radius: 16px;
			padding: 4px;
			cursor: zoom-in;
			transition: transform 600ms;

			img {
				width: 360px;
				height: 360px;
				border-radius: 12px;
				object-fit: cover;
        user-select: none;
			}

			&:hover {
				transform: scale(1.1);
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
				$black 2px,
				$black 3px
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
