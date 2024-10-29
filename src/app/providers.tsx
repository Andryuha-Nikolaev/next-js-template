"use client";

import SiteStateProvider from "@/context/site/SiteStateProvider";

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return <SiteStateProvider>{children}</SiteStateProvider>;
}
