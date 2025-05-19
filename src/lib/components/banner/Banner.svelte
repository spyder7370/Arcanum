<script>
	import { onDestroy } from 'svelte';
	import Hero from '../hero/Hero.svelte';
	import { on } from 'svelte/events';
	let { bannerProps, heroProps } = $props();
	let initialImage = $derived.by(() => {
		if (bannerProps?.images?.length > 0) {
			return bannerProps?.images[0];
		}
		return bannerProps?.image;
	});
	let enableSlideshow = $derived(bannerProps?.images?.length > 0);
	let interval;
	let bgBox;

	$effect(() => {
		clearInterval(interval);
		if (enableSlideshow) {
			enableSlideshowInterval();
		}
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	const enableSlideshowInterval = () => {
		let index = 0;
		if (enableSlideshow && bgBox) {
			const styles = getBackgroundStyles(bannerProps?.images?.[index]);
			bgBox.style.background = styles.background;
			bgBox.style.backgroundRepeat = styles.backgroundRepeat;
			bgBox.style.backgroundSize = styles.backgroundSize;
			bgBox.style.backgroundPosition = styles.backgroundPosition;
		}
		interval = setInterval(() => {
			if (enableSlideshow && bgBox) {
				bgBox?.classList?.remove('opacity-100');
				bgBox?.classList?.add('opacity-50');

				setTimeout(() => {
					index = (index + 1) % bannerProps?.images?.length;
					const styles = getBackgroundStyles(bannerProps?.images?.[index]);
					bgBox.style.background = styles.background;
					bgBox.style.backgroundRepeat = styles.backgroundRepeat;
					bgBox.style.backgroundSize = styles.backgroundSize;
					bgBox.style.backgroundPosition = styles.backgroundPosition;

					bgBox?.classList?.remove('opacity-50');
					bgBox?.classList?.add('opacity-100');
				}, 700);
			}
		}, 10000);
	};

	const getBackgroundStyles = (image) => {
		return {
			background: `linear-gradient(
				rgba(4, 10, 19, 0.1),
				rgba(4, 10, 19, 0.9),
				rgba(4, 10, 19, 0.85),
				rgba(4, 10, 19, 0.8)
				),
				url('${image}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: `${bannerProps?.bannerPosition || 'center center'}`,
		};
	};
</script>

<div
	bind:this={bgBox}
	style="background:
		linear-gradient(
			rgba(4, 10, 19, 0.1),
			rgba(4, 10, 19, 0.9),
			rgba(4, 10, 19, 0.85),
			rgba(4, 10, 19, 0.8)
			),
			url('{initialImage}');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: ${bannerProps?.bannerPosition || 'center center'};"
	class="pt-42 opacity-100 transition-opacity duration-700"
>
	<Hero {heroProps} />
</div>
