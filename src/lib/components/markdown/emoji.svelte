<script lang="ts" module>
	const skinTones = {
		yellow: undefined,
		light: "1f3fb",
		"medium-light": "1f3fc",
		medium: "1f3fd",
		"medium-dark": "1f3fe",
		dark: "1f3ff"
	} as const;
</script>

<script lang="ts">
	import twemoji from "@twemoji/api";
	import { clsx, type ClassValue } from "clsx";
	import { toast } from "../layout/toast.svelte";
	import type { Attachment } from "svelte/attachments";
		
	import emojis, { type EmojiWithDiversity, type BaseEmoji, type Emoji } from "./emoji-data";

	type EmojiName = {
		[K in keyof typeof emojis]: `${K & string}.${keyof typeof emojis[K] & string}`
	}[keyof typeof emojis]

	interface Props {
		emoji: EmojiName;
		class?: ClassValue;
		skintone?: keyof typeof skinTones;
	}

	function hasDiversity(emoji: any): emoji is EmojiWithDiversity {
		return typeof emoji.diversityChildren === "object";
	}

	const { emoji: emojiName, class: klass, skintone = "yellow" }: Props = $props();

	const [type, name] = $derived(emojiName.split(".") as [type: keyof typeof emojis, name: keyof typeof emojis[keyof typeof emojis]]);

	const baseEmojiInfo = $derived(emojis[type][name]) as Emoji;
	
	const toneKey = $derived(skinTones[skintone]);

	const emojiInfo = $derived((toneKey && hasDiversity(baseEmojiInfo) ? baseEmojiInfo.diversityChildren[toneKey] : baseEmojiInfo) as BaseEmoji);

	const fallback: (isToast: boolean) => Attachment<HTMLElement> = (isToast) => (node) => {
		if (!node) return;

		// either img or text
		const img = node.children[0] as HTMLImageElement;

		if (!img) return;

		const onerror = () => {
			const span = document.createElement("span");
			
			span.className = isToast ? "" : clsx("emoji", klass);
			span.textContent = emojiInfo.surrogates;

			img.replaceWith(span);
		};

		if (img.complete && img.naturalWidth === 0) {
			return onerror();
		}

		img.addEventListener("error", onerror, { once: true });
		return () => img.removeEventListener("error", onerror);
	}
</script>

{#snippet ToastIcon()}
	<div 
		class="size-6 *:w-full"
		{@attach fallback(true)}
	>
		{@html twemoji.parse(emojiInfo.surrogates, {
			folder: "svg",
			ext: ".svg",
			// size: `${size}x${size}`,
			className: "emoji"
		})}
	</div>
{/snippet}

<button 
	class="align-middle inline-block"
	aria-label={emojiInfo.surrogates}
	onclick={() => {
		// toast.info(new Intl.ListFormat(undefined, {style: "short"}).format(emoji.names.map((name: string) => name.replace(/(^|\s|_)([a-z])/g, (match, before, letter) => (before?.replace("_", " ") || "") + letter.toUpperCase()))), { icon: ToastIcon })
		toast.info(baseEmojiInfo.name.replace(/(^|\s|_)([a-z])/g, (match, before, letter) => (before?.replace("_", " ") || "") + letter.toUpperCase()), { icon: ToastIcon });
	}}
	{@attach fallback(false)}
>
	{@html twemoji.parse(emojiInfo.surrogates, {
		folder: "svg",
		ext: ".svg",
		// size: `${size}x${size}`,
		className: clsx("emoji", klass)
	})}
</button>