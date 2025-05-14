<script>
	let { data } = $props();
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';

	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/7d/4f/a8/7d4fa8f2287e7ac4211a8be5c0e0237c.jpg',
			},
			heroProps: {
				title: 'Mobile Legends',
				heroChildren: heroFooter,
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});
</script>

<svelte:head>
	<title>Mobile Legends</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div></div>
{/snippet}

<div>
	game {data.slug}
</div>
