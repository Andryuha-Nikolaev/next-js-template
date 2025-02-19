import type { Viewport } from "next";

const viewportConstants: Viewport = {
	width: "device-width",
	userScalable: false,
	maximumScale: 1,
	minimumScale: 1,
	initialScale: 1,
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "white" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
};

export default viewportConstants;
