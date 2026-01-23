<script lang="ts">
	import type { IconSnippetProps } from "../types.ts";

	const {fill = "currentColor", class: klass = "size-6", ...props}: IconSnippetProps = $props();
</script>

<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {fill} class={klass}>
	<path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"/>
</svg>