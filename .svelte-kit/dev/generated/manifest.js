const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/utilization.svelte"),
	() => import("../../../src/routes/achieve.svelte"),
	() => import("../../../src/routes/bluesky/index.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/studio.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/todos/index.svelte"),
	() => import("../../../src/routes/code.svelte"),
	() => import("../../../src/routes/prod/index.svelte"),
	() => import("../../../src/routes/prod/kinis.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/utilization.svelte
	[/^\/utilization\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/achieve.svelte
	[/^\/achieve\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/bluesky/index.svelte
	[/^\/bluesky\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/studio.svelte
	[/^\/studio\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[8]], [c[1]]],

	,

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[9]], [c[1]]],

	,

	// src/routes/code.svelte
	[/^\/code\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/prod/index.svelte
	[/^\/prod\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/prod/kinis.svelte
	[/^\/prod\/kinis\/?$/, [c[0], c[12]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];