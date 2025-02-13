"use client";

import ModalProvider from "@/features/modal/context/ModalProvider";
import { SiteStateProvider } from "@/shared/context/site";

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<SiteStateProvider>
			<ModalProvider>{children}</ModalProvider>
		</SiteStateProvider>
	);
}
