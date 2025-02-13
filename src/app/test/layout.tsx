import { notFound } from "next/navigation";

import { isProd } from "@/shared/utils/environment/isProd";

export default function TestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (isProd()) {
		notFound();
	}

	return <div>{children}</div>;
}
