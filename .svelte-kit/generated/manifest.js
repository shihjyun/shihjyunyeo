const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/works.svelte"),
	() => import("../../src/routes/post/__layout.svelte"),
	() => import("../../src/routes/post/index.svelte"),
	() => import("../../src/routes/post/20220130/index.svelte"),
	() => import("../../src/routes/post/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/works.svelte
	[/^\/works\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/post/index.svelte
	[/^\/post\/?$/, [c[0], c[4], c[5]], [c[1]]],

	// src/routes/post/20220130/index.svelte
	[/^\/post\/20220130\/?$/, [c[0], c[4], c[6]], [c[1]]],

	// src/routes/post/[slug].svelte
	[/^\/post\/([^/]+?)\/?$/, [c[0], c[4], c[7]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];