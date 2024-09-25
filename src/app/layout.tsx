import "@/styles/index.scss";

import type { Metadata, Viewport } from "next";

import PageLayout from "@/components/layouts/page/PageLayout";
import metaConstants from "@/constants/meta";
import viewportConstants from "@/constants/viewport";

import { involve } from "./fonts";
import { Providers } from "./providers";

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
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<PageLayout>
						<header>Header</header>
						<main>{children}</main>
						<footer>Footer</footer>
					</PageLayout>
				</Providers>
			</body>
		</html>
	);
}
