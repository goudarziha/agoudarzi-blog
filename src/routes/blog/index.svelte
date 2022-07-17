<script context="module" lang="ts">
	export const load = async ({ fetch }: any) => {
		const posts = await fetch('/api/posts.json');
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

<h1>Blog</h1>

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
