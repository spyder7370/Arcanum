<script>
	const { children, activeTab } = $props();
</script>

<div class="px-[5%] pt-0 sm:px-[7%] md:px-[9%]">
	<div class="grid gap-y-8 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
		<div class="lg:col-span-1 lg:h-full lg:w-full">
			<ul class="menu text-md sticky top-0 w-full pt-4 font-mono font-bold">
				<li>
					<div
						onclick={() => (activeTab.value = 'introduction')}
						class={[
							'my-1 px-10 py-5',
							activeTab.value === 'introduction' ? 'menu-active' : '',
						]}
					>
						Introduction
					</div>
				</li>
				<li>
					<div
						onclick={() => (activeTab.value = 'skills')}
						class={[
							'my-1 px-10 py-5',
							activeTab.value === 'skills' ? 'menu-active' : '',
						]}
					>
						Skills
					</div>
				</li>
				<li>
					<div
						onclick={() => (activeTab.value = 'guide')}
						class={[
							'my-1 px-10 py-5',
							activeTab.value === 'guide' ? 'menu-active' : '',
						]}
					>
						Guide
					</div>
				</li>
				<li>
					<div
						onclick={() => (activeTab.value = 'synergy')}
						class={[
							'my-1 px-10 py-5',
							activeTab.value === 'synergy' ? 'menu-active' : '',
						]}
					>
						Synergy
					</div>
				</li>
				<li>
					<div
						onclick={() => (activeTab.value = 'gallery')}
						class={[
							'my-1 px-10 py-5',
							activeTab.value === 'gallery' ? 'menu-active' : '',
						]}
					>
						Gallery
					</div>
				</li>
			</ul>
		</div>
		<div class="bg-base-100/40 p-15 lg:col-span-3">
			{@render children()}
		</div>
	</div>
</div>
