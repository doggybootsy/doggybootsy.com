import { dev } from "$app/environment";
import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (url) => dev && url.startsWith("playground");
