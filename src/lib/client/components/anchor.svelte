<script lang="ts">
	import { page } from "$app/state";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	interface Props extends Omit<HTMLAnchorAttributes, "href"> {
		href: string | URL;
	}

	const {
		onclick,
		href,
		class: klass,
		...props
	}: Props = $props();

	function transformHref(href: string) {
		if (href.startsWith("gh:")) {
			return href.replace("gh:", "https://github.com/");
		}

		return href;
	}

	const url = $derived(new URL(transformHref(href.toString()), page.url.href));
	const onClick: HTMLAnchorAttributes["onclick"] = $derived((event) => {
		onclick?.(event);

		if (event.defaultPrevented) return;
		
		// todo alert
	});

	const oProps = $derived({
		...props,
		...(url.host === page.url.host ? {} : {target: "_blank", rel: "noopener noreferrer"})
	});
</script>

<a {...oProps} class={[klass, "anchor"]} onclick={onClick} href={url.href}>
	{@render props.children?.()}
</a>