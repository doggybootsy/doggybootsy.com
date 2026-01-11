<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		title: string | Snippet;
		description?: string | Snippet;
		side?: Snippet;
		outer?: Snippet;
		inner?: Snippet;
	}

	const props: Props = $props();
</script>

<header class="relative flex items-center gap-24 overflow-hidden border-theme-400 bg-theme-900 border-b pt-(--nav-height) -mt-(--nav-height)">
	{@render props.outer?.()}

	<div class="wrap relative flex items-center justify-around flex-col sm:justify-between sm:flex-row h-44">
		{@render props.inner?.()}

		<div class="text-center sm:text-left">
			<h2 class="font-manrope sm:text-4xl text-2xl font-bold text-slate-100">
				{#if typeof props.title === "string"}
					{props.title}
				{:else}
					{@render props.title()}
				{/if}
			</h2>

			{#if props.description}
				<p class="mt-4 text-sm text-slate-500">
					{#if typeof props.description === "string"}
						{props.description}
					{:else}
						{@render props.description()}
					{/if}
				</p>
			{/if}
		</div>

		{#if props.side}
			<div class="flex items-center gap-1">
				{@render props.side()}
			</div>
		{/if}
	</div>
</header>
