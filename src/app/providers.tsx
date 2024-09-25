"use client";

import type * as React from "react";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();

	const PROGRESS_BAR_COLOR = "#ff4a4a";

	return (
		// eslint-disable-next-line @typescript-eslint/unbound-method
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				{children}
				<NextTopLoader color={PROGRESS_BAR_COLOR} showSpinner={false} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}
