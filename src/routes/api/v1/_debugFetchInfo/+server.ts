import type { RequestHandler } from "./$types";

export const fallback: RequestHandler = async ({ request }) => {
	return Response.json({
		method: request.method,
		headers: Object.fromEntries(request.headers.entries())
	});
}
