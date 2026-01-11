import type { RequestHandler } from "./$types";
import * as foo from "$env/static/private";

export const GET: RequestHandler = () => {
	return Response.json({...foo});
}