import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

export const primaryFont = Open_Sans({
	subsets: ["latin", "cyrillic"],
	display: "swap",
	variable: "--primary-font",
	weight: ["400", "500", "600", "700"],
	adjustFontFallback: false,
});

export const secondaryFont = localFont({
	display: "swap",
	variable: "--secondary-font",
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
	adjustFontFallback: false,
});
