import "@/styles/index.scss";

import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

import PageLayout from "@/components/layouts/page/PageLayout";
import metaConstants from "@/constants/meta";
import siteConstants from "@/constants/site";
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
		<html lang="ru">
			<body className={involve.variable}>
				<NextTopLoader color={siteConstants.PROGRESS_BAR_COLOR} />
				<Providers>
					<PageLayout>
						<main>{children}</main>
					</PageLayout>
				</Providers>
			</body>
		</html>
	);
}
