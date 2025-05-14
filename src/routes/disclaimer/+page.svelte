<script>
	import Container from '$lib/components/container/Container.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { home } from '$lib/store/home.svelte';

	onMount(() => {
		home.value = {
			bannerProps: {
				image:
					'https://i.pinimg.com/1200x/60/c9/3b/60c93b73ca55ce726d29fe336fa133d7.jpg',
			},
			heroProps: {
				title: 'Disclaimer',
			},
		};
	});
	onDestroy(() => {
		home.clear();
	});
</script>

<svelte:head>
	<title>Disclaimer</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container>
	<div class="flex flex-col gap-6">
		<p>
			Arcanum is an independent, unofficial project that is neither affiliated
			with nor endorsed by the creators and distributors of any game. All
			in-game assets featured on this website remain the intellectual property
			of the respective creators.
		</p>
		<p>
			This website may include copyrighted material that has not been
			specifically authorized by the respective copyright holders. Such
			materials are presented without commercial intent and are used solely for
			research and educational purposes. Only limited portions of the original
			works are utilized, in ways that do not allow for easy reproduction or
			replication of the original content.
		</p>
		<p>
			In accordance with Section 107 of the Copyright Act of 1976, the use of
			these materials is considered "fair use" for purposes including, but not
			limited to, criticism, commentary, news reporting, teaching, scholarship,
			education, and research. "Fair use" permits certain uses of copyrighted
			content that might otherwise constitute infringement.
		</p>
		<p>
			Should you wish to use any copyrighted content from this site for purposes
			beyond the scope of fair use, you are required to obtain explicit
			permission from the respective copyright owner
		</p>
	</div>
</Container>
