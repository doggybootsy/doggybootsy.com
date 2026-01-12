import type { RequestHandler } from "./$types";
import * as env from "$env/static/private";

export const GET: RequestHandler = () => {
	return Response.json({
		GIT: {
			BRANCH: env.WORKERS_CI_BRANCH,
			COMMIT: env.WORKERS_CI_COMMIT_SHA,
			URL: `https://github.com/doggybootsy/doggybootsy.com/commit/${env.WORKERS_CI_COMMIT_SHA}`
		},
		BUILD: {
			UUID: env.WORKERS_CI_BUILD_UUID,
			IS_SNAPSHOT: env.WORKERS_CI_BRANCH !== "main"
		}
	});
}