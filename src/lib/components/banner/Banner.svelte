<script>
	import Hero from '../hero/Hero.svelte';
	let { bannerProps, heroProps } = $props();
</script>

<div
	style="background:
		linear-gradient(
			rgba(4, 10, 19, 0.1),
			rgba(4, 10, 19, 0.9),
			rgba(4, 10, 19, 0.85),
			rgba(4, 10, 19, 0.8)
			),
			url('{bannerProps?.image}');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;"
	class="pt-42"
>
	<Hero {heroProps} />
</div>
