export function cacheFactory({
	/** @default 30 minutes */
	expires = 30 * 60 * 1000
}: {expires?: number} = {}): <T>(id: string, factory: () => T) => T {
	const cache = Object.create(null);

	return (id, factory) => {
		if (id in cache) return cache[id];

		setTimeout(() => {
			delete cache[id];
		}, expires);

		return cache[id] = factory();
	}
}
