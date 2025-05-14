<svelte:head>
	<title>Coming Soon</title>
	<meta name="description" content="Coming Soon" />
</svelte:head>

<div class="mt-10">
	<svg
		class="mx-auto h-50 w-50 animate-pulse text-cyan-300"
		viewBox="0 0 100 100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="50"
			cy="50"
			r="40"
			stroke="currentColor"
			stroke-width="6"
			opacity="0.2"
		/>
		<circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="4" />
		<path
			d="M50 35 L52 48 L65 50 L52 52 L50 65 L48 52 L35 50 L48 48 Z"
			fill="currentColor"
		/>
	</svg>
</div>
<div class="mx-auto flex size-full max-w-3xl flex-col">
	<div class="px-4 py-10 text-center sm:px-6 lg:px-8">
		<h1 class="block text-4xl font-bold text-white md:text-7xl">
			Coming Soon!
		</h1>
		<p class="mt-8 text-xl text-neutral-400">
			We're working hard to bring something awesome. Stay tuned.
		</p>
		<div
			class="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
		>
			<a class="btn btn-outline btn-info" href="/">
				<svg
					class="size-4 shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
				>
				Back to home
			</a>
		</div>
	</div>
</div>
