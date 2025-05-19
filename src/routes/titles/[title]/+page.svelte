<script>
	let { data } = $props();
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';
	import TitleSidebar from '$lib/components/sidebar/TitleSidebar.svelte';
	let showFilters = $state(false);

	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/7d/4f/a8/7d4fa8f2287e7ac4211a8be5c0e0237c.jpg',
				bannerPosition: 'top',
			},
			heroProps: {
				title: 'Mobile Legends',
				heroChildren: heroFooter,
				breadcrumbs: [{ text: 'Home', url: '/' }],
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
	<div class="h-20"></div>
{/snippet}

<TitleSidebar active="about">
	<div class="mb-10">
		<div class="font-mono text-lg font-bold">About the game</div>
		<div class="divider divider-info"></div>
		<div>
			Mobile Legends: Bang Bang is a popular 5v5 multiplayer online battle arena
			(MOBA) game for mobile devices. Players form teams and compete in
			real-time matches, using a wide selection of heroes with unique skills and
			roles such as tank, mage, assassin, or marksman. The goal is to work
			together strategically to defeat enemies and destroy their base while
			defending your own. With quick matchmaking, intense gameplay, and regular
			updates, Mobile Legends offers a competitive and engaging experience for
			both casual and hardcore gamers, making it one of the most played mobile
			MOBAs globally.
		</div>
	</div>
	<div class="mb-10">
		<div class="font-mono text-lg font-bold">Official links</div>
		<div class="divider divider-info"></div>
		<div>
			<div class="border-info border-l-3 pl-6">
				<div class="my-2">Official Website: Open in new window</div>
				<div class="my-2">Official Community: Open in new window</div>
				<div class="my-2">Official YouTube: Open in new window</div>
				<div class="my-2">Google Play Store (Global): Open in new window</div>
				<div class="my-2">Apple Store (Global): Open in new window</div>
				<div class="my-2">Google Play Store (India): Open in new window</div>
				<div class="my-2">Apple Store (India): Open in new window</div>
			</div>
		</div>
	</div>
</TitleSidebar>
