<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/state";
	import Anchor from "../anchor.svelte";

	let nav: HTMLElement | null = $state(null);

	let change = $state(false);

	let devBanner = $state(dev || page.url.host.endsWith(".workers.dev"));

	$effect.pre(() => {
		if (!nav) return;

		function onScroll() {			
			change = (nav!.clientHeight / 2) < window.scrollY;
		}

		$effect(() => onScroll());

		window.addEventListener("scroll", onScroll, {
			passive: true
		});

		const resizeObserver = new ResizeObserver(() => onScroll());
		
		return () => {			
			resizeObserver.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	});

	interface Props {
		admin: boolean;
	}

	const { admin }: Props = $props();
</script>

<nav 
	class={{
		"fixed left-0 z-40 flex h-(--nav-height) w-full border-b transition-colors pr-(--scrollbar-width) flex-col": true,
		"border-transparent": !change,
		"border-theme-500 bg-theme-1000/85 backdrop-blur": change,
		"[&,&~*]:[--nav-height:--spacing(28)]": devBanner
	}}
	bind:this={nav}
>
	{#if devBanner}
		<div class={{
			"wrap py-1 rounded-b-md max-h-8 flex items-center": true,
			"bg-red-700/15 text-red-500/80": dev,
			"bg-yellow-700/15 text-yellow-500/80": !dev
		}} role="banner">
			<div>
				{#if dev}
					Development Build
				{:else}
					Snapshot Build
				{/if}
			</div>

			<div class="mx-auto"></div>

			<button 
				aria-label="Close Banner"
				class="cursor-pointer"
				onclick={() => {
					devBanner = false;
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
				</svg>
			</button>
		</div>
	{/if}

	<div class="wrap my-auto flex items-center justify-between">
		<div class="flex items-center">
			<a 
				href="/" 
				class="flex items-center cursor-pointer focusOutline rounded-md p-2 hover:bg-white/5 hover:text-white hover:underline"
			>
				<img src="https://github.com/doggybootsy.png" class="size-8 rounded-lg" alt="" srcset="">
				<h1 class="ml-4 flex gap-2 font-bold font-manrope text-lg">DoggyBootsy</h1>
			</a>

			<div class="ml-4 flex gap-2">
				{#if admin}
					<div 
						role="button"
						class="cursor-pointer focusOutline rounded-md p-3 bg-red-700/15 text-red-500/80 hover:bg-red-700/25 hover:text-red-500 transition-colors"
						aria-label="Admin Panel"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
							<path fill-rule="evenodd" d="M8.478 1.6a.75.75 0 0 1 .273 1.026 3.72 3.72 0 0 0-.425 1.121c.058.058.118.114.18.168A4.491 4.491 0 0 1 12 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 0 0-.426-1.125.75.75 0 1 1 1.298-.752 5.22 5.22 0 0 1 .671 2.046.75.75 0 0 1-.187.582c-.241.27-.505.52-.787.749a4.494 4.494 0 0 1 .216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.742a23.122 23.122 0 0 0 3.832-.803 23.241 23.241 0 0 0-.345-2.634.75.75 0 0 1 1.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 0 1-.516.75c-1.527.499-3.119.854-4.76 1.049-.074.38-.22.735-.423 1.05 2.066.209 4.058.672 5.943 1.358a.75.75 0 0 1 .492.75 24.665 24.665 0 0 1-1.189 6.25.75.75 0 0 1-1.425-.47 23.14 23.14 0 0 0 1.077-5.306c-.5-.169-1.009-.32-1.524-.455.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.135-1.022.286-1.522.455.154 1.838.52 3.616 1.077 5.307a.75.75 0 1 1-1.425.468 24.662 24.662 0 0 1-1.19-6.25.75.75 0 0 1 .493-.749 24.586 24.586 0 0 1 4.964-1.24h.01c.321-.046.644-.085.969-.118a2.983 2.983 0 0 1-.424-1.05 24.614 24.614 0 0 1-4.76-1.05.75.75 0 0 1-.516-.75c.057-1.16.194-2.302.405-3.417a.75.75 0 0 1 1.474.28c-.164.862-.28 1.74-.345 2.634 1.237.371 2.517.642 3.832.803.085-.266.207-.515.359-.742a18.698 18.698 0 0 1-.547-.08c-.664-.11-1.311-.612-1.417-1.404a4.535 4.535 0 0 1 .217-2.103 6.788 6.788 0 0 1-.788-.751.75.75 0 0 1-.187-.583 5.22 5.22 0 0 1 .67-2.04.75.75 0 0 1 1.026-.273Z" clip-rule="evenodd" />
						</svg>
					</div>
				{/if}
			</div>
		</div>
		<div class="flex gap-4 items-center">
			<Anchor 
				href="/blog"
				role="button"
				class={{
					"focusOutline rounded-md p-3 hover:bg-white/5 hover:text-white transition-colors": true,
					"bg-white/2.5": page.url.pathname.startsWith("/blog")
				}}
				aria-label="Blog"
				no-default-class
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
					<path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
				</svg>
			</Anchor>

			<!-- <button 
				type="button"
				class="focusOutline rounded-md p-3 hover:bg-white/5 hover:text-white"
				aria-label="Settings"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
				</svg>
			</button> -->
		</div>
	</div>
</nav>
