<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { page } from "$app/state";
	import { Discord, Github, X } from "$lib/components/icons";
	import { copy } from "$lib/utils/clipboard";
	import Anchor from "../anchor.svelte";
	import Button from "../button.svelte";

	let debug = $state(false);
	let count = 0;

	function update() {
		debug = count++ % 7 === 6;
	}

	onNavigate(() => {
		count = 0;
		debug = false;
	});

	function copyDebugInfo() {
		copy(JSON.stringify(page.data.buildInfo, null, "\t"));
	}
</script>

<footer class="bg-theme-1000 border-theme-500 border-t sm:py-14 py-8">
	<div class="wrap">
		<div class="flex justify-between items-center sm:flex-row sm:gap-8 flex-col gap-4">
			<button class="select-none" onclick={update}>
				<div>© {new Date().getFullYear()} DoggyBootsy</div>
			</button>

			<div class="flex gap-2">
				<Anchor
					href="http://github.com/doggybootsy"
					class="focusOutline rounded-md p-3 hover:bg-white/5 hover:text-white"
					aria-label="Github"
					no-default-class
				>
					<Github />
				</Anchor>
				<Anchor
					href="https://x.com/doggybootsy"
					class="focusOutline rounded-md p-3 hover:bg-white/5 hover:text-white"
					aria-label="X"
					no-default-class
				>
					<X />
				</Anchor>
				<Anchor
					href="https://discord.com/users/515780151791976453"
					class="focusOutline rounded-md p-3 hover:bg-white/5 hover:text-white"
					aria-label="Discord"
					no-default-class
				>
					<Discord />
				</Anchor>
				<Anchor
					href="https://betterdiscord.app/developer/DoggyBootsy"
					class="focusOutline rounded-md p-3 group/bdlogo hover:bg-white/5 hover:text-white"
					aria-label="betterdiscord"
					no-default-class
				>
					<svg class="size-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 2000 2000" enable-background="new 0 0 2000 2000" xml:space="preserve">
						<path class="group-hover/bdlogo:text-[#3E82E5]" d="M1402.2,631.7c-9.7-353.4-286.2-496-642.6-496H68.4v714.1l442,398V490.7h257c274.5,0,274.5,344.9,0,344.9H597.6v329.5h169.8c274.5,0,274.5,344.8,0,344.8h-699v354.9h691.2c356.3,0,632.8-142.6,642.6-496c0-162.6-44.5-284.1-122.9-368.6C1357.7,915.8,1402.2,794.3,1402.2,631.7z"/>
						<path d="M1262.5,135.2L1262.5,135.2l-76.8,0c26.6,13.3,51.7,28.1,75,44.3c70.7,49.1,126.1,111.5,164.6,185.3c39.9,76.6,61.5,165.6,64.3,264.6l0,1.2v1.2c0,141.1,0,596.1,0,737.1v1.2l0,1.2c-2.7,99-24.3,188-64.3,264.6c-38.5,73.8-93.8,136.2-164.6,185.3c-22.6,15.7-46.9,30.1-72.6,43.1h72.5c346.2,1.9,671-171.2,671-567.9V716.7C1933.5,312.2,1608.7,135.2,1262.5,135.2z"/>
					</svg>
				</Anchor>
			</div>
		</div>
	</div>

	{#if debug}
		<div class="wrap mt-14">
			<div class="bg-theme-900 p-3 rounded-md flex flex-col relative">
				<table>
					<tbody>
						{#each Object.entries(page.data.buildInfo) as [key, value]}
							<tr>
								<td class="pr-3">{key}</td>
								<td 
									class={{
										"text-orange-500": typeof value === "string",
										"text-indigo-500": typeof value === "boolean"
									}}
								>{value}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<Button 
					onclick={copyDebugInfo}
					size="small"
					class="mt-2 sm:hidden"
				>
					Copy Build Info
				</Button>
				<button
					class="absolute focusOutline rounded-md p-3 bottom-2 right-2 group hover:bg-white/5 hover:text-white hidden sm:block"
					aria-label="Copy Build Info"
					onclick={copyDebugInfo}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
						<path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z" clip-rule="evenodd" />
						<path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
						<path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
					</svg>
				</button>
			</div>
		</div>
	{/if}
</footer>