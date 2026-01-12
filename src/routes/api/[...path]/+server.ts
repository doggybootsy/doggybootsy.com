import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	return Response.json({
		code: 0,
		message: "Not found"
	}, {
		status: 404,
		statusText: "Not Found"
	});
}