<script>
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';

	onMount(() => {
		home.value = {
			bannerProps: {
				image: 'https://blog.prydwen.gg/wp-content/uploads/2025/05/lc-s6.webp',
			},
			heroProps: {
				heroChildren: heroFooter,
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div class="h-30"></div>
{/snippet}

<!-- Blog Article -->
<div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
	<div class="grid gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
		<!-- Content -->
		<div class="lg:col-span-2">
			<div class="py-8 lg:pe-8">
				<div class="space-y-5 lg:space-y-8">
					<div class="flex items-center gap-x-5 font-mono">
						<a
							href="/titles/ml"
							target="_blank"
							class="badge badge-md badge-soft badge-info"
						>
							Mobile Legends
						</a>
						<p class="text-xs text-neutral-200 sm:text-sm">May 08, 2025</p>
					</div>
					<h2 class="mt-5 text-3xl font-bold lg:text-5xl">
						Limbus Company Season 6 PV: Zàng Huā Yín (葬花吟) – Premieres May
						15, 2025 (KST)
					</h2>
					<div class="my-10 flex justify-center">
						<blockquote
							class="twitter-tweet"
							data-lang="en"
							data-dnt="true"
							data-theme="dark"
						>
							<p lang="ca" dir="ltr">
								[Limbus Company - PV] <br /><br />Season6 - 葬花吟 [Zàng Huā
								Yín]<br /><br />2025.05.15 (KST)<a
									href="https://t.co/SSw4oWAvmL">https://t.co/SSw4oWAvmL</a
								><a
									href="https://twitter.com/hashtag/LCB?src=hash&amp;ref_src=twsrc%5Etfw"
									>#LCB</a
								>
								<a
									href="https://twitter.com/hashtag/%EB%A6%BC%EB%B2%84%EC%8A%A4?src=hash&amp;ref_src=twsrc%5Etfw"
									>#림버스</a
								>
								<a
									href="https://twitter.com/hashtag/LimbusCompany?src=hash&amp;ref_src=twsrc%5Etfw"
									>#LimbusCompany</a
								>
								<a
									href="https://twitter.com/hashtag/%E3%83%AA%E3%83%B3%E3%83%90%E3%82%B9?src=hash&amp;ref_src=twsrc%5Etfw"
									>#リンバス</a
								>
								<a href="https://t.co/2SkfiXWrvp">pic.twitter.com/2SkfiXWrvp</a>
							</p>
							&mdash; Limbus Company (@LimbusCompany_B)<a
								href="https://twitter.com/LimbusCompany_B/status/1920816020454879589?ref_src=twsrc%5Etfw"
								>May 9, 2025</a
							>
						</blockquote>
						<script
							async
							src="https://platform.twitter.com/widgets.js"
							charset="utf-8"
						></script>
					</div>
				</div>
			</div>
		</div>
		<!-- End Content -->

		<!-- Sidebar -->
		<div
			class="lg:col-span-1 lg:h-full lg:w-full lg:bg-linear-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800"
		>
			<div class="sticky start-0 top-0 py-8 lg:ps-8">
				<!-- Avatar Media -->
				<div class="group flex items-center gap-x-3">
					<div class="block shrink-0 focus:outline-hidden">
						<img
							class="size-10 rounded-full"
							src="https://pbs.twimg.com/profile_images/1509485712550535168/q_SnRdGP_400x400.jpg"
							alt="Avatar"
						/>
					</div>
					<div class="group block grow focus:outline-hidden">
						<h5
							class="text-sm font-semibold text-neutral-200 group-hover:text-neutral-400 group-focus:text-neutral-400"
						>
							Limbus Company
						</h5>
						<p class="text-sm text-neutral-500">@LimbusCompany_B</p>
					</div>
					<div class="grow">
						<div class="flex justify-end">
							<a
								target="_blank"
								href="https://x.com/LimbusCompany_B"
								class="btn btn-soft btn-sm btn-info">Follow</a
							>
						</div>
					</div>
				</div>
				<!-- End Avatar Media -->
				<div class="divider"></div>
				<div class="space-y-6">
					<!-- Media -->
					<a
						target="_blank"
						class="group flex items-center gap-x-6 focus:outline-hidden"
						href="/blogs/1234"
					>
						<div class="grow">
							<span
								class="text-sm font-bold text-neutral-200 group-hover:text-neutral-400 group-focus:text-neutral-400"
							>
								Reverse: 1999 CN - 2nd Anniversary Preview
							</span>
						</div>
						<div class="size-20 shrink-0 overflow-hidden rounded-lg">
							<img
								class="size-full rounded-lg object-cover"
								src="https://blog.prydwen.gg/wp-content/uploads/2025/05/Blog_Banner.png"
								alt="Blog thumbnail"
							/>
						</div>
					</a>
					<!-- End Media -->
				</div>
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>

<!-- End Blog Article -->
