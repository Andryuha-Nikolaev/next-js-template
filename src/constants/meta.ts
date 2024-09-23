import type { Metadata } from "next";

const SITE_NAME = "Title";

const metaConstants: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s - ${SITE_NAME}`,
	},
	description: "description",
	icons: {
		icon: "/favicon.ico",
		// apple: {
		// 	rel: "/apple-touch-icon.png",
		// 	type: "image/png",
		// 	sizes: "180x180",
		// 	url: "/apple-touch-icon.png",
		// },
		// other: [
		// 	{
		// 		rel: "icon",
		// 		type: "image/png",
		// 		sizes: "32x32",
		// 		url: "/favicon-32x32.png",
		// 	},
		// 	{
		// 		rel: "icon",
		// 		type: "image/png",
		// 		sizes: "64x64",
		// 		url: "/favicon-64x64.png",
		// 	},
		// 	{
		// 		rel: "icon",
		// 		type: "image/png",
		// 		sizes: "16x16",
		// 		url: "/favicon-16x16.png",
		// 	},
		// 	{
		// 		rel: "icon",
		// 		type: "image/png",
		// 		sizes: "192x192",
		// 		url: "/android-chrome-192x192.png",
		// 	},
		// 	{
		// 		rel: "icon",
		// 		type: "image/png",
		// 		sizes: "512x512",
		// 		url: "/android-chrome-512x512.png",
		// 	},
		// ],
	},
	openGraph: {
		// images: [`${process.env["NEXT_PUBLIC_SITE_URL"]}/og-image.png`],
	},
} as const;

export default metaConstants;
