<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Nav from "$lib/components/layout/nav.svelte";
	import Footer from "$lib/components/layout/footer.svelte";
	import type { LayoutProps } from "./$types";
	import Toast from "$lib/components/layout/toast.svelte";

	const { children, data }: LayoutProps = $props();
</script>

<svelte:head>
	<title>DoggyBootsy</title>
	<link rel="icon" href={favicon} />

	<meta name="build:sha" content={data.buildInfo.commit}>
	<meta name="build:uuid" content={data.buildInfo.uuid}>
</svelte:head>

<Nav />

<div class="relative flex flex-col pt-(--nav-height) grow min-h-svh">
	<div class="flex flex-1 flex-col">
		{@render children()}
	</div>
</div>

<Footer />

<Toast />

<div class="fixed right-0 top-0 bottom-0 w-(--scrollbar-width) bg-theme-700"></div>