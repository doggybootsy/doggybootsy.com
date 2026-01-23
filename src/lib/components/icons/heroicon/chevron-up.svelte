<script lang="ts">
	import type { IconSnippetProps } from "../types.ts";

	const {fill = "currentColor", class: klass = "size-6", ...props}: IconSnippetProps = $props();
</script>

<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {fill} class={klass}>
	<path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd"/>
</svg>