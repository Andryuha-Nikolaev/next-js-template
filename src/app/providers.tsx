"use client";

import { Suspense } from "react";

import dynamic from "next/dynamic";

const AppProgressBar = dynamic(
	() => import("@/components/global/progress-bar/AppProgressBar")
);

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<>
			{children}
			<Suspense>
				<AppProgressBar />
			</Suspense>
		</>
	);
}
