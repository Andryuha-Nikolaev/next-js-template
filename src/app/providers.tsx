"use client";

import SiteStateProvider from "@/context/site/SiteStateProvider";
import ModalProvider from "@/features/modal/context/ModalProvider";

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
