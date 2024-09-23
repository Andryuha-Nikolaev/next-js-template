import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

export const involve = localFont({
	display: "swap",
	variable: "--font-involve",
	src: [
		{
			path: "./fonts/Involve-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Involve-Oblique.woff",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/Involve-SemiBold.woff",
			weight: "600",
			style: "normal",
		},
	],
});

export const openSans = Open_Sans({
	subsets: ["latin", "cyrillic"],
	preload: true,
	variable: "--font-open-sans",
});
