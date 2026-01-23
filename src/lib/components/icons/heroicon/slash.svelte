<script lang="ts">
	import type { IconSnippetProps } from "../types.ts";

	const {fill = "currentColor", class: klass = "size-6", ...props}: IconSnippetProps = $props();
</script>

<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {fill} class={klass}>
	<path fill-rule="evenodd" d="M15.256 3.042a.75.75 0 0 1 .449.962l-6 16.5a.75.75 0 1 1-1.41-.513l6-16.5a.75.75 0 0 1 .961-.449Z" clip-rule="evenodd"/>
</svg>