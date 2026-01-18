<script module lang="ts">
	import type { Snippet } from 'svelte';

	export type ToastType = "info" | "success" | "warning" | "error";
	export type ToastIconProps = { type: ToastType, class: string };
	export type ToastIcon = Snippet<[props: ToastIconProps]>;
	export interface Options {
		duration?: number;
		type?: ToastType;
		onClose?(): void;
		icon?: ToastIcon;
	}

	interface IToast {
		content: string | Snippet;
		duration: number;
		type: ToastType;
		id: number;
		fading: boolean;
		node: HTMLElement | null;
		onClose?(): void;
		close(instant?: boolean): void;
		icon?: ToastIcon;
	}

	const toasts = $state(<IToast[]>[]);

	let counter = 0;

	export function toast(content: string | Snippet, opts?: Options) {
		const toast: IToast = $state({
			content,
			duration: opts?.duration || 1500,
			type: opts?.type || "success",
			id: counter++,
			fading: false,
			node: null,
			onClose: opts?.onClose,
			close,
			icon: opts?.icon
		});

		toasts.push(toast);

		const id = setTimeout(close, toast.duration + 500);

		function close(instant: boolean = false) {
			clearTimeout(id);

			if (instant) {
				const index = toasts.findIndex(t => t.id === toast.id);

				if (index === -1) return;

				toasts.splice(index, 1);

				opts?.onClose?.();

				return;
			}
			
			requestAnimationFrame(() => {
				toast.fading = true;
				
				toast.node?.addEventListener("transitionend", (event) => {
					// Ignore the starting transition				
					if (event.elapsedTime === 0.3) return;
					
					const index = toasts.findIndex(t => t.id === toast.id);

					if (index === -1) return;

					toasts.splice(index, 1);

					opts?.onClose?.();
				});
			});
		}
		
		return close;
	}

	toast.info = (content: string | Snippet, opts?: Omit<Options, "type">) => (
		toast(content, Object.assign({type: "info"} as Options, opts))
	);
	toast.success = (content: string | Snippet, opts?: Omit<Options, "type">) => (
		toast(content, Object.assign({type: "success"} as Options, opts))
	);
	toast.warning = (content: string | Snippet, opts?: Omit<Options, "type">) => (
		toast(content, Object.assign({type: "warning"} as Options, opts))
	);
	toast.error = (content: string | Snippet, opts?: Omit<Options, "type">) => (
		toast(content, Object.assign({type: "error"} as Options, opts))
	);

	toast.closeAll = (instant: boolean = false) => {
		if (instant) {
			toasts.forEach((toast) => toast.onClose?.());

			toasts.length = 0;
			return;
		}
		
		toasts.forEach((toast) => toast.close());
	};
</script>

<div class="fixed left-[50%] -translate-x-[50%] bottom-0 pr-(--scrollbar-width) pointer-events-none select-none *:mb-4">	
	{#each toasts as toast (toast.id)}
		<div 
			bind:this={toast.node}
			class={[
				"flex place-items-center justify-center gap-2 py-2 pl-2 pr-4 rounded-3xl shadow shadow-black/80 backdrop-blur-md translate-y-0 transition-all duration-300 starting:opacity-0 starting:translate-y-4 w-fit mx-auto",
				{
					generic: "bg-zinc-400/10 border-2 border-zinc-400/50 text-zinc-200",
					info: "bg-blue-500/10 border-2 border-blue-500/50 text-blue-400",
					success: "bg-green-500/10 border-2 border-green-500/50 text-green-400",
					warning: "bg-yellow-500/10 border-2 border-yellow-500/50 text-yellow-400",
					error: "bg-red-500/10 border-2 border-red-500/50 text-red-400"
				}[toast.type],
				toast.fading && "blur-3xl opacity-90 duration-500 motion-reduce:duration-75 backdrop-blur-none"
			]}
		>
			{#if toast.icon}
				{@render toast.icon({ type: toast.type, class: "size-6" })}
			{:else if toast.type === "info"}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
				</svg>
			{:else if toast.type === "success"}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
				</svg>
			{:else if toast.type === "warning"}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
				</svg>
			{:else if toast.type === "error"}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
				</svg>
			{/if}

			<div>
				{#if typeof toast.content === "string"}
					{toast.content}
				{:else}
					{@render toast.content()}
				{/if}
			</div>
		</div>
	{/each}
</div>