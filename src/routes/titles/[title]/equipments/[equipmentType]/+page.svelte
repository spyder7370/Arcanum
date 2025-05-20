<script>
	let { data } = $props();
	import { onDestroy } from 'svelte';
	import { home } from '$lib/store/home.svelte';
	import { slide } from 'svelte/transition';
	import TitleSidebar from '$lib/components/sidebar/TitleSidebar.svelte';
	let showFilters = $state(false);
	let formFilters = $state({
		query: '',
		role: '',
	});
	let pageProps = $derived.by(() => {
		if (data.equipmentType === 'emblems') {
			return {
				id: 'emblems',
				title: 'Emblems',
				bannerImage:
					'https://i.pinimg.com/1200x/0f/e5/94/0fe5942dc711d240fee6eff0e2e7b40f.jpg',
			};
		} else if (data.equipmentType === 'items') {
			return {
				id: 'equipments',
				title: 'Equipments',
				bannerImage:
					'https://i.pinimg.com/1200x/ca/5e/5b/ca5e5b5edf17ccaf73003bced04772ca.jpg',
			};
		}
		return {
			id: 'spells',
			title: 'Spells',
			bannerImage:
				'https://i.pinimg.com/1200x/b3/ab/79/b3ab790d9ff08dee8857d244a66dbebf.jpg',
		};
	});

	$effect(() => {
		home.value = {
			bannerProps: {
				image: pageProps.bannerImage,
				bannerPosition: 'top',
			},
			heroProps: {
				title: pageProps.title,
				heroChildren: heroFooter,
				breadcrumbs: [
					{ text: 'Home', url: '/' },
					{ text: 'Mobile Legends', url: '/titles/ml' },
				],
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});

	const onChange = (e) => {
		formFilters[e?.target?.name] = e?.target?.value;
	};
</script>

<svelte:head>
	<title>Equipments</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div class="flex w-full flex-col gap-2 pt-5 md:w-lg md:flex-row">
		{#if pageProps.id === 'equipments'}
			<button
				onclick={() => (showFilters = !showFilters)}
				class="btn btn-accent"
				class:btn-outline={!showFilters}>Show filters</button
			>
			<input
				bind:value={formFilters.query}
				type="text"
				name="query"
				placeholder="Type here"
				class="input border-accent bg-base-200/50 w-full"
			/>
		{:else if pageProps.id === 'spells'}
			<input
				bind:value={formFilters.query}
				type="text"
				name="query"
				placeholder="Type here"
				class="input border-warning bg-base-200/50 w-full"
			/>
		{:else}
			<input
				bind:value={formFilters.query}
				type="text"
				name="query"
				placeholder="Type here"
				class="input border-secondary bg-base-200/50 w-full"
			/>
		{/if}
	</div>
	{#if showFilters}
		<div
			in:slide={{ duration: 200 }}
			out:slide={{ duration: 200 }}
			class="card bg-base-100/60 mt-5 w-full p-5 text-left shadow-sm"
		>
			<p class="my-3">Roles</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() => onChange({ target: { name: 'role', value: null } })}
					class="btn btn-soft btn-accent btn-square"
					type="reset"
					name="title"
					value="×"
				/>
				<input
					class="btn btn-soft btn-accent"
					type="radio"
					name="role"
					aria-label="Attack"
					value="Attack"
					checked={formFilters?.title === 'Attack'}
				/>
				<input
					class="btn btn-soft btn-accent"
					type="radio"
					name="role"
					aria-label="Magic"
					value="Magic"
					checked={formFilters?.title === 'Magic'}
				/>
				<input
					class="btn btn-soft btn-accent"
					type="radio"
					name="role"
					aria-label="Defense"
					value="Defense"
					checked={formFilters?.title === 'Defense'}
				/>
				<input
					class="btn btn-soft btn-accent"
					type="radio"
					name="role"
					aria-label="Movement"
					value="Movement"
					checked={formFilters?.title === 'Movement'}
				/>
				<input
					class="btn btn-soft btn-accent"
					type="radio"
					name="role"
					aria-label="Adaptive"
					value="Adaptive"
					checked={formFilters?.title === 'Adaptive'}
				/>
			</form>
		</div>
	{/if}
{/snippet}

{#if pageProps.id === 'emblems'}
	<TitleSidebar active={pageProps.id}>
		<div
			class="grid grid-cols-2 gap-5 overflow-hidden p-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<a href="/titles/ml/equipments/emblems/assassin">
				<div
					class="card bg-base-100 image-full hover:border-secondary size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#FFB3A3]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://static.wikia.nocookie.net/mobile-legends/images/9/94/Custom_Assassin_Emblem.png"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">
								Assassin
							</div>
						</div>
					</div>
				</div>
			</a>
			<a href="/titles/ml/equipments/emblems/mage">
				<div
					class="card bg-base-100 image-full hover:border-secondary size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#FFB3A3]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://mlbb.io/_next/image?url=%2Fimages%2Femblem%2Fmain%2Fmage.png&w=128&q=75"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">Mage</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	</TitleSidebar>
{:else if pageProps.id === 'spells'}
	<TitleSidebar active={pageProps.id}>
		<div
			class="grid grid-cols-2 gap-5 overflow-hidden p-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<a href="/titles/ml/equipments/spells/retribution">
				<div
					class="card bg-base-100 image-full hover:border-warning size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#E9FF6A]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://static.wikia.nocookie.net/mobile-legends/images/b/bd/Ice_Retribution.png"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">
								Ice Retribution
							</div>
						</div>
					</div>
				</div>
			</a>
			<a href="/titles/ml/equipments/spells/vengeance">
				<div
					class="card bg-base-100 image-full hover:border-warning size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#E9FF6A]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://static.wikia.nocookie.net/mobile-legends/images/8/85/Vengeance.png"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">
								Vengeance
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	</TitleSidebar>
{:else if pageProps.id === 'equipments'}
	<TitleSidebar active={pageProps.id}>
		<div
			class="grid grid-cols-2 gap-5 overflow-hidden p-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<a href="/titles/ml/equipments/items/divine-glaive">
				<div
					class="card bg-base-100 image-full hover:border-accent size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#C19CFF]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://mlcounter.com/wp-content/uploads/2022/04/Divine_Glaive.png"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">
								Divine Glaive
							</div>
							<div class="mt-2 font-mono text-xs text-white">Magic Damage</div>
						</div>
					</div>
				</div>
			</a>
			<a href="/titles/ml/equipments/items/berserkers-fury">
				<div
					class="card bg-base-100 image-full hover:border-accent size-50 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#C19CFF]"
				>
					<figure>
						<img
							class="w-full mask-b-from-0% mask-b-to-99% object-cover"
							src="https://mlcounter.com/wp-content/uploads/2022/04/Berserkers_Fury.png"
							alt="Shoes"
						/>
					</figure>
					<div class="group card-body flex flex-col justify-end p-0">
						<div class="grow-0 p-6">
							<div class="text-lg font-bold wrap-anywhere text-white">
								Berserker's Fury
							</div>
							<div class="mt-2 font-mono text-xs text-white">
								Physical Damage
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	</TitleSidebar>
{/if}

<style>
	.card figure img {
		filter: brightness(0.85);
		transition: filter 0.3s ease;
	}

	.card {
		transition: box-shadow 0.3s ease;
	}

	.card:hover {
		& figure img {
			filter: brightness(0.6);
		}
	}
</style>
