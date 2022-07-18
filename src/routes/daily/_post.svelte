<script lang="ts">
	import { goto } from '$app/navigation';

	export let title;
	export let date;

	export const handleClick = () => {
		console.log('hi');
		goto('/daily');
	};
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<button on:click={() => handleClick()}>>>></button>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
