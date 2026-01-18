<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import Anchor from "./anchor.svelte";
	import type { ComponentProps, Snippet } from "svelte";

	type CommonProps = {
		disabled?: boolean;
		variant?: "primary" | "secondary" | "text" | "ghost" | "danger";
		size?: "small" | "medium" | "large";
		icon?: boolean;
		children?: Snippet;
		grow?: boolean;
		shrink?: boolean;
	};

	type AnchorProps = CommonProps &
		HTMLAnchorAttributes & {
			href: string | URL;
		};

	type ButtonProps = CommonProps &
		HTMLButtonAttributes & {
			href?: never;
		};

	type Props = AnchorProps | ButtonProps;

	const { disabled, variant = "primary", size = "medium", icon, class: klass, grow, shrink, ...props }: Props = $props();	
</script>

{#if "href" in props}
	<Anchor 
		{...props as ComponentProps<typeof Anchor>} 
		{disabled} 
		class={[
			"focusOutline inline-flex cursor-pointer items-center justify-center border text-center",
			{
				small: ["gap-2 rounded-sm text-xs", icon ? "h-7" : "h-7 px-2"],
				medium: ["gap-3 rounded-md text-sm", icon ? "size-10" : "h-10 px-4"],
				large: ["gap-4 rounded-md", icon ? "size-14" : "h-14 px-7"]
			}[size],
			{
				primary: "border-accent-500 bg-accent-500 text-white hover:border-accent-600 hover:bg-accent-600",
				secondary: [
					"border-white/10 bg-theme-300/30 hover:border-white/20 hover:bg-theme-300/40 hover:text-white"
				],
				text: "border-transparent text-white hover:bg-white/5",
				ghost: [
					"border-transparent",
					"bg-white/5 text-white hover:bg-white/10"
				],
				danger: "textShadow border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700"
			}[variant],
			disabled ? "pointer-events-none opacity-65" : "",
			{ grow, shrink },
			klass
		]}
		no-default-class
	>
		{@render props.children?.()}
	</Anchor>
{:else}
	<button 
		{...props} 
		{disabled}
		class={[
			"focusOutline inline-flex cursor-pointer items-center justify-center border text-center",
			{
				small: ["gap-2 rounded-sm text-xs", icon ? "h-7" : "h-7 px-2"],
				medium: ["gap-3 rounded-md text-sm", icon ? "size-10" : "h-10 px-4"],
				large: ["gap-4 rounded-md", icon ? "size-14" : "h-14 px-7"]
			}[size],
			{
				primary: "border-accent-500 bg-accent-500 text-white hover:border-accent-600 hover:bg-accent-600",
				secondary: [
					"border-white/10 bg-theme-300/30 hover:border-white/20 hover:bg-theme-300/40 hover:text-white"
				],
				text: "border-transparent text-white hover:bg-white/5",
				ghost: [
					"border-transparent",
					"bg-white/5 text-white hover:bg-white/10"
				],
				danger: "textShadow border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700"
			}[variant],
			disabled ? "pointer-events-none opacity-65" : "",
			{ grow, shrink },
			klass
		]}
	>
		{@render props.children?.()}
	</button>
{/if}
