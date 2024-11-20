const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CG3f6i5a.js","app":"_app/immutable/entry/app.CeZE-tJ1.js","imports":["_app/immutable/entry/start.CG3f6i5a.js","_app/immutable/chunks/entry.ad7f1u77.js","_app/immutable/chunks/runtime.DFDMHrX8.js","_app/immutable/entry/app.CeZE-tJ1.js","_app/immutable/chunks/runtime.DFDMHrX8.js","_app/immutable/chunks/render.BTGrRp7I.js","_app/immutable/chunks/disclose-version.Cchg-LBa.js","_app/immutable/chunks/store.bNrz4f5B.js","_app/immutable/chunks/index-client.DjKqps2S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D3lSr9J2.js')),
			__memo(() => import('./chunks/1-DaMdGEnZ.js')),
			__memo(() => import('./chunks/2-D4JXp66J.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BQmolYyG.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
