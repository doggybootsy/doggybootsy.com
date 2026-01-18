<script lang="ts">
	import Button from "$lib/components/button.svelte";
	import Emoji from "$lib/components/markdown/emoji.svelte";
	import emojis from "$lib/components/markdown/emoji-data";
	import type { ComponentProps } from "svelte";
	import Header from "$lib/components/layout/header.svelte";

	let emojiRender = $state({} as Partial<Record<keyof typeof emojis, boolean>>);
	let skintone = $state("yellow") as NonNullable<ComponentProps<typeof Emoji>["skintone"]>;
</script>

<Header title="Twemoji" />

<div class="wrap my-6 *:not-first:mt-2 *:flex *:gap-2 *:flex-wrap">
	<div>
		<Button onclick={() => skintone = "yellow"}>yellow</Button>
		<Button onclick={() => skintone = "light"}>light</Button>
		<Button onclick={() => skintone = "medium-light"}>medium-light</Button>
		<Button onclick={() => skintone = "medium"}>medium</Button>
		<Button onclick={() => skintone = "medium-dark"}>medium-dark</Button>
		<Button onclick={() => skintone = "dark"}>dark</Button>
	</div>
	
	<div>
		<Button
			onclick={() => {
				for (const element of <const>["people", "nature", "food", "activity", "travel", "objects", "flags", "symbols"]) {
					emojiRender[element] = !emojiRender[element];
				}
			}}
		>All</Button>
		{#each Object.keys(emojis) as _type (_type)}
			{@const type = _type as keyof typeof emojis}
			<Button variant={emojiRender[type] ? "danger" : "primary"} onclick={() => emojiRender[type] = !emojiRender[type]}>Render {type}</Button>
		{/each}
	</div>

	{#each Object.keys(emojis) as _type (_type)}
		{@const type = _type as keyof typeof emojis}
		{#if emojiRender[type]}
			<div class="flex flex-row flex-wrap gap-2">
				{#each Object.values(emojis[type]) as emoji (emoji)}
					<Emoji class="size-6" emoji={`${type}.${emoji.name}` as any} {skintone} />
				{/each}
			</div>
		{/if}
	{/each}
</div>