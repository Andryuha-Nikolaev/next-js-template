import "@/styles/index.scss";

import type { Metadata, Viewport } from "next";

import Burger from "@/components/global/burger/Burger";
import Header from "@/components/global/header/Header";
import PageLayout from "@/components/layouts/page/PageLayout";
import metaConstants from "@/constants/meta";
import viewportConstants from "@/constants/viewport";

import { involve } from "./fonts";
import { Providers } from "./providers";

import "simplebar-react/dist/simplebar.min.css";

import Menu from "@/components/global/menu/Menu";

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
						<Header />
						<Burger />
						<Menu />
						<main>{children}</main>
						<footer>Footer</footer>
					</PageLayout>
				</Providers>
			</body>
		</html>
	);
}
