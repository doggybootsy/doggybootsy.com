<script lang="ts">
	import type { IconSnippetProps } from "../types.ts";

	const {fill = "currentColor", class: klass = "size-6", ...props}: IconSnippetProps = $props();
</script>

<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {fill} class={klass}>
	<path fill-rule="evenodd" d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>
</svg>