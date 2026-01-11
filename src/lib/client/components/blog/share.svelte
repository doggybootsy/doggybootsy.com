<script lang="ts">
	import { DropdownMenu } from "bits-ui";
	import { browser } from "$app/environment";
	import { page } from "$app/state";
	import spacing from "$lib/client/spacing.svelte";
	import { innerWidth } from "svelte/reactivity/window";
	import type { BlogMeta } from "$lib/server/blog-meta";

	interface Props {
		blog: BlogMeta;
		isCard?: boolean;
	}

	const { blog, isCard }: Props = $props();

	const url = $derived(`${page.url.origin}/blog/${blog.id}`);

	const offset = $derived($spacing.calc(2));

	const sm = $derived($spacing.calc(160));	
	
	const bottom = $derived(innerWidth.current! < sm);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="not-last:mr-2 p-3 hover:bg-white/5 hover:text-white cursor-pointer pointer-events-auto"
		aria-label="Action Menu"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
		</svg>
	</DropdownMenu.Trigger>

	<DropdownMenu.Portal>
		<DropdownMenu.Content side={bottom ? "bottom" : "left"} align={isCard || !bottom ? "start" : "center"} sticky="partial" sideOffset={offset} class="z-10 bg-theme-600 p-2 min-w-50 border border-theme-400 rounded-md">
			<DropdownMenu.Item 
				textValue="Copy Link"
				class="p-2 hover:bg-theme-700 hover:text-white rounded-md cursor-pointer flex items-center gap-2"
				onclick={() => navigator.clipboard.writeText(url)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 p-0.5">
					<path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z" clip-rule="evenodd" />
					<path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
					<path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
				</svg>

				Copy Link
			</DropdownMenu.Item>
			
			<DropdownMenu.Item 
				textValue="Copy Link"
				class="p-2 hover:bg-theme-700 hover:text-white rounded-md cursor-pointer flex items-center gap-2"
				onclick={() =>{
					const x = new URL("https://x.com/intent/post");

					x.searchParams.set("url", url);
					x.searchParams.set("text", blog.title);

					window.open(x, "_blank", "noopener,noreferrer");
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 p-0.5">
					<path fill-rule="evenodd" d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z" clip-rule="evenodd" />
				</svg>

				X / Twitter
			</DropdownMenu.Item>

			{#if browser && navigator.canShare?.({ url })}
				<DropdownMenu.Item 
					textValue="Native Share"
					class="p-2 hover:bg-theme-700 hover:text-white rounded-md cursor-pointer flex items-center gap-2"
					onclick={() => navigator.share({ url })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 p-0.5">
						<path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
					</svg>

					Native Share
				</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>