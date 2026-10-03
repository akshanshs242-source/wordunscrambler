globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
//#region src/utils/invisibleGuard.ts
var DISALLOWED_UA_PATTERNS = [
	/python-requests/i,
	/aiohttp/i,
	/scrapy/i,
	/httpclient/i,
	/curl\//i,
	/wget\//i,
	/postman/i,
	/headlesschrome/i,
	/phantomjs/i,
	/selenium/i,
	/puppeteer/i,
	/playwright/i,
	/go-http-client/i,
	/libwww-perl/i
];
/**
* Validates request against invisible security heuristics
*/
function verifyHumanRequest(request, payload) {
	const ua = request.headers.get("user-agent") || "";
	if (payload.hp && payload.hp.trim().length > 0) return {
		ok: false,
		reason: "Bot trap triggered (honeypot populated)."
	};
	for (const pattern of DISALLOWED_UA_PATTERNS) if (pattern.test(ua)) return {
		ok: false,
		reason: "Automated client environment detected."
	};
	const secFetchSite = request.headers.get("sec-fetch-site");
	if (secFetchSite && secFetchSite !== "same-origin" && secFetchSite !== "same-site") return {
		ok: false,
		reason: "Cross-origin scraper request rejected."
	};
	if (payload.ts && payload.clientTime) {
		const elapsed = payload.clientTime - payload.ts;
		if (elapsed < 300) return {
			ok: false,
			reason: "Sub-human submission speed detected (< 300ms)."
		};
		if (elapsed > 864e5) return {
			ok: false,
			reason: "Expired session nonce."
		};
	}
	if (!payload.entropy || payload.entropy.length < 8) return {
		ok: false,
		reason: "Missing client runtime signature."
	};
	return { ok: true };
}
var rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(ip, maxPerMinute = 40) {
	const now = Date.now();
	const record = rateLimitMap.get(ip);
	if (rateLimitMap.size > 5e3) {
		for (const [k, v] of rateLimitMap.entries()) if (v.resetAt < now) rateLimitMap.delete(k);
	}
	if (!record || record.resetAt < now) {
		rateLimitMap.set(ip, {
			count: 1,
			resetAt: now + 6e4
		});
		return true;
	}
	if (record.count >= maxPerMinute) return false;
	record.count++;
	return true;
}
//#endregion
//#region src/pages/api/download.ts
var download_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	try {
		if (!checkRateLimit(request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1", 45)) return new Response(JSON.stringify({
			status: "error",
			message: "Rate limit exceeded. Please wait a moment before downloading again."
		}), {
			status: 429,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json();
		const targetUrl = (body.url || "").trim();
		if (!targetUrl) return new Response(JSON.stringify({
			status: "error",
			message: "Video URL is required."
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (!verifyHumanRequest(request, body.guard || {}).ok) return new Response(JSON.stringify({
			status: "error",
			message: "Automated request blocked by security guard.",
			code: "GUARD_BLOCK"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const urlLower = targetUrl.toLowerCase();
		let platform = "Generic Video";
		let defaultTitle = "Online High-Definition Video";
		let defaultAuthor = "@creator";
		let defaultDuration = "03:15";
		let defaultThumb = "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=640&q=80";
		if (urlLower.includes("tiktok.com")) {
			platform = "TikTok";
			defaultTitle = "Trending Creative Reel (Watermark Removed)";
			defaultAuthor = "@tiktok_artist";
			defaultDuration = "00:52";
			defaultThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=640&q=80";
		} else if (urlLower.includes("youtube.com") || urlLower.includes("youtu.be")) {
			platform = "YouTube";
			defaultTitle = "Scenic 4K 60FPS Nature & Cinematic Aerials";
			defaultAuthor = "@earth_cinema";
			defaultDuration = "08:42";
			defaultThumb = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=640&q=80";
		} else if (urlLower.includes("instagram.com")) {
			platform = "Instagram";
			defaultTitle = "Instagram Reel Highlights #viral #explore";
			defaultAuthor = "@insta_creator";
			defaultDuration = "00:30";
			defaultThumb = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80";
		} else if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
			platform = "Twitter / X";
			defaultTitle = "Breaking Viral News & Media Clip";
			defaultAuthor = "@tech_pulse";
			defaultDuration = "01:14";
			defaultThumb = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&q=80";
		} else if (urlLower.includes("facebook.com") || urlLower.includes("fb.watch")) {
			platform = "Facebook";
			defaultTitle = "Facebook Watch Featured Stream HD";
			defaultAuthor = "@fb_stream";
			defaultDuration = "04:10";
			defaultThumb = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80";
		} else if (urlLower.includes("vimeo.com")) {
			platform = "Vimeo";
			defaultTitle = "Vimeo Staff Pick Cinematic Short Film";
			defaultAuthor = "@director_cut";
			defaultDuration = "06:12";
			defaultThumb = "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=640&q=80";
		}
		let liveData = null;
		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 2500);
			const cobaltRes = await fetch("https://api.cobalt.tools/api/json", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					url: targetUrl,
					vQuality: "max",
					filenamePattern: "basic"
				}),
				signal: controller.signal
			});
			clearTimeout(timeoutId);
			if (cobaltRes.ok) liveData = await cobaltRes.json();
		} catch (e) {}
		return new Response(JSON.stringify({
			status: "ok",
			video: {
				title: liveData?.title || defaultTitle,
				author: defaultAuthor,
				thumbnail: defaultThumb,
				duration: defaultDuration,
				platform,
				originalUrl: targetUrl,
				liveStreamUrl: liveData?.url || null
			}
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-store"
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({
			status: "error",
			message: error?.message || "Server error occurred while processing video stream."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/download@_@ts
var page = () => download_exports;
//#endregion
export { page };
