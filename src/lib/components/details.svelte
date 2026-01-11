<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		summary: string | Snippet;
		children?: Snippet;
		group?: string;
	}

	const { summary, children, group }: Props = $props();
</script>

<details class="bg-theme-500 rounded-md *:first:cursor-pointer *:not-first:mt-2 group/detail" name={group}>
	<summary class="list-none relative px-6 py-2 transition-colors group-open/detail:bg-theme-600 rounded-md">
		<div class="absolute left-2 top-2 p-1 group-open/detail:rotate-90 transition-transform">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
				<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
			</svg>
		</div>
		<div class="select-none">
			{#if typeof summary === "string"}
				{summary}
			{:else}
				{@render summary()}
			{/if}
		</div>
	</summary>
	
	<div class="p-2 pt-0">
		{@render children?.()}
	</div>
</details>