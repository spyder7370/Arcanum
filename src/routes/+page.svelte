<script>
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';
	import DownArrow from '$lib/images/icons/DownArrow.svg';

	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/06/b3/18/06b318c08cafd3a55733b42300d3a62d.jpg',
			},
			heroProps: {
				title: 'Your go-to destination for top-tier gaming guides',
				description: `Arcanum delivers the latest news, tier lists, and in-depth guides
						for popular titles like Mobile Legends, and more — all conveniently
						in one place!`,
				breadcrumbs: null,
				heroChildren: heroFooter,
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});
</script>

{#snippet heroFooter()}
	<p class="py-6 font-mono text-white">Choose a game</p>
	<img src={DownArrow} alt="Down Arrow" class="down-arrow mx-auto" />
{/snippet}

<svelte:head>
	<title>Arcanum</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
	<div>
		<img
			class="h-full max-w-full rounded-lg"
			src="https://i.pinimg.com/1200x/43/27/40/4327403bc767165725ba7e83b8a4e7e7.jpg"
			alt=""
		/>
	</div>
</div>

<style>
	.down-arrow {
		filter: invert(1);
		width: 22px;
		height: 22px;
	}
</style>
