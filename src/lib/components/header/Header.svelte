<script>
	import Logo from '../../images/logo3.png';
</script>

<div class="navbar bg-blur fixed top-0 z-2 h-42 shadow-sm">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<a href="/">
			<img class="h-30" src={Logo} alt="" />
		</a>
	</div>
	<div class="navbar-end mx-10 md:mx-0">
		<a href="/blogs" class="btn btn-outline btn-wide mr-5 border-white">Blog</a>
	</div>
</div>

<style>
	.bg-blur {
		background: transparent;
		backdrop-filter: blur(10px);
	}
</style>
