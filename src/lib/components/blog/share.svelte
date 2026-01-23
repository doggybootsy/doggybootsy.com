<script lang="ts">
	import { DropdownMenu } from "bits-ui";
	import { browser } from "$app/environment";
	import { page } from "$app/state";
	import spacing from "$lib/client/spacing";
	import { innerWidth } from "svelte/reactivity/window";
	import type { BlogMeta } from "$lib/server/blog-meta";
	import { copy } from "$lib/utils/clipboard";
	import { ClipboardDocument, Share, X } from "$lib/components/icons";

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
		class="p-3 hover:bg-white/5 hover:text-white data-[state=open]:bg-white/5 data-[state=open]:text-white cursor-pointer pointer-events-auto rounded-md"
		aria-label="Action Menu"
	>
		<Share />
	</DropdownMenu.Trigger>

	<DropdownMenu.Portal>
		<DropdownMenu.Content side={bottom ? "bottom" : "left"} align={isCard || !bottom ? "start" : "center"} sticky="partial" sideOffset={offset} class="z-10 bg-theme-600 p-2 min-w-50 border border-theme-400 rounded-md">
			<DropdownMenu.Item 
				textValue="Copy Link"
				class="p-2 hover:bg-theme-700 hover:text-white rounded-md cursor-pointer flex items-center gap-2"
				onclick={() => copy(url)}
			>
				<ClipboardDocument class="size-6 p-0.5" />

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
				<X class="size-6 p-0.5" />

				X / Twitter
			</DropdownMenu.Item>

			{#if browser && navigator.canShare?.({ url })}
				<DropdownMenu.Item 
					textValue="Native Share"
					class="p-2 hover:bg-theme-700 hover:text-white rounded-md cursor-pointer flex items-center gap-2"
					onclick={() => navigator.share({ url })}
				>
					<Share class="size-6 p-0.5" />

					Native Share
				</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>