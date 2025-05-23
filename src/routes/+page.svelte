<script>
	import { home } from '$lib/store/home.svelte';
	let { data } = $props();
	import { onDestroy, onMount } from 'svelte';
	import AppBanner from '$lib/images/bg.jpg';
	import Container from '$lib/components/container/Container.svelte';
	import DownArrow from '$lib/images/icons/DownArrow.svg';
	import { getBanner } from '$lib/utils/images/banner';

	onMount(() => {
		home.value = {
			bannerProps: {
				image: AppBanner,
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
		{#each data?.data as tenant}
			<a href={JSON.parse(tenant?.description)?.redirection_url}>
				<div
					class="group hover:border-info relative rounded-xl border-1 border-transparent"
				>
					<img
						src={getBanner(tenant?.image)}
						alt="title-{tenant?.name}-thumbnail"
						class="h-[13rem] max-h-[13rem] w-full max-w-full rounded-xl object-cover"
					/>
					<div
						class="absolute inset-0 rounded-xl bg-black/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					></div>
					<div
						class="group-hover:border-t-info absolute bottom-0 left-0 w-full translate-y-full rounded-t-none rounded-b-xl bg-black/70 py-3 text-center font-mono text-white opacity-0
						transition-transform duration-700 group-hover:translate-y-0 group-hover:border-t-1 group-hover:opacity-100"
					>
						{tenant?.name}
					</div>
				</div>
			</a>
		{/each}
	</div>
</Container>

<style>
	.down-arrow {
		filter: invert(1);
		width: 22px;
		height: 22px;
	}
</style>
