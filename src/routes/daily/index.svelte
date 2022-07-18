<script context="module" lang="ts">
	export const load = async ({ fetch }: any) => {
		const posts = await fetch('/api/daily.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script lang="ts">
	export let posts: any;
</script>

<h2>daily blog</h2>

<ul>
	{#each posts as post}
		<li>
			<h2>
				<a href={post.path} sveltekit:prefetch>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
