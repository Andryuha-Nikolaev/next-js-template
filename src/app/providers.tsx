"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { ModalProvider } from "@/components/providers/modal/ModalProvider";

const AppProgressBar = dynamic(
	() => import("@/components/global/app-progress-bar/AppProgressBar")
);

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();

	return (
		// eslint-disable-next-line @typescript-eslint/unbound-method
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<ModalProvider>{children}</ModalProvider>
				<AppProgressBar />
			</NextThemesProvider>
		</NextUIProvider>
	);
}
