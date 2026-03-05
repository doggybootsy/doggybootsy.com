import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
	try {
		const request = await fetch(`https://api.betterdiscord.app/v3/store/${params.theme}`);
		
		const { latest_source_url, type } = await request.json();
		
		if (type === "plugin") {
			return new Response(`/* Theme "${params.theme}" was not found! */`, {
				headers: {
					"content-type": "text/css; charset=utf-8"
				}
			});
		}

		const sourceFetch = await fetch(latest_source_url);

		const blob = await sourceFetch.blob();

		return new Response(blob, {
			headers: {
				"content-type": "text/css; charset=utf-8",
				"content-length": blob.size.toString(),
				"cache-control": sourceFetch.headers.get("cache-control")!,
				"expires": sourceFetch.headers.get("expires")!
			},
			status: 200,
			statusText: "ok"
		});
	}
	catch {
		return new Response(`/* Theme "${params.theme}" was not found! */`, {
			headers: {
				"content-type": "text/css; charset=utf-8"
			}
		});
	}
}