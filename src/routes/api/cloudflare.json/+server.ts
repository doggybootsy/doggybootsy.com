import type { RequestHandler } from "./$types";
import {
	WORKERS_CI_BRANCH,
	WORKERS_CI_COMMIT_SHA,
	WORKERS_CI_BUILD_UUID
} from "$env/static/private";

export const GET: RequestHandler = () => {
	return Response.json({
		git: {
			branch: WORKERS_CI_BRANCH,
			commit: WORKERS_CI_COMMIT_SHA,
			url: `https://github.com/doggybootsy/doggybootsy.com/commit/${WORKERS_CI_COMMIT_SHA}`
		},
		build: {
			uuid: WORKERS_CI_BUILD_UUID,
			production: WORKERS_CI_BRANCH === "main",
			preview: WORKERS_CI_BRANCH !== "main"
		}
	});
}