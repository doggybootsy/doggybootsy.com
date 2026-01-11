<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Nav from "$lib/components/layout/nav.svelte";
	import Footer from "$lib/components/layout/footer.svelte";
	import { onNavigate } from "$app/navigation";
	import type { LayoutProps } from "./$types";
	import { browser } from "$app/environment";

	if (browser && typeof document.startViewTransition === "function") {
		onNavigate(() => void document.startViewTransition());
	}	
	
	const { children, data }: LayoutProps = $props();
</script>

<svelte:head>
	<title>DoggyBootsy</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav admin={data.viewer.isAdmin} />

<div class="relative flex flex-col pt-(--nav-height) grow min-h-svh">
	<div class="flex flex-1 flex-col">
		{@render children()}
	</div>
</div>

<Footer />

<div class="fixed right-0 top-0 bottom-0 w-(--scrollbar-width) bg-theme-700"></div>