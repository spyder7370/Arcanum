<script>
	let { data } = $props();
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';
	import CharacterSidebar from '$lib/components/sidebar/CharacterSidebar.svelte';
	let activeTabState = $state('introduction');

	onMount(() => {
		home.value = {
			bannerProps: {
				images: data.images,
				bannerPosition: 'top',
			},
			heroProps: {
				title: 'Ling',
				breadcrumbs: [
					{ text: 'Home', url: '/' },
					{ text: 'Mobile Legends', url: '/titles/ml' },
					{ text: 'Characters', url: '/titles/ml/characters' },
				],
				heroChildren: heroFooter,
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});

	const activeTab = {
		get value() {
			return activeTabState;
		},
		set value(_value) {
			activeTabState = _value;
		},
	};
</script>

<svelte:head>
	<title>Mobile Legends | Ling</title>
	<meta name="description" content="Arcanum" />
</svelte:head>

{#snippet heroFooter()}
	<div class="h-20"></div>
{/snippet}

<CharacterSidebar {activeTab}>
	{#if activeTab.value === 'introduction'}
		<div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Introduction</div>
				<div class="divider divider-success"></div>
				<div>
					Ling is a highly skilled assassin recognized for his exceptional
					mobility and wall-climbing capabilities, which make him a powerful
					presence in the game. However, effectively using Ling demands a strong
					grasp of his abilities and gameplay mechanics.
					<br /><br />
					Ling specializes in swiftly navigating walls and bypassing obstacles, making
					him challenging to pin down. His skillset relies on precise timing and
					positioning, enabling players to execute rapid strikes and agile maneuvers
					to gain the upper hand in battles.
				</div>
			</div>
			<div class="mb-10">
				<div
					class="bg-base-100 grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
				>
					<div class="flex items-center justify-center md:col-span-1">
						<img
							src="https://static.wikia.nocookie.net/mobile-legends/images/3/3f/Assassin_Icon.png"
							alt="Album"
							class="size-15 object-cover"
						/>
					</div>
					<div class="flex flex-col justify-center md:col-span-6">
						<div class="mb-2 text-sm font-medium text-gray-500">Trait</div>
						Assassins are agile heroes skilled at picking off vulnerable targets
						with precision and speed. They rely on mobility, timing, and positioning
						to strike at the perfect moment.
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Statistics</div>
				<div class="divider divider-success"></div>
				<div
					class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				>
					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">HP</div>
						<div class="mt-2 text-xl font-semibold text-white">2528 - 4418</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">HP Regen</div>
						<div class="mt-2 text-xl font-semibold text-white">7.8 - 14.0</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Energy</div>
						<div class="mt-2 text-xl font-semibold text-white">100</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Energy Regen</div>
						<div class="mt-2 text-xl font-semibold text-white">4</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Physical Attack</div>
						<div class="mt-2 text-xl font-semibold text-white">125 - 240</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">
							Physical Defense
						</div>
						<div class="mt-2 text-xl font-semibold text-white">18 - 81</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Magic Defense</div>
						<div class="mt-2 text-xl font-semibold text-white">15 - 50</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Attack Speed</div>
						<div class="mt-2 text-xl font-semibold text-white">1.01 - 1.26</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">
							Attack Speed Ratio
						</div>
						<div class="mt-2 text-xl font-semibold text-white">40%</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Critical Damage</div>
						<div class="mt-2 text-xl font-semibold text-white">150%</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Movement Speed</div>
						<div class="mt-2 text-xl font-semibold text-white">260</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">
							Basic Attack Range
						</div>
						<div class="mt-2 text-xl font-semibold text-white">1.8</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Pros & Cons</div>
				<div class="divider divider-success"></div>
				<div
					class="stats stats-vertical lg:stats-horizontal grid w-full grid-cols-1 sm:grid-cols-2"
				>
					<div class="stat block">
						<div class="text-xl font-bold text-white">Pros</div>
						<div class="my-4">
							<div class="my-3">
								- Insanely mobile thanks to 1st Skill 1st Skill. His ability to
								leap on walls gives him Fanny's hypermobility without the
								difficulty of the cables.
							</div>
							<div class="my-3">
								- Has a Ultimate Skill Ultimate Skill that allow ling to be
								invincible by any Damage (Untargetable)
							</div>
							<div class="my-3">
								- His 2nd Skill can give him some Health regeneration (Physical
								Lifesteal)
							</div>
							<div class="my-3">
								- Can easily split push and escape thanks to his 1st Skill
							</div>
							<div class="my-3">- 1st Skill High late game Damage</div>
							<div class="my-3">- Early-late game Advantage</div>
							<div class="my-3">
								- Can dive to the backline using 1st Skill or Ultimate Skill
							</div>
							<div class="my-3">- Ultimate can remove Suppression</div>
						</div>
					</div>

					<div class="stat block">
						<div class="text-xl font-bold text-white">Cons</div>
						<div class="my-4">
							<div class="my-3">
								- Relatively high energy usage without Purple Buff
							</div>
							<div class="my-3">- Hard to use</div>
							<div class="my-3">- Weak against Crowd Control</div>
							<div class="my-3">
								- High chances of getting a nerf, and low chances of getting a
								buff
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else if activeTab.value === 'skills'}
		<div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Passive</div>
				<div class="divider divider-success"></div>
				<div class="bg-base-100 collapse rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/6/68/Cloud_Walker.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								Cloud Walker
							</div>
							Ling's superb Lightness Skill helps him leap among walls. When resting
							on the wall, He gains 4 Lightness Points per second when he's on a
							walland 5 extra Lightness Points each time he deals damage. Ling gains
							1.6 times Crit Chance from all sources but only has 150% Critical Damage.
						</div>
					</div>
					<div class="collapse-content">
						<div class="divider m-0 px-6"></div>
						<div class="p-6">
							Ling's passive plays a key role in managing his energy and
							boosting critical strike potential. His Lightness Points
							regenerate more quickly while on walls or attacking, making
							crit-focused items especially effective for maximizing his damage.
						</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Skill 1</div>
				<div class="divider divider-success"></div>
				<div class="bg-base-100 collapse rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/1/14/Finch_Poise.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								Finch Poise
							</div>
							Passive: Ling's Critical Chance is permanently increased by 2.5%-12.5%.
							Active: Ling casts his Lightness Skill, leaping onto the designated
							wall, entering half-stealth state, restoring Lightness Points more
							quickly and gaining 30% Movement Speed. If Ling receives damage, he
							will leave the half-stealth state. If he is controlled, he will fall
							onto the ground and be slowed by 30% for 2 seconds. When using this
							skill to jump from a wall to another, it will reset the Cooldown and
							refresh the half-stealth state.
						</div>
					</div>
					<div class="collapse-content">
						<div class="divider m-0 px-6"></div>
						<div class="p-6">
							Ling's first skill serves as his main mobility option, enabling
							him to leap between walls and stay difficult to catch. The
							semi-stealth effect offers a strategic edge by making him less
							detectable to opponents.
						</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Skill 2</div>
				<div class="divider divider-success"></div>
				<div class="bg-base-100 collapse rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/a/ae/Defiant_Sword.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								Defiant Sword (Ground)
							</div>
							Ling charges in a designated direction and stabs the nearby enemies
							at his destination, dealing 300-400 (+40% Total Physical Attack) Physical
							Damage.
						</div>
					</div>
					<div class="collapse-content">
						<div class="divider m-0 px-6"></div>
						<div class="p-6">
							Defiant Sword is Ling's core ability for both damage and movement,
							thanks to its short cooldown. Its versatility on the ground and
							while on walls makes it valuable for initiating fights or
							retreating effectively.
						</div>
					</div>
				</div>
				<div class="bg-base-100 collapse mt-2 rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/b/bb/Defiant_Sword_-_Finch_Poise.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								Defiant Sword (Wall Mounted)
							</div>
							If Ling casts this skill when he is on the wall, he'll dash to the
							target location on the ground, dealing 300-400 (+40% Total Physical
							Attack) Physical Damage to enemies within a small area and slowing
							them down by 30% for 1.5 seconds. If this attack critically strikes,
							the enemies will be slowed by extra 45% for 0.75 seconds.
						</div>
					</div>
					<div class="collapse-content">
						<div class="divider m-0 px-6"></div>
						<div class="p-6">
							Its dual functionality (ground and wall) offers flexibility in
							combat scenarios.
						</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Ultimate</div>
				<div class="divider divider-success"></div>
				<div class="bg-base-100 collapse rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/3/30/Tempest_of_Blades.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								Tempest of Blades
							</div>
							Ling leaps into the air, becoming invincible and gaining 10% extra
							Movement Speed for 1.5 seconds. He can move freely when in the air.
							He then lands on the ground, dealing 250-450 (+100% Total Physical
							Attack) Physical Damage to enemies in the area, knocking those in the
							center airborne for 1 second, and creating a Sword Field for 8 seconds.
							Four Tempest of Blades will also appear on the edge of the Sword Field.
							Ling can touch them to reduce the cooldown of Finch Poise by 4 seconds,
							reset the cooldown of Defiant Sword, and gain 25 Lightness points.
						</div>
					</div>
					<div class="collapse-content">
						<div class="divider m-0 px-6"></div>
						<div class="p-6">
							Ling's ultimate can significantly impact team fights by granting
							invulnerability, crowd control, and resetting his mobility
							abilities. Proper timing and positioning of this skill are crucial
							for executing powerful combos and quickly taking down enemies.
						</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Buff</div>
				<div class="divider divider-success"></div>
				<div class="bg-base-100 collapse rounded-2xl">
					<input type="checkbox" />
					<div
						class="collapse-title grid grid-cols-1 gap-5 rounded-2xl p-6 md:grid-cols-7"
					>
						<div class="flex items-center justify-center md:col-span-1">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/7/76/The_Oriental_Fighters_BUFF.png"
								alt="Album"
								class="size-15 object-cover"
							/>
						</div>
						<div class="flex flex-col justify-center md:col-span-6">
							<div class="mb-2 text-sm font-medium text-gray-500">
								The Oriental Fighters
							</div>
							[Ling] will gain [1] movement speed boost [for each allied] Oriental
							[Fighter] in the battlefield. (Original text: The Oriental Fighters:
							A team will gain higher movement speed boost with more Oriental Fighters
							in the battlefield.)
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else if activeTab.value === 'guide'}
		<div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Match Stats</div>
				<div class="divider divider-success"></div>
				<div
					class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				>
					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Win Rate</div>
						<div class="mt-2 text-xl font-semibold text-white">49.92%</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Pick Rate</div>
						<div class="mt-2 text-xl font-semibold text-white">0.87%</div>
					</div>

					<!-- Stat Item -->
					<div class="bg-base-100 rounded-lg p-6 shadow">
						<div class="text-sm font-medium text-gray-500">Ban Rate</div>
						<div class="mt-2 text-xl font-semibold text-white">2.52%</div>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Equipments</div>
				<div class="divider divider-success"></div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-7">
					<div class="tooltip" data-tip="Tough Boots">
						<a href="/titles/ml/equipments/items/Tough_Boots">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Tough_Boots.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Berserkers Fury">
						<a href="/titles/ml/equipments/items/Berserkers_Fury">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Berserkers_Fury.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Endless Battle">
						<a href="/titles/ml/equipments/items/Endless_Battle">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Endless_Battle.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Haas Claws">
						<a href="/titles/ml/equipments/items/Haas_Claws">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/07/Haas27s_Claws-optimized.webp"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Blade of Despair">
						<a href="/titles/ml/equipments/items/Blade_of_Despair">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Blade_of_Despair.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Rose Gold Meteor">
						<a href="/titles/ml/equipments/items/Rose_Gold_Meteor">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Rose_Gold_Meteor.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Emblems</div>
				<div class="divider divider-success"></div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-7">
					<div class="tooltip" data-tip="Assassin Emblem">
						<a href="/titles/ml/equipments/emblems/assassin_emblem">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/08/ass_emblem-optimized.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Fatal">
						<a href="/titles/ml/equipments/emblems/fatal">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/08/fatal-optimized.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Seasoned Hunter">
						<a href="/titles/ml/equipments/emblems/seasoned-hunter">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/08/seasoned-hunter-optimized.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Quantum Charge">
						<a href="/titles/ml/equipments/emblems/quantum-charge">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/08/quantum-charge-optimized.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Spells</div>
				<div class="divider divider-success"></div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-7">
					<div class="tooltip" data-tip="Ice Retribution">
						<a href="/titles/ml/equipments/spells/Ice_Retribution">
							<img
								src="https://promlbb.com/wp-content/uploads/2023/07/Ice_Retribution-optimized.webp"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Skill Combos</div>
				<div class="divider divider-success"></div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-9">
					<div class="tooltip" data-tip="Skill 1">
						<a>
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/1/14/Finch_Poise.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="">
						<a class="flex h-full w-full items-center justify-center">
							<img
								src="https://akmweb.youngjoygame.com/web/gms/image/8a0eb6bb6ee7f4938a66d96bbea5a49d.svg"
								alt="Pizza"
								class="h-5 w-5 object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Skill 2">
						<a>
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/b/bb/Defiant_Sword_-_Finch_Poise.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="">
						<a class="flex h-full w-full items-center justify-center">
							<img
								src="https://akmweb.youngjoygame.com/web/gms/image/8a0eb6bb6ee7f4938a66d96bbea5a49d.svg"
								alt="Pizza"
								class="h-5 w-5 object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Basic">
						<a>
							<img
								src="https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_92/100_f98d2e98eaebfb31c6c5101cf1c3201a.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="">
						<a class="flex h-full w-full items-center justify-center">
							<img
								src="https://akmweb.youngjoygame.com/web/gms/image/8a0eb6bb6ee7f4938a66d96bbea5a49d.svg"
								alt="Pizza"
								class="h-5 w-5 object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Skill 3">
						<a>
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/3/30/Tempest_of_Blades.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="">
						<a class="flex h-full w-full items-center justify-center">
							<img
								src="https://akmweb.youngjoygame.com/web/gms/image/8a0eb6bb6ee7f4938a66d96bbea5a49d.svg"
								alt="Pizza"
								class="h-5 w-5 object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Skill 2">
						<a>
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/a/ae/Defiant_Sword.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Tips</div>
				<div class="divider divider-success"></div>
				<ul class="list bg-base-100 rounded-box shadow-md">
					<li class="list-row">
						<div>
							When playing Ling, maintain strong map awareness by keeping an eye
							on the minimap. Moreover, efficient energy management is essential
							since the hero’s abilities consume energy rather than mana.
						</div>
					</li>

					<li class="list-row">
						<div>
							He excels at securing objectives due to his high burst damage, so
							use his Retribution spell to secure buffs, Turtle, and Lord.
						</div>
					</li>

					<li class="list-row">
						<div>
							Lastly, timing your engagements is vital. You can quickly take
							down key targets, but you’re vulnerable to crowd control, so aim
							to strike when enemy abilities are on cooldown.
						</div>
					</li>
				</ul>
			</div>
		</div>
	{:else if activeTab.value === 'synergy'}
		<div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Teammates</div>
				<div class="divider divider-success"></div>
				<div>
					Ling works best with support heroes with CC abilities, that make Ling
					more flexible in different situations.
				</div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
					<div class="tooltip" data-tip="Angela">
						<a href="/titles/ml/characters/angela">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/1/13/Hero551-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Khufra">
						<a href="/titles/ml/characters/khufra">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/c/cd/Hero781-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Tigreal">
						<a href="/titles/ml/characters/tigreal">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/f/f2/Hero061-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Floryn">
						<a href="/titles/ml/characters/floryn">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/2/20/Hero1121-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Counters</div>
				<div class="divider divider-success"></div>
				<div>
					Ling's excellent pursuit abilities and high burst damage make him
					strong against squishy heroes.
				</div>
				<div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
					<div class="tooltip" data-tip="Layla">
						<a href="/titles/ml/characters/layla">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/0/02/Hero181-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Hanabi">
						<a href="/titles/ml/characters/hanabi">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/f/ff/Hero601-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Granger">
						<a href="/titles/ml/characters/granger">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/7/7c/Hero791-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Miya">
						<a href="/titles/ml/characters/miya">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/8/8c/Hero011-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Countered By</div>
				<div class="divider divider-success"></div>
				<div>
					Ling is countered by heroes with strong single-target CC and high
					burst damage, as they can easily control Ling and burst him down.
				</div>
				<div class="my-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
					<div class="tooltip" data-tip="Khufra">
						<a href="/titles/ml/characters/khufra">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/c/cd/Hero781-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Eudora">
						<a href="/titles/ml/characters/eudora">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/2/2a/Hero151-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Phoveus">
						<a href="/titles/ml/characters/phoveus">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/8/88/Hero1061-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Chou">
						<a href="/titles/ml/characters/chou">
							<img
								src="https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Hero261-icon.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
				<div>
					Ling is countered by items with strong physical defense or could
					inflict invulnerability.
				</div>
				<div class="my-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
					<div class="tooltip" data-tip="Immortality">
						<a href="/titles/ml/equipments/items/immortality">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Immortality.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Winter Crown">
						<a href="/titles/ml/equipments/items/winter-crown">
							<img
								src="https://mlcounter.com/wp-content/uploads/2024/06/winter-crown.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Wind of Nature">
						<a href="/titles/ml/equipments/items/wind-of-nature">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Wind_of_Nature.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
					<div class="tooltip" data-tip="Blade Armor">
						<a href="/titles/ml/equipments/items/blade-armor">
							<img
								src="https://mlcounter.com/wp-content/uploads/2022/04/Blade_Armor.png"
								alt="Pizza"
								class="h-full w-full rounded-lg object-cover"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	{:else if activeTab.value === 'gallery'}
		<div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Splash Arts</div>
				<div class="divider divider-success"></div>
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
					{#each data.images as image, i}
						<label class="cursor-pointer" for="my_modal_{i}">
							<img
								id="item{i + 1}"
								src={image}
								alt="Pizza"
								class="hover:border-success h-full w-full rounded-lg border-2 border-transparent object-cover transition-all duration-700 hover:opacity-50"
							/>
							<input type="checkbox" id="my_modal_{i}" class="modal-toggle" />
							<div class="modal" role="dialog">
								<div class="bg-base-200/70 modal-box max-w-5xl p-10">
									<div
										class="mb-7 text-center font-mono text-lg font-bold text-white"
									>
										{data.imageNames[i]}
									</div>
									<img
										id="item{i + 1}"
										src={image}
										alt="Pizza"
										class="mx-auto h-full w-full object-cover"
									/>
								</div>
							</div>
						</label>
					{/each}
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Portraits</div>
				<div class="divider divider-success"></div>
				<div class="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
					{#each data.portraits as image, i}
						<label class="cursor-pointer" for="my_modal2_{i}">
							<img
								id="item{i + 1}"
								src={image}
								alt="Pizza"
								class="hover:border-success h-full w-full rounded-lg border-2 border-transparent object-cover transition-all duration-700 hover:opacity-50"
							/>
							<input type="checkbox" id="my_modal2_{i}" class="modal-toggle" />
							<div class="modal" role="dialog">
								<div class="bg-base-200/70 modal-box max-w-5xl p-10">
									<div
										class="mb-7 text-center font-mono text-lg font-bold text-white"
									>
										{data.imageNames[i]}
									</div>
									<img
										id="item{i + 1}"
										src={image}
										alt="Pizza"
										class="mx-auto h-full w-50 object-cover"
									/>
								</div>
							</div>
						</label>
					{/each}
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Avatars</div>
				<div class="divider divider-success"></div>
				<div class="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-6">
					{#each data.avatars as image, i}
						<label class="cursor-pointer" for="my_modal3_{i}">
							<img
								id="item{i + 1}"
								src={image}
								alt="Pizza"
								class="hover:border-success h-full w-full rounded-lg border-2 border-transparent object-cover transition-all duration-700 hover:opacity-50"
							/>
							<input type="checkbox" id="my_modal3_{i}" class="modal-toggle" />
							<div class="modal" role="dialog">
								<div class="bg-base-200/70 modal-box max-w-5xl p-10">
									<div
										class="mb-7 text-center font-mono text-lg font-bold text-white"
									>
										{data.imageNames[i]}
									</div>
									<img
										id="item{i + 1}"
										src={image}
										alt="Pizza"
										class="mx-auto h-full w-30 object-cover"
									/>
								</div>
							</div>
						</label>
					{/each}
				</div>
			</div>
			<div class="mb-10">
				<div class="font-mono text-lg font-bold">Emotes</div>
				<div class="divider divider-success"></div>
				<div class="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-6">
					{#each data.emotes as image, i}
						<label class="cursor-pointer" for="my_modal4_{i}">
							<img
								id="item{i + 1}"
								src={image}
								alt="Pizza"
								class="hover:border-success h-full w-full rounded-lg border-2 border-transparent object-cover transition-all duration-700 hover:opacity-50"
							/>
							<input type="checkbox" id="my_modal4_{i}" class="modal-toggle" />
							<div class="modal" role="dialog">
								<div class="bg-base-200/70 modal-box max-w-5xl p-10">
									<div
										class="mb-7 text-center font-mono text-lg font-bold text-white"
									>
										{data.imageNames[i]}
									</div>
									<img
										id="item{i + 1}"
										src={image}
										alt="Pizza"
										class="mx-auto h-full w-30 object-cover"
									/>
								</div>
							</div>
						</label>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</CharacterSidebar>
