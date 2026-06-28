import type { RequestHandler } from "./$types";
import { getPlayer, getWorkshopItem } from "$lib/server/steam";
import { PhotonImage, SamplingFilter, resize } from "@cf-wasm/photon";
import { rgbaToThumbHash } from "thumbhash";
import { cacheFactory } from "$lib/utils/cache";

function workshopColor(creatorId: string, workshopItemId: string): number {
	const input = `${creatorId}:${workshopItemId}`;

	let hash = 0;

	for (let i = 0; i < input.length; i++) {
		hash = Math.imul(hash ^ input.charCodeAt(i), 0x45d9f3b);
	}

	return hash >>> 8 & 0xFFFFFF;
}

function workshopDescriptionToText(description: string): string {
	return description
		.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, "**$1**")
		.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, "*$1*")
		.replace(/\[u\]([\s\S]*?)\[\/u\]/gi, "__$1__")
		.replace(/\[strike\]([\s\S]*?)\[\/strike\]/gi, "~~$1~~")
		.replace(/\[spoiler\]([\s\S]*?)\[\/spoiler\]/gi, "||$1||")

		.replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi, "[no kil|$2]($1)")
		.replace(/\[url\]([\s\S]*?)\[\/url\]/gi, "<$1>")

		.replace(/\[img\][\s\S]*?\[\/img\]/gi, "")
		.replace(/\[previewyoutube=.*?\][\s\S]*?\[\/previewyoutube\]/gi, "")
		.replace(/\[h1\]([\s\S]*?)\[\/h1\]/gi, "# $1")
		.replace(/\[h2\]([\s\S]*?)\[\/h2\]/gi, "## $1")
		.replace(/\[h3\]([\s\S]*?)\[\/h3\]/gi, "### $1")

		.replace(/\[quote\]([\s\S]*?)\[\/quote\]/gi, (_, text) =>
			text
				.trim()
				.split("\n")
				.map((line: string) => `> ${line}`)
				.join("\n")
		)

		.replace(/\[list\]/gi, "")
		.replace(/\[\/list\]/gi, "")
		.replace(/\[\*\]/g, "• ")

		.replace(/\[hr\]/gi, "──────────")

		.replace(/\[color=[^\]]+\]([\s\S]*?)\[\/color\]/gi, "$1")
		.replace(/\[size=[^\]]+\]([\s\S]*?)\[\/size\]/gi, "$1")

		.replace(/\[(?:table|tr|td|th).*?\]/gi, "")
		.replace(/\[\/(?:table|tr|td|th)\]/gi, "")

		.replace(/\[([^\]]+)\]/g, (_, match) => {			
			if (match.startsWith("no kil|")) return `[${match.slice(7)}]`;
			return "";
		})

		.replace(/\n{3,}/g, "\n\n")
		.trim();
}

const cache = cacheFactory();

async function getThumbnail(url: string) {
	return cache(url, async () => {
		const request = await fetch(url);
		const buffer = new Uint8Array(await request.arrayBuffer());

		const contentType = request.headers
			.get("content-type")
			?.split(";")[0];

		const image = PhotonImage.new_from_byteslice(buffer);

		const out = resize(image, 100, 100, SamplingFilter.Nearest);

		const thumbhash = rgbaToThumbHash(
			out.get_width(),
			out.get_height(),
			image.get_bytes_jpeg(1)
		);

		return {
			content_type: contentType,
			height: image.get_height(),
			width: image.get_width(),
			placeholder: rgbaToThumbHash(out.get_width(), out.get_height(), thumbhash)
				//@ts-expect-error
				.toString("base64"),
			url
		}
	});
}

export const GET: RequestHandler = async ({ params, url }) => {
	const item = await getWorkshopItem(params.item);
	const [user, thumbnail] = await Promise.all([getPlayer(item.creator), getThumbnail(item.preview_url)]);

	let description: string | undefined;
	if (!url.searchParams.has("no-description") && !url.searchParams.has("nodesc")) {
		description = workshopDescriptionToText(item.file_description).slice(0, 4096).trim();
	}

	return Response.json({
		title: item.title,
		author: {
			name: user.personaname,
			url: user.profileurl,
			avatar: user.avatarmedium
		},
		color: workshopColor(item.creator, params.item),
		description,

		subscriptions: item.subscriptions,
		favorited: item.favorited,
		followers: item.followers,

		tags: item.tags.map(x => x.display_name || x.tag),
		
		time: {
			updated: item.time_updated,
			createed: item.time_created
		},

		thumbnail,

		id: params.item
	});
}
