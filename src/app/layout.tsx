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
		<html lang="ru">
			<body className={involve.variable}>
				<Providers>
					<PageLayout>
						<main>{children}</main>
					</PageLayout>
				</Providers>
			</body>
		</html>
	);
}
