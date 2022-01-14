export const manifest = {
	appDir: "_app",
	assets: new Set(["_app/assets/Back-a23ed9cb.css","_app/assets/fira-mono-all-400-normal-0d19eb5d.woff","_app/assets/fira-mono-cyrillic-400-normal-046b609f.woff2","_app/assets/fira-mono-cyrillic-ext-400-normal-b3140dd3.woff2","_app/assets/fira-mono-greek-400-normal-1f8b3a07.woff2","_app/assets/fira-mono-greek-ext-400-normal-8659ae46.woff2","_app/assets/fira-mono-latin-400-normal-a2f9dbe8.woff2","_app/assets/fira-mono-latin-ext-400-normal-b6331a25.woff2","_app/assets/logo-c93b601c.svg","_app/assets/pages/__layout.svelte-10248356.css","_app/assets/pages/about.svelte-87d83ebb.css","_app/assets/pages/achieve.svelte-4c4e9fde.css","_app/assets/pages/bluesky/index.svelte-7775b04a.css","_app/assets/pages/index.svelte-7ef7ae5a.css","_app/assets/pages/prod/index.svelte-87ac1769.css","_app/assets/pages/prod/kinis.svelte-790311bb.css","_app/assets/pages/studio.svelte-07a9f04e.css","_app/assets/pages/utilization.svelte-5d12abd3.css","_app/assets/vendor-2634b1a9.css","_app/chunks/Back-bbb501ae.js","_app/chunks/Icon-be9706be.js","_app/chunks/env-a13806e5.js","_app/chunks/paths-28a87002.js","_app/chunks/vendor-eeacea03.js","_app/error.svelte-885675b3.js","_app/manifest.json","_app/pages/__layout.svelte-020d7e74.js","_app/pages/about.svelte-9506dda7.js","_app/pages/achieve.svelte-18a52505.js","_app/pages/bluesky/index.svelte-90103e1e.js","_app/pages/code.svelte-43abca59.js","_app/pages/contact.svelte-ceddf6ca.js","_app/pages/index.svelte-7a64d32a.js","_app/pages/prod/index.svelte-b82766b9.js","_app/pages/prod/kinis.svelte-8cb497a9.js","_app/pages/studio.svelte-a38d26af.js","_app/pages/utilization.svelte-e8b8fa41.js","_app/start-ba078b3b.js"]),
	_: {
		mime: {".css":"text/css",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".js":"application/javascript",".json":"application/json"},
		entry: {"file":"start-ba078b3b.js","js":["start-ba078b3b.js","chunks/vendor-eeacea03.js","chunks/paths-28a87002.js"],"css":["assets/vendor-2634b1a9.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/utilization\/?$/,
				params: null,
				path: "/utilization",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/achieve\/?$/,
				params: null,
				path: "/achieve",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/bluesky\/?$/,
				params: null,
				path: "/bluesky",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/studio\/?$/,
				params: null,
				path: "/studio",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/code\/?$/,
				params: null,
				path: "/code",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/prod\/?$/,
				params: null,
				path: "/prod",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/prod\/kinis\/?$/,
				params: null,
				path: "/prod/kinis",
				a: [0,11],
				b: [1]
			}
		]
	}
};
