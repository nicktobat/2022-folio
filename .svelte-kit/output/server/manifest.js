export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","Nicholas Tobat Resume.pdf","_app/.DS_Store","_app/assets/.DS_Store","favicon.ico","favicon.png","graphix/basenji.png","graphix/basenji_.png","graphix/basenji_og.png","graphix/cig.png","graphix/cig_.png","graphix/cig_og.png","graphix/gods.png","graphix/gods_.png","graphix/gods_og.png","graphix/howl.png","graphix/howl_.png","graphix/howl_og.png","graphix/oasis.png","graphix/oasis_.png","graphix/oasis_og.png","graphix/scoob_og.png","graphix/scooby.png","graphix/scooby_.png","ixd/iphonex_1.png","ixd/iphonex_2.png","ixd/menu.gif","ixd/menu.png","ixd/nike.gif","ixd/nike.png","ixd/reserve.gif","ixd/reserve.png","kinis/Onboard0.png","kinis/Onboard1.png","kinis/Onboard2.png","kinis/Onboard3.png","kinis/Search0.png","kinis/Search1.png","kinis/Search2.png","kinis/Search3.png","kinis/Tabs0.png","kinis/Tabs1.png","kinis/Tabs2.png","kinis/Tabs3.png","kinis/analysis.png","kinis/custpath.png","kinis/foot.png","kinis/milestones.png","kinis/process.png","kinis/trainerpath.png","kinis/whiteboard.png","kinis_core.png","kinis_onboard.png","kinispreview.png","portrait.jpg","reconcilepreview.jpg","robots.txt","utilizepreview.png"]),
	_: {
		mime: {".pdf":"application/pdf",".ico":"image/vnd.microsoft.icon",".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".txt":"text/plain"},
		entry: {"file":"start-ff9803c6.js","js":["start-ff9803c6.js","chunks/vendor-eeacea03.js"],"css":["assets/vendor-2634b1a9.css"]},
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
