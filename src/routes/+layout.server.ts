import type { LayoutServerLoad } from "./$types";
import { cloudflareBuild, git } from "$lib/server/build-info";
import { dev } from "$app/environment";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const isAdmin = cookies.get("__admin") === "true";
	const sitekey = dev ? "3x00000000000000000000FF" : "0x4AAAAAACNXKzKjMPfaAeba";

	return {
		sitekey,
		buildInfo: {
			...git,
			...cloudflareBuild
		},
		viewer: {
			isAdmin
		}
	}
};