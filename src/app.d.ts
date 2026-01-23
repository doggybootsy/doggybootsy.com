// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			sitekey: string;
			buildInfo: typeof import("$lib/server/build-info")["cloudflareBuild"] & typeof import("$lib/server/build-info")["git"]
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
