<script>
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';
	import { slide } from 'svelte/transition';
	import Container from '$lib/components/container/Container.svelte';
	import TitleSidebar from '$lib/components/sidebar/TitleSidebar.svelte';
	let showFilters = $state(false);
	let formFilters = $state({
		query: '',
		role: '',
		lane: '',
		speciality: '',
	});

	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/d7/79/6f/d7796f8e74292c352dc48ee37666e216.jpg',
				bannerPosition: 'top',
			},
			heroProps: {
				title: 'Characters',
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

	const onSubmit = () => {
		console.log('Form submitted', formFilters);
	};
</script>

<svelte:head>
	<title>Characters</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div class="flex w-full flex-col gap-2 pt-5 md:w-lg md:flex-row">
		<button
			onclick={() => (showFilters = !showFilters)}
			class="btn btn-success"
			class:btn-outline={!showFilters}>Show filters</button
		>
		<input
			bind:value={formFilters.query}
			type="text"
			name="query"
			placeholder="Type here"
			class="input border-success bg-base-200/50 w-full"
		/>
	</div>
	{#if showFilters}
		<div
			in:slide={{ duration: 200 }}
			out:slide={{ duration: 200 }}
			class="card bg-base-100 mt-5 w-full p-5 text-left shadow-sm"
		>
			<p class="my-3">Roles</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() => onChange({ target: { name: 'role', value: null } })}
					class="btn btn-soft btn-success btn-square"
					type="reset"
					name="title"
					value="×"
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Assassin"
					value="Assassin"
					checked={formFilters?.title === 'Assassin'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Fighter"
					value="Fighter"
					checked={formFilters?.title === 'Fighter'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Mage"
					value="Mage"
					checked={formFilters?.title === 'Mage'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Marksman"
					value="Marksman"
					checked={formFilters?.title === 'Marksman'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Tank"
					value="Tank"
					checked={formFilters?.title === 'Tank'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="role"
					aria-label="Support"
					value="Support"
					checked={formFilters?.title === 'Support'}
				/>
			</form>
			<div class="divider"></div>
			<p class="mb-3">Lane</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() => onChange({ target: { name: 'lane', value: null } })}
					class="btn btn-soft btn-success btn-square"
					name="lane"
					type="reset"
					value="×"
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="lane"
					aria-label="Exp Lane"
					value="Exp Lane"
					checked={formFilters?.sort === 'Exp Lane'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="lane"
					aria-label="Mid Lane"
					value="Mid Lane"
					checked={formFilters?.sort === 'Mid Lane'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="lane"
					aria-label="Gold Lane"
					value="Gold Lane"
					checked={formFilters?.sort === 'Gold Lane'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="lane"
					aria-label="Jungle"
					value="Jungle"
					checked={formFilters?.sort === 'Jungle'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="lane"
					aria-label="Roam"
					value="Roam"
					checked={formFilters?.sort === 'Roam'}
				/>
			</form>
			<div class="divider"></div>
			<p class="mb-3">Speciality</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() =>
						onChange({ target: { name: 'speciality', value: null } })}
					class="btn btn-soft btn-success btn-square"
					name="speciality"
					type="reset"
					value="×"
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="speciality"
					aria-label="Burst"
					value="Burst"
					checked={formFilters?.sort === 'Burst'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="speciality"
					aria-label="Charge"
					value="Charge"
					checked={formFilters?.sort === 'Charge'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="speciality"
					aria-label="Chase"
					value="Chase"
					checked={formFilters?.sort === 'Chase'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="speciality"
					aria-label="Control"
					value="Control"
					checked={formFilters?.sort === 'Control'}
				/>
				<input
					class="btn btn-soft btn-success"
					type="radio"
					name="speciality"
					aria-label="Damage"
					value="Damage"
					checked={formFilters?.sort === 'Damage'}
				/>
			</form>
		</div>
	{/if}
{/snippet}

<TitleSidebar active="characters">
	<div class="grid grid-cols-2 gap-5 overflow-hidden p-2 lg:grid-cols-4">
		<a href="/titles/ml/characters/ling">
			<div
				class=" card bg-base-100 image-full hover:border-success size-80 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#6EFF9A]"
			>
				<figure>
					<img
						class="w-full mask-b-from-30% mask-b-to-99% object-cover"
						src="https://i.pinimg.com/736x/f3/5d/05/f35d0595110cede6b7ea647726b15daf.jpg"
						alt="Shoes"
					/>
				</figure>
				<div class="group card-body flex flex-col justify-between p-0">
					<div class="flex w-fit flex-col gap-2 p-2">
						<div class="tooltip tooltip-right">
							<div class="tooltip-content">
								<div class="bg-black-900 text-white">Jungle</div>
							</div>
							<img
								class="h-xl size-12 rounded-lg bg-black/65 p-2"
								src="https://akmweb.youngjoygame.com/web/gms/image/de611167c7310681135f0b4198137bfa.svg"
								alt=""
							/>
						</div>
					</div>
					<div class="grow-0 p-6">
						<div class="text-lg font-bold text-white">Ling</div>
						<div class="mt-2 font-mono text-xs text-white">
							Assassin | Fighter
						</div>
						<div class="mt-2 font-mono text-xs text-white">Chase | Burst</div>
					</div>
				</div>
			</div>
		</a>
		<a href="/titles/ml/characters/nolan">
			<div
				class=" card bg-base-100 image-full hover:border-success size-80 w-full shadow-sm hover:border-1 hover:shadow-[0_0_10px_#6EFF9A]"
			>
				<figure>
					<img
						class="w-full mask-b-from-30% mask-b-to-99% object-cover"
						src="https://i.pinimg.com/736x/2c/c1/e5/2cc1e5ebf63dc2eef9462c9574dcfd25.jpg"
						alt="Shoes"
					/>
				</figure>
				<div class="group card-body flex flex-col justify-between p-0">
					<div class="flex w-fit flex-col gap-2 p-2">
						<div class="tooltip tooltip-right">
							<div class="tooltip-content">
								<div class="bg-black-900 text-white">Gold Lane</div>
							</div>
							<img
								class="h-xl size-12 rounded-lg bg-black/65 p-2"
								src="https://akmweb.youngjoygame.com/web/gms/image/91f817c656908a83c2e24eecb3b70986.svg"
								alt=""
							/>
						</div>
					</div>
					<div class="grow-0 p-6">
						<div class="text-lg font-bold text-white">Kimmy</div>
						<div class="mt-2 font-mono text-xs text-white">Marksman | Mage</div>
						<div class="mt-2 font-mono text-xs text-white">Magic Damage</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</TitleSidebar>

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
