<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header class="container">
	<a href="/">Amir Goudarzi</a>
	<nav>
		<ul>
			<li>
				<DarkModeToggle />
			</li>
			<li>
				<a href="/guides">Guides</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<!-- Header.svelte -->
<style>
	header {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
