<script>
	const { children, active } = $props();
</script>

<div class="px-[5%] pt-0 sm:px-[7%] md:px-[9%]">
	<div class="grid gap-y-8 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
		<div class="lg:col-span-1 lg:h-full lg:w-full">
			<ul class="menu text-md sticky top-0 w-full pt-4 font-mono font-bold">
				<li>
					<a
						href="/titles/ml"
						class={['my-1 px-10 py-5', active === 'about' ? 'menu-active' : '']}
						>About</a
					>
				</li>
				<li>
					<a
						href="/titles/ml/characters"
						class={[
							'my-1 px-10 py-5',
							active === 'characters' ? 'menu-active' : '',
						]}>Characters</a
					>
				</li>
				<li>
					<a
						href="/titles/ml/equipments/items"
						class={[
							'my-1 px-10 py-5',
							active === 'equipments' ? 'menu-active' : '',
						]}>Equipments</a
					>
				</li>
				<li>
					<a
						href="/titles/ml/equipments/emblems"
						class={[
							'my-1 px-10 py-5',
							active === 'emblems' ? 'menu-active' : '',
						]}>Emblems</a
					>
				</li>
				<li>
					<a
						href="/titles/ml/equipments/spells"
						class={[
							'my-1 px-10 py-5',
							active === 'spells' ? 'menu-active' : '',
						]}>Spells</a
					>
				</li>
			</ul>
		</div>
		<div class="bg-base-100/40 p-15 lg:col-span-3">
			{@render children()}
		</div>
	</div>
</div>
