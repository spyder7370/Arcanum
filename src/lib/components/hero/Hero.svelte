<script>
	let { heroProps } = $props();
</script>

{#if !!heroProps?.title || !!heroProps?.description || !!heroProps?.breadcrumbs || !!heroProps?.heroChildren}
	<div class="hero py-[4rem]">
		<div class="hero-content text-center">
			<div class="max-w-lg">
				<h1 class="text-4xl font-bold">
					{heroProps?.title}
				</h1>
				<p class="py-6">
					{heroProps?.description}
				</p>
				{#if !!heroProps?.heroChildren}
					{@render heroProps?.heroChildren()}
				{/if}
			</div>
		</div>
	</div>
{/if}
