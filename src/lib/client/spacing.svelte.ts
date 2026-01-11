import { browser } from "$app/environment";
import { readonly, writable, fromStore } from "svelte/store";

interface SpacingStore {
	px: number;
	calc(multiplier: number): number;
}

let node: HTMLDivElement | null = null;
if (browser) {
	node = document.createElement("div");
	node.style.width = "var(--spacing)";

	document.body.appendChild(node);
}

function getSpacing(): SpacingStore {
	if (node) {
		return {
			px: node.clientWidth,
			calc: (multiplier: number) => multiplier * node!.clientWidth
		};
	}

	return {
		px: 4,
		calc: (multiplier: number) => multiplier * 4
	}
}

const store = writable(getSpacing());

if (browser) {
	const c = fromStore(store);

	let id: number;
	function frame() {
		id = requestAnimationFrame(frame);

		const spacing = getSpacing();

		if (c.current.px === spacing.px) return;

		console.log("After");
		

		store.set(spacing);
	}

	id = requestAnimationFrame(frame);	

	import.meta.hot?.accept(() => cancelAnimationFrame(id));
}

export default readonly(store);