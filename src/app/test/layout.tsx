import { notFound } from "next/navigation";

import { isProd } from "@/utils/environment/isProd";

export default function TestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (isProd()) {
		notFound();
	}

	return <>{children}</>;
}
