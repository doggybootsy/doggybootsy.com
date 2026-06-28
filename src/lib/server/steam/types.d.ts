
export interface PublishedFileDetails {
	publishedfileid: string;
	result: number;

	creator: string;
	creator_app_id: number;
	consumer_app_id: number;

	filename: string;
	file_size: number;
	file_url: string;

	hcontent_file: string;
	hcontent_preview: string;

	title: string;
	file_description: string;

	time_created: number;
	time_updated: number;

	visibility: number;
	banned: number;
	ban_reason: string;

	subscriptions: number;
	favorited: number;
	followers: number;
	lifetime_subscriptions: number;
	lifetime_favorited: number;
	lifetime_followers: number;
	views: number;

	preview_url: string;

	tags: {
		tag: string;
		display_name?: string;
		adminonly?: boolean;
	}[];

	vote_data?: {
		score: number;
		votes_up: number;
		votes_down: number;
	};

	children?: {
		publishedfileid: string;
		sortorder: number;
		file_type: number;
	}[];

	kvtags?: Record<string, string>;
}

export interface SteamPlayer {
	steamid: string;
	personaname: string;
	profileurl: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	personastate: number;
	communityvisibilitystate: number;
	profilestate?: number;
	lastlogoff?: number;
	commentpermission?: number;
	realname?: string;
	primaryclanid?: string;
	timecreated?: number;
	loccountrycode?: string;
	locstatecode?: string;
	loccityid?: number;
}