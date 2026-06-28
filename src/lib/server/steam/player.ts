import { STEAM_API_KEY } from "$env/static/private";
import type { SteamPlayer } from "$lib/server/steam/types";
import { cacheFactory } from "$lib/utils/cache";

const cache = cacheFactory();

export async function getPlayer(steamId: string): Promise<SteamPlayer> {
	return cache(steamId, async () => {
		const res = await fetch(
			`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_API_KEY}&steamids=${steamId}`
		);

		const json = await res.json();

		return json.response.players[0];
	});
}