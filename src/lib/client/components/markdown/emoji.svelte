<script lang="ts">
	import twemoji from "@twemoji/api";
	import { clsx, type ClassValue } from "clsx";
	import emojis from "./emoji.json";

	interface Props {
		emoji: keyof typeof emojis.nameToEmoji;
		class?: ClassValue;
	}

	const { emoji, class: klass }: Props = $props();

	const index = $derived(emojis.nameToEmoji[emoji]);
	const code = $derived(emojis.emojis[index].surrogates);

	const raw = $derived(
		twemoji.parse(code, {
			folder: "svg",
			ext: ".svg",
			// size: `${size}x${size}`,
			className: clsx("emoji", klass)
		})
	);
</script>

<span class="align-middle inline-block">
	{@html raw}
</span>