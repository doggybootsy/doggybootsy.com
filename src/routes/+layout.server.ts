import type { LayoutServerLoad } from "./$types";
import { cloudflareBuild, git } from "$lib/server/build-info";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const isAdmin = cookies.get("__admin") === "true";

	return {
		buildInfo: {
			...git,
			...cloudflareBuild
		},
		viewer: {
			isAdmin
		}
	}
};