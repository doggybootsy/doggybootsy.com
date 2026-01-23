import type { SVGAttributes } from "svelte/elements";
import type { Component } from "svelte";

export type IconSnippetProps = Omit<SVGAttributes<SVGSVGElement>, "children" | "viewBox" | "xmlns">;
export type IconComponent = Component<IconSnippetProps, object, "">;
