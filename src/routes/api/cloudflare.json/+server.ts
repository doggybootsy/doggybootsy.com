import type { RequestHandler } from "./$types";
import { cloudflareBuild, git } from "$lib/server/build-info";

export const GET: RequestHandler = () => {
	return Response.json({
		git,
		build: cloudflareBuild
	});
};
