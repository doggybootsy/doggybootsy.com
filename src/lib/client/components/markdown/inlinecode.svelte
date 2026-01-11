<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	interface Props {
		class?: ClassValue;
		children: string | Snippet;
	}

	const { class: klass, children }: Props = $props();
</script>

<code class={["bg-theme-500/80 px-2 py-1 text-sm rounded-sm", klass]}>
	{#if typeof children === "string"}
		{children}
	{:else}
		{@render children()}
	{/if}
</code>