import type { Metadata } from "next";

const SITE_NAME = "Title";

const metaConstants: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: "Description",
	// manifest: "/web.manifest.json",
	icons: {
		icon: "/favicon.ico",
		apple: {
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "180x180",
			url: "/apple-touch-icon.png",
		},
		other: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "64x64",
				url: "/favicon-64x64.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "128x128",
				url: "/favicon-128x128.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				url: "/favicon-192x192.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				url: "/favicon-512x512.png",
			},
		],
	},
	openGraph: {
		// images: `${process.env["NEXT_PUBLIC_SITE_URL"]}/og-image.png`,
	},
};

export default metaConstants;
