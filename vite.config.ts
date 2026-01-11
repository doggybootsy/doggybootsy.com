import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({ 
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
	server: {
		allowedHosts: [
			"tunnel.doggybootsy.com"
		]
	}
});
