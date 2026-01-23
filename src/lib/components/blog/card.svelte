<script lang="ts">
	import type { BlogMeta } from "$lib/server/blog-meta";
	import Share from "./share.svelte";
	
	interface Props {
		blog: BlogMeta;
	}

	const { blog }: Props = $props();
</script>

<div class="hover:-translate-y-1 transition-transform duration-75 grid grid-rows-2 relative overflow-hidden bg-theme-800 border border-theme-400 py-2 px-4 rounded-md isolate min-h-60">			
	<div class="mb-auto pointer-events-none">
		<div class="float-end">
			<Share {blog} isCard />
		</div>
		<h3 class="font-bold sm:text-2xl text-lg pointer-events-auto w-fit">{blog.title}</h3>
		<div class="text-sm text-slate-300 pointer-events-auto w-fit">{new Date(blog.created_at).toLocaleString()}</div>
	</div>

	<div class="mt-auto py-2 pointer-events-none">
		<div class="w-fit mb-2 flex gap-2">
			{#each blog.tags as tag}
				<div class="px-2 py-1 bg-theme-300/50 rounded-md text-sm pointer-events-auto">{tag}</div>
			{/each}
		</div>
		<div class="text-slate-300 w-fit pointer-events-auto">{blog.description}</div>
	</div>

	<img class="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover -z-1 opacity-30" src={blog.background_image} alt="">

	<a href={`/blog/${blog.id}`} class="absolute left-0 top-0 w-full h-full -z-1" aria-label="Open Blog"></a>
</div>	
