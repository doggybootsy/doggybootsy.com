export function timeSince(date: Date, locale = "en") {
	const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

	const ranges = <const>[
		["year", 60 * 60 * 24 * 365],
		["month", 60 * 60 * 24 * 30],
		["day", 60 * 60 * 24],
		["hour", 60 * 60],
		["minute", 60],
		["second", 1]
	];

	const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

	for (const [unit, value] of ranges) {
		if (Math.abs(seconds) >= value) {
			return rtf.format(-Math.floor(seconds / value), unit);
		}
	}

	return rtf.format(0, "second");
}
