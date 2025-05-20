<script>
	let { data } = $props();
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';

	onMount(() => {
		home.value = {
			bannerProps: {
				image: data.bannerImage,
				bannerPosition: 'top',
			},
			heroProps: {
				title: data.title,
				breadcrumbs: data.breadcrumbs,
				heroChildren: heroFooter,
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});
</script>

{#snippet heroFooter()}
	<div class="h-20"></div>
{/snippet}

<div class="px-[5%] pt-0 sm:px-[7%] md:px-[9%]">
	<div class="grid gap-y-8 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
		<div class="lg:col-span-1 lg:h-full lg:w-full">
			<div class="text-md sticky top-0 flex w-full justify-center pt-4">
				<img
					class="my-1 w-60 object-cover px-10 py-5"
					src={data.itemImage}
					alt=""
				/>
			</div>
		</div>
		<div class="bg-base-100/40 p-15 lg:col-span-3">
			{#if data.id === 'emblems'}
				<div>
					<div class="mb-10">
						<div class="badge badge-soft badge-secondary">Base Emblem</div>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Effects</div>
						<div class="divider divider-secondary"></div>
						<ul class="list bg-base-100 rounded-box shadow-md">
							<li class="list-row">
								<div>Adaptive Penetration +14.00</div>
							</li>

							<li class="list-row">
								<div>Adaptive Attack +10.00</div>
							</li>

							<li class="list-row">
								<div>Movement Speed +3.00%</div>
							</li>
						</ul>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Sub Emblem(s)</div>
						<div class="divider divider-secondary"></div>
						<div
							class="my-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-8"
						>
							<div class="tooltip" data-tip="Rupture">
								<a href="/titles/ml/equipments/emblems/rupture">
									<img
										src="https://mlbb.io/_next/image?url=%2Fimages%2Femblem%2Fability%2Frupture.png&w=128&q=75"
										alt="Pizza"
										class="h-full w-full rounded-lg object-cover"
									/>
								</a>
							</div>
							<div class="tooltip" data-tip="Master Assassin">
								<a href="/titles/ml/equipments/emblems/master_assassin">
									<img
										src="https://mlbb.io/_next/image?url=%2Fimages%2Femblem%2Fability%2Fmaster_assassin.png&w=128&q=75"
										alt="Pizza"
										class="h-full w-full rounded-lg object-cover"
									/>
								</a>
							</div>
							<div class="tooltip" data-tip="Killing Spree">
								<a href="/titles/ml/equipments/emblems/killing_spree">
									<img
										src="https://mlbb.io/_next/image?url=%2Fimages%2Femblem%2Fability%2Fkilling_spree.png&w=128&q=75"
										alt="Pizza"
										class="h-full w-full rounded-lg object-cover"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			{:else if data.id === 'equipments'}
				<div>
					<div class="mb-10">
						<div class="badge badge-soft badge-accent">Magic</div>
						<div class="badge badge-soft badge-accent">Magic Penetration</div>
						<div class="badge badge-soft badge-accent">Cost: 1970</div>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Effects</div>
						<div class="divider divider-accent"></div>
						<ul class="list bg-base-100 rounded-box shadow-md">
							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Base Attribute
									</div>
									<div>+65 Magic Power</div>
								</div>
							</li>

							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Unique Attribute
									</div>
									<div>+40% Magic Penetration</div>
								</div>
							</li>

							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Unique Passive
									</div>
									<div>
										Spellbreaker: When attacking an enemy, gains 0.1% extra
										Magic Penetration for each point of the enemy's Magic
										Defense, capped at 20%.
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Sub Equipment(s)</div>
						<div class="divider divider-accent"></div>
						<div
							class="my-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-8"
						>
							<div class="tooltip" data-tip="Magic Wand">
								<a href="/titles/ml/equipments/items/magic-wand">
									<img
										src="https://mlbb.io/_next/image?url=%2Fimages%2Fitems%2FMagic_Wand.png&w=128&q=100"
										alt="Pizza"
										class="h-full w-full rounded-lg object-cover"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div>
					<div class="mb-10">
						<div class="badge badge-soft badge-warning">Cooldown: 35</div>
						<div class="badge badge-soft badge-warning">Damage: 600-1720</div>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Effects</div>
						<div class="divider divider-warning"></div>
						<ul class="list bg-base-100 rounded-box shadow-md">
							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Base Effect
									</div>
									<div>
										Deals 520 (+80 x Hero Level) True Damage to creeps and
										minions.
									</div>
								</div>
							</li>
							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Passive
									</div>
									<div>
										Creep rewards are increased by 60%, and damage taken from
										creeps is reduced by 50%. Minion rewards are reduced by 70%
										for the first 5 minutes.
									</div>
								</div>
							</li>
							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Blessing
									</div>
									<div>
										Reach 5 creep kills, hero kills, or hero kill assists to
										level up this skill (the skill decided by the Blessing of
										the Jungling Footwear purchased). Reaching 15 increases
										Physical Attack and Magic Power by 15.
									</div>
								</div>
							</li>
							<li class="list-row">
								<div>
									<div class="text-xs font-semibold uppercase opacity-60">
										Unique Blessing
									</div>
									<div>
										Dealing 100 True Damage and absorbing 41-90 Movement Speed
										from the target over 3 seconds (scales with level).
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="mb-10">
						<div class="font-mono text-lg font-bold">Parent Equipment(s)</div>
						<div class="divider divider-warning"></div>
						<div
							class="my-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-8"
						>
							<div class="tooltip" data-tip="Retribution">
								<a href="/titles/ml/equipments/spells/Retribution">
									<img
										src="https://static.wikia.nocookie.net/mobile-legends/images/f/fb/Retribution.png"
										alt="Pizza"
										class="h-full w-full rounded-lg object-cover"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
