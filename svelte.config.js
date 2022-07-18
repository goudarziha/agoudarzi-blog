import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte',
				daily: 'src/routes/daily/_post.svelte'
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],
	extensions: ['.svelte', '.md']
};

export default config;
