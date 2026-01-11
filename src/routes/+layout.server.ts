import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const isAdmin = cookies.get("__admin") === "true";

	const dataCookies: Record<string, string> = {};

	for (const element of cookies.getAll()) {
		dataCookies[element.name] = element.value;
	}

	const cookiePreferences = cookies.get("cookie-preferences") ?? "";
	const settings = {
		enabled: cookiePreferences.split(",").includes("preferences")
	};

	return {
		viewer: {
			// TODO: Replace with real authentication logic
			admin: isAdmin
		},
		settings,
		acknowledgedCookies: settings.enabled,
		cookies: dataCookies
	}
};