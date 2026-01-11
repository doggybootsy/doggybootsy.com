export interface BlogMeta {
	id: string;
	created_at: string;

	title: string;
	description: string;

	tags: string[];
	background_image: string | null;
}

const blogs: BlogMeta[] = [
	{
		id: "1",
		created_at: new Date("2026-01-10T22:02:28.494Z").toISOString(),

		title: "New Site",
		description: "Welcome to the new site!",

		tags: [],
		background_image: "/external/betterdiscord/missing.svg"
	},
	{
		id: "2",
		created_at: new Date("2026-01-10T22:02:28.494Z").toISOString(),

		title: "My BetterDiscord Journey",
		description: "A journey of becoming the lead developer of BetterDiscord.",

		tags: [
			"Programming",
			"BetterDiscord"
		],
		background_image: "/external/betterdiscord/invitebanner.png"
	}
];

for (let index = 0; index < blogs.length; index++) {
	const element = blogs[index];
	
	element.background_image ||= "/external/betterdiscord/missing.svg";
}

export const all = () => blogs.concat();
export const get = (id: string) => blogs.find(blog => blog.id === id);