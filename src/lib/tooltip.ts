import type { Attachment } from "svelte/attachments";

export function tooltip(content: string): Attachment<HTMLElement> {
	return (node) => {
		let tooltip = document.createElement("div");

		tooltip.innerText = content;

		tooltip.className = "fixed py-1 px-2 z-40 pointer-events-none bg-theme-800 rounded-md border-2 border-theme-200";

		node.setAttribute("aria-label", content);

		function listener(event: MouseEvent) {
			const mouseover = event.type === "mouseover";

			if (mouseover) {
				if (!tooltip.isConnected) {
					document.body.append(tooltip);

					const rect = node.getBoundingClientRect();
					const tRect = tooltip.getBoundingClientRect();

					tooltip.style.left = `${rect.left + (rect.width / 2 - tRect.width / 2)}px`;
					tooltip.style.top = `${rect.top + rect.height + 8}px`;
					// tooltip.style.left = rect.left;
				}
			}
			else {
				if (tooltip.isConnected) tooltip.remove();
			}
		}

		node.addEventListener("mouseover", listener, {passive: true});
		node.addEventListener("mouseleave", listener, {passive: true});

		return () => {
			node.removeEventListener("mouseover", listener);
			node.removeEventListener("mouseleave", listener);
			if (tooltip.isConnected) tooltip.remove();

			//@ts-expect-error to gc
			tooltip = null;
		}
	}
}