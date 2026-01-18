<script lang="ts">
	import Anchor from "$lib/components/anchor.svelte";
	import Header from "$lib/components/layout/header.svelte";
	import type { LayoutProps } from "./$types";

	const props: LayoutProps = $props();
</script>


<div class="grow grid grid-cols-[--spacing(60)_1fr]">
	<div class="h-full">
		<!-- <Header title="" /> -->
		<div class="bg-theme-500 h-full p-2 flex flex-col">
			<Anchor href="/playground">Playground</Anchor>
			<Anchor href="/playground/twemoji">Twemoji</Anchor>
			<Anchor href="/playground/toasts">Toasts</Anchor>
		</div>
	</div>

	<div>
		{@render props.children()}
	</div>
</div>