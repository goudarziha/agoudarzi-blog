<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';
	import { fade } from 'svelte/transition';
	import SvelteSeo from 'svelte-seo';

	export let currentRoute;
</script>

<SvelteSeo title="Amir Goudarzi" description="Amir Goudarzi musings" />

<Header />
{#key currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<Footer />
