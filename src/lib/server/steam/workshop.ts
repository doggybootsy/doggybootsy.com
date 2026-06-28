import { STEAM_API_KEY } from "$env/static/private";
import type { PublishedFileDetails } from "$lib/server/steam/types";
import { cacheFactory } from "$lib/utils/cache";

const cache = cacheFactory();

export async function getWorkshopItem(id: string): Promise<PublishedFileDetails> {
	return cache(id, async () => {
		const body = new URLSearchParams({
			itemcount: "1",
			"publishedfileids[0]": id,
			key: STEAM_API_KEY
		});

		const res = await fetch("https://api.steampowered.com/IPublishedFileService/GetDetails/v1/?" + body, {
			method: "GET"
		});

		return (await res.json()).response.publishedfiledetails[0];
	});
}