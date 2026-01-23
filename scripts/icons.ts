import path from "node:path";
import fs from "node:fs/promises";

const text = await fetch("https://heroicons.com/solid").then(res => res.text());

const baseStart = text.indexOf("data-headlessui-state=\"selected\"");
const baseEnd = text.indexOf("headlessui-tabs-panel-", baseStart + 1);

let html = text.slice(baseStart, baseEnd);

const firstLiner = `<script lang="ts">
	import type { IconSnippetProps } from "../types.ts";

	const {fill = "currentColor", class: klass = "size-6", ...props}: IconSnippetProps = $props();
</script>

<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {fill} class={klass}>
`;

await fs.mkdir(path.resolve("src", "lib", "components", "icons"), {recursive: true});
await fs.mkdir(path.resolve("src", "lib", "components", "icons", "heroicon"), {recursive: true});

const icons: string[] = [];

while (true) {
	const iconStart = html.indexOf("<svg");
	if (iconStart === -1) break;
	const iconEnd = html.indexOf("</svg>", iconStart) + 6;

	const nameStart = html.indexOf("title=\"", iconStart);
	const nameEnd = html.indexOf("\"", nameStart + 7);

	const name = html.slice(nameStart + 7, nameEnd);

	const icon = html.slice(iconStart, iconEnd);

	const svelte = firstLiner + icon.split("\n").slice(1).map(line => line.replace(/^( {2})+/, r => "".padEnd(r.length / 2, "\t"))).join("\n");

	icons.push(name);
	
	// break;

	fs.writeFile(
		path.resolve("src", "lib", "components", "icons", "heroicon", `${name}.svelte`),
		svelte
	);

	// break;
	

	html = html.slice(iconEnd);
}

console.log(`Extracted ${icons.length} heroicons.`);

function kebabToPascalCase(str: string): string {
	return str
		.split("-")
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}

fs.writeFile(
	path.resolve("src", "lib", "components", "icons", "heroicon", "index.ts"),
	icons.map(name => `export {default as ${kebabToPascalCase(name)}} from "./${name}.svelte";`).join("\n")
);

fs.writeFile(
	path.resolve("src", "lib", "components", "icons", "types.ts"),
	`import type { SVGAttributes } from "svelte/elements";
import type { Component } from "svelte";

export type IconSnippetProps = Omit<SVGAttributes<SVGSVGElement>, "children" | "viewBox" | "xmlns">;
export type IconComponent = Component<IconSnippetProps, {}, "">;`
);

export {};