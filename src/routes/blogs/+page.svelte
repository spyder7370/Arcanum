<script>
	import Container from '$lib/components/container/Container.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { home } from '$lib/store/home.svelte';
	import DownArrow from '$lib/images/icons/DownArrow.svg';
	let showFilters = $state(false);
	let queryString = $state('');
	let formFilters = $state({
		title: '',
		sort: '',
	});
	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/46/6d/2d/466d2d7207cb0e78eae47ae27940a8b0.jpg',
			},
			heroProps: {
				title: 'Blog',
				description: `Discover the latest updates, event announcements, and community
				highlights related to your favorite titles.`,
				heroChildren: heroFooter,
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
		console.log('Form submitted', queryString, formFilters);
	};
</script>

<svelte:head>
	<title>Blogs</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div class="flex w-lg flex-row gap-2 pt-5">
		<button
			onclick={() => (showFilters = !showFilters)}
			class="btn btn-accent"
			class:btn-outline={!showFilters}>Show filters</button
		>
		<input
			bind:value={queryString}
			type="text"
			name="query"
			placeholder="Type here"
			class="input border-accent bg-base-200/50"
		/>
		<button onclick={onSubmit} class="btn btn-accent btn-soft">Search</button>
	</div>
	{#if showFilters}
		<div
			in:slide={{ duration: 200 }}
			out:slide={{ duration: 200 }}
			class="card bg-base-100 mt-5 w-full p-5 text-left shadow-sm"
		>
			<p class="my-3">Titles</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() => onChange({ target: { name: 'title', value: null } })}
					class="btn btn-square"
					type="reset"
					name="title"
					value="×"
				/>
				<input
					class="btn"
					type="radio"
					name="title"
					aria-label="Mobile Legends"
					value="Mobile Legends"
					checked={formFilters?.title === 'Mobile Legends'}
				/>
				<input
					class="btn"
					type="radio"
					name="title"
					aria-label="Arknights"
					value="Arknights"
					checked={formFilters?.title === 'Arknights'}
				/>
				<input
					class="btn"
					type="radio"
					name="title"
					aria-label="Genshin Impact"
					value="Genshin Impact"
					checked={formFilters?.title === 'Genshin Impact'}
				/>
			</form>
			<div class="divider"></div>
			<p class="mb-3">Sort</p>
			<form
				onchange={onChange}
				class="hide-scrollbar flex-nowrap overflow-scroll filter"
			>
				<input
					onclick={() => onChange({ target: { name: 'sort', value: null } })}
					class="btn btn-square"
					name="sort"
					type="reset"
					value="×"
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Last Updated"
					value="lastUpdated"
					checked={formFilters?.sort === 'lastUpdated'}
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Oldest Updated"
					value="oldestUpdated"
					checked={formFilters?.sort === 'oldestUpdated'}
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Most Popular"
					value="mostPopular"
					checked={formFilters?.sort === 'mostPopular'}
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Least Popular"
					value="leastPopular"
					checked={formFilters?.sort === 'leastPopular'}
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Title Ascending"
					value="titleAsc"
					checked={formFilters?.sort === 'titleAsc'}
				/>
				<input
					class="btn"
					type="radio"
					name="sort"
					aria-label="Title Descending"
					value="titleDesc"
					checked={formFilters?.sort === 'titleDesc'}
				/>
			</form>
		</div>
	{/if}
{/snippet}

<Container>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div class="space-y-6">
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 |
						<a
							href="/titles/ml"
							target="_blank"
							class="link link-accent link-hover"
							>Mobile Legends
						</a>
					</p>
					<h2 class="card-title">
						Card Title
						<div class="badge badge-outline badge-accent">NEW</div>
					</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
		</div>
		<div class="space-y-6">
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover">Arknights</a>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
						alt="Gallery Masonry Image"
					/>
				</figure>
				<div class="card-body">
					<p class="my-2 font-mono">
						May 8, 2025 | <a class="link link-accent link-hover"
							>Mobile Legends</a
						>
					</p>
					<h2 class="card-title">Card Title</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div class="card-actions mt-4">
						<a href="/blogs/123" class="btn btn-soft btn-accent">Read more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</Container>
