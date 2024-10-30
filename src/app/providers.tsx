"use client";

import ModalProvider from "@/context/modal/ModalProvider";
import SiteStateProvider from "@/context/site/SiteStateProvider";

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
