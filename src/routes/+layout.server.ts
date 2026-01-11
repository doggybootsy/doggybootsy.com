import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const isAdmin = cookies.get("__admin") === "true";

	return {
		viewer: {
			isAdmin
		}
	}
};