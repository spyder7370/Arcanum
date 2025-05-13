<script>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Banner from '$lib/components/banner/Banner.svelte';
	import '../app.css';
	import { home } from '$lib/store/home.svelte';
	let { children } = $props();
</script>

<div class="app">
	<Banner
		heroProps={home?.value?.heroProps}
		bannerProps={home?.value?.bannerProps}
	/>
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
</style>
