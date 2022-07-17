<script lang="ts">
	export let title;
	export let date;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
