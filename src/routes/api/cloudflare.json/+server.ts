import type { RequestHandler } from "./$types";
import * as env from "$env/static/private";

export const GET: RequestHandler = () => {
	return Response.json({
		BRANCH: env.WORKERS_CI_BRANCH,
		BUILD_UUID: env.WORKERS_CI_BUILD_UUID,
		COMMIT_SHA: env.WORKERS_CI_COMMIT_SHA,
		
		GITHUB_COMMIT: `https://github.com/doggybootsy/doggybootsy.com/commit/${env.WORKERS_CI_COMMIT_SHA}`
	});
}