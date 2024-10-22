import "@/styles/index.scss";

import type { Metadata, Viewport } from "next";

import PageLayout from "@/components/layouts/page/PageLayout";
import metaConstants from "@/constants/meta";
import viewportConstants from "@/constants/viewport";

import { involve } from "./fonts";
import { Providers } from "./providers";

import "simplebar-react/dist/simplebar.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const metadata: Metadata = metaConstants;

export const viewport: Viewport = viewportConstants;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="ru">
			<body className={involve.variable}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<PageLayout>
						<main>{children}</main>
					</PageLayout>
				</Providers>
			</body>
		</html>
	);
}
