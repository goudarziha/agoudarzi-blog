<script context="module" lang="ts">
	export const load = async ({ fetch }: any) => {
		const projects = await fetch('/api/projects.json');
		const allProjects = await projects.json();

		return {
			props: {
				projects: allProjects
			}
		};
	};
</script>

<script lang="ts">
	interface IProject {
		path: string;
		meta: any;
	}
	export let projects: IProject[];
</script>

<h2>Projects</h2>

<ul>
	{#each projects.reverse() as project, index}
		<li>
			<p>index-{index}: <a href={project.path} sveltekit:prefetch>{project.meta.title}</a></p>
		</li>
	{/each}
</ul>
