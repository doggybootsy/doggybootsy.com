import * as blogs from "$lib/server/blog-meta";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		blogs: blogs.all()
	}
}