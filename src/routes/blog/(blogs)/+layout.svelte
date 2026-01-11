<script lang="ts">
	import { page } from "$app/state";
	import Share from "$lib/client/components/blog/share.svelte";
	import Header from "$lib/client/components/layout/header.svelte";
	import type { LayoutProps } from "./$types";

	const { data, children }: LayoutProps = $props();
</script>

<svelte:head>
	<meta name="title" content={data.blog.title} />
	<meta name="description" content={data.blog.description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={data.blog.title} />
	<meta property="og:description" content={data.blog.description} />
	{#if data.blog.background_image} 
		<meta property="og:image" content={data.blog.background_image} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={page.url.href} />
	<meta name="twitter:title" content={data.blog.title} />
	<meta name="twitter:description" content={data.blog.description} />
	{#if data.blog.background_image} 
		<meta property="twitter:image" content={data.blog.background_image} />
	{/if}
</svelte:head>

<Header
	title={data.blog.title}
	description={`${new Date(data.blog.created_at).toLocaleString()} — ${data.blog.description}`}
>
	{#snippet outer()}
		<img class="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover opacity-20" src={data.blog.background_image} alt="">
	{/snippet}
	{#snippet inner()}
		<!-- <div class="absolute left-16 sm:left-4 bottom-4 opacity-75 text-sm">
			Published {new Intl.DateTimeFormat(undefined, {dateStyle: "long"}).format(Date.now())}
		</div> -->
	{/snippet}

	{#snippet side()}
		<Share blog={data.blog} />
	{/snippet}
</Header>

<div class="wrap py-6">
	{@render children?.()}
</div>