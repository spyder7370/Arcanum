<script>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Banner from '$lib/components/banner/Banner.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { home } from '$lib/store/home.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<div class="app">
	<Header />
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
