import * as blogs from "$lib/server/blog-meta";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route }) => {
	const id = route.id.slice(route.id.lastIndexOf("/") + 1);

	const blog = blogs.get(id);

	if (!blog) {
		throw error(404, "Blog not found!");
	}

	return { blog };
}