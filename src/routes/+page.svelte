<script>
	import Container from '$lib/components/container/Container.svelte';
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

<Container>
	<div
		class="grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 md:grid-cols-3"
	>
		<a href="/titles/ml">
			<div
				class="group hover:border-info relative rounded-xl border-1 border-transparent"
			>
				<img
					class="h-[13rem] max-h-[13rem] w-full max-w-full rounded-xl object-cover"
					src="https://i.pinimg.com/1200x/7d/4f/a8/7d4fa8f2287e7ac4211a8be5c0e0237c.jpg"
					alt="game-thumbnail"
				/>
				<div
					class="absolute inset-0 rounded-xl bg-black/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
				></div>
				<div
					class="group-hover:border-t-info absolute bottom-0 left-0 w-full translate-y-full rounded-t-none rounded-b-xl bg-black/70 py-3 text-center font-mono text-white opacity-0
					transition-transform duration-700 group-hover:translate-y-0 group-hover:border-t-1 group-hover:opacity-100"
				>
					Mobile Legends
				</div>
			</div>
		</a>
		<a href="/titles/arknights">
			<div
				class="group hover:border-info relative rounded-xl border-1 border-transparent"
			>
				<img
					class="h-[13rem] max-h-[13rem] w-full max-w-full rounded-xl object-cover"
					src="https://pbs.twimg.com/media/EqjG6maU0AAHhEF?format=jpg&name=4096x4096"
					alt="game-thumbnail"
				/>
				<div
					class="absolute inset-0 rounded-xl bg-black/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
				></div>
				<div
					class="group-hover:border-t-info absolute bottom-0 left-0 w-full translate-y-full rounded-t-none rounded-b-xl bg-black/70 py-3 text-center font-mono text-white opacity-0
						transition-transform duration-700 group-hover:translate-y-0 group-hover:border-t-1 group-hover:opacity-100"
				>
					Arknights
				</div>
			</div>
		</a>
		<a href="/titles/genshin">
			<div
				class="group hover:border-info relative rounded-xl border-1 border-transparent"
			>
				<img
					class="h-[13rem] max-h-[13rem] w-full max-w-full rounded-xl object-cover"
					src="https://images2.alphacoders.com/110/thumb-1920-1109233.jpg"
					alt="game-thumbnail"
				/>
				<div
					class="absolute inset-0 rounded-xl bg-black/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
				></div>
				<div
					class="group-hover:border-t-info absolute bottom-0 left-0 w-full translate-y-full rounded-t-none rounded-b-xl bg-black/70 py-3 text-center font-mono text-white opacity-0
						transition-transform duration-700 group-hover:translate-y-0 group-hover:border-t-1 group-hover:opacity-100"
				>
					Genshin Impact
				</div>
			</div>
		</a>
	</div>
</Container>

<style>
	.down-arrow {
		filter: invert(1);
		width: 22px;
		height: 22px;
	}
</style>
