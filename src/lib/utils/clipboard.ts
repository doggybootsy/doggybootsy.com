import { toast } from "$lib/components/layout/toast.svelte"

export function copy(text: string) {
	navigator.clipboard.writeText(text)
		.then(() => toast.success("Copied!"))
		.catch(() => toast.error("Failed to copy!"))
}