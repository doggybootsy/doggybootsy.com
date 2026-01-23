import { browser } from "$app/environment";
import { readonly, writable } from "svelte/store";

interface ShiftStore {
	shift: boolean;
	alt: boolean;
	ctrl: boolean;
}

const store = writable<ShiftStore>({
	shift: false,
	alt: false,
	ctrl: false
});

if (browser) {
	function update(e: KeyboardEvent) {
		const pressed = e.type === "keydown";

		store.set({
			shift: e.shiftKey || (pressed && e.key === "Shift"),
			alt: e.altKey || (pressed && e.key === "Alt"),
			ctrl: e.ctrlKey || (pressed && e.key === "Control")
		});
	}

	window.addEventListener("keydown", update);
	window.addEventListener("keyup", update);

	import.meta.hot?.accept(() => {
		window.removeEventListener("keydown", update);
		window.removeEventListener("keyup", update);
	});
}

export default readonly(store);