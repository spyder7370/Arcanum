<div class="mt-10 flex justify-center">
	<svg
		class="animate-bounce-slow h-40 w-40 text-red-300"
		viewBox="0 0 200 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="40"
			y="50"
			width="120"
			height="100"
			rx="15"
			stroke="currentColor"
			stroke-width="6"
			fill="none"
		/>
		<circle cx="70" cy="90" r="8" fill="currentColor">
			<animate
				attributeName="r"
				values="8;6;8"
				dur="1.2s"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="130" cy="90" r="8" fill="currentColor">
			<animate
				attributeName="r"
				values="8;6;8"
				dur="1.2s"
				begin="0.2s"
				repeatCount="indefinite"
			/>
		</circle>
		<rect x="80" y="120" width="40" height="6" rx="3" fill="currentColor">
			<animate
				attributeName="width"
				values="40;30;40"
				dur="1s"
				repeatCount="indefinite"
			/>
		</rect>
		<line
			x1="100"
			y1="30"
			x2="100"
			y2="50"
			stroke="currentColor"
			stroke-width="4"
		/>
		<circle cx="100" cy="25" r="5" fill="currentColor">
			<animate
				attributeName="r"
				values="5;7;5"
				dur="1.5s"
				repeatCount="indefinite"
			/>
		</circle>
	</svg>
</div>

<div class="mx-auto flex size-full max-w-3xl flex-col">
	<main id="content">
		<div class="px-4 pb-10 text-center sm:px-6 lg:px-8">
			<h1 class="block text-7xl font-bold text-white sm:text-9xl">404</h1>
			<p class="mt-5 text-neutral-400">Oops, something went wrong.</p>
			<p class="text-neutral-400">Sorry, we couldn't find your page.</p>
			<div
				class="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
			>
				<a class="btn btn-outline btn-error" href="/">
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
	</main>
</div>

<style>
	@keyframes bounceSlow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
	.animate-bounce-slow {
		animation: bounceSlow 2.5s infinite;
	}
</style>
