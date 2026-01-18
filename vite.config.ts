import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import cp from "node:child_process";

import pkg from "./package.json";

process.env.WORKERS_CI_BRANCH ||= cp.execSync("git symbolic-ref -q --short HEAD").toString().trim();
process.env.WORKERS_CI_COMMIT_SHA ||= cp.execSync("git rev-parse -q HEAD").toString().trim();
process.env.WORKERS_CI_BUILD_UUID ||= crypto.randomUUID();

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
