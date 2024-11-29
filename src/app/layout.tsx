import "@/styles/index.scss";

import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

import Analytics from "@/components/global/analytics";
import Burger from "@/components/global/burger/Burger";
import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header";
import PageLayout from "@/components/layouts/page/PageLayout";
import metaConstants from "@/constants/meta";
import siteConstants from "@/constants/site";
import viewportConstants from "@/constants/viewport";

import { primaryFont } from "./fonts";
import { Providers } from "./providers";

export const metadata: Metadata = metaConstants;

export const viewport: Viewport = viewportConstants;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={primaryFont.variable}>
				<NextTopLoader
					color={siteConstants.PROGRESS_BAR_COLOR}
					showSpinner={false}
				/>
				<Providers>
					<PageLayout>
						<Header />
						<Burger />
						<main>{children}</main>
						<Footer />
					</PageLayout>
				</Providers>
			</body>
			<Analytics />
		</html>
	);
}
