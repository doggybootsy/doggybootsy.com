<script lang="ts">
	import Button from "$lib/components/button.svelte";
	import Header from "$lib/components/layout/header.svelte";
	import { toast } from "$lib/components/layout/toast.svelte";

	const opened = $state({
		info: false,
		success: false,
		warning: false,
		error: false
	});

	const requestAnimationFrame = () => new Promise(window.requestAnimationFrame);

	let duration = $state(1500);
</script>

<Header title="Toasts"/>

<div class="wrap my-6 *:not-first:mt-4">
	<div class="*:not-first:mt-2 *:flex *:gap-2">
		<div>
			<Button onclick={() => toast.info("Info Toast", { duration })}>Info</Button>
			<Button onclick={() => toast.success("Success Toast", { duration })}>Success</Button>
			<Button onclick={() => toast.warning("Warning Toast", { duration })}>Warning</Button>
			<Button onclick={() => toast.error("Error Toast", { duration })}>Error</Button>
			<Button 
				onclick={async () => {
					toast.info("Info Toast", { duration });
					
					await requestAnimationFrame();
					toast.success("Success Toast", { duration });
					
					await requestAnimationFrame();
					toast.warning("Warning Toast", { duration });
					
					await requestAnimationFrame();
					toast.error("Error Toast", { duration });
				}}
			>All</Button>
		</div>
		<div>Toast using Snippets</div>
		<div>
			{#snippet ToastContent()}
				<div class="font-bold">Large Info</div>
				<div class="text-sm">Smaller Info</div>
			{/snippet}
			{#snippet ToastIcon({ class: klass }: { class: string })}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={klass}>
					<path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
				</svg>
			{/snippet}
			
			<Button onclick={() => toast.info(ToastContent, { duration })}>Content</Button>
			<Button onclick={() => toast.info("Info Toast", { icon: ToastIcon, duration })}>Icon</Button>
			<Button onclick={() => toast.info(ToastContent, { icon: ToastIcon, duration })}>Both</Button>
		</div>
		<div>Toast using onClose</div>
		<div>
			<Button
				onclick={() => {
					opened.info = true;

					toast.info("Info Toast", {
						onClose() {
							opened.info = false;
						},
						duration
					});
				}} 
				disabled={opened.info}
			>Info</Button>
			<Button
				onclick={() => {
					opened.success = true;

					toast.success("Success Toast", {
						onClose() {
							opened.success = false;
						},
						duration
					});
				}} 
				disabled={opened.success}
			>Success</Button>
			<Button
				onclick={() => {
					opened.warning = true;

					toast.warning("Warning Toast", {
						onClose() {
							opened.warning = false;
						},
						duration
					});
				}} 
				disabled={opened.warning}
			>Warning</Button>
			<Button
				onclick={() => {
					opened.error = true;

					toast.error("Error Toast", {
						onClose() {
							opened.error = false;
						},
						duration
					});
				}} 
				disabled={opened.error}
			>Error</Button>
		</div>
		<div>
			<Button variant="danger" onclick={() => toast.success("I will dissolve")()}>Instant Close</Button>
			<Button variant="danger" onclick={() => toast.closeAll()}>Close All</Button>
			<Button variant="danger" onclick={() => toast.closeAll(true)}>Close All Instant</Button>
		</div>
		<div>Settings</div>
		<div>Duration (ms)</div>
		<div>
			<input name="ms" class="w-full" type="range" min="100" max="12000" bind:value={duration}>
			<input bind:value={duration} type="number" min="100" max="12000" class="w-16">
		</div>
	</div>
</div>