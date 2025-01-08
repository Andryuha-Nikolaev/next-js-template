import { notFound } from "next/navigation";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import { isProd } from "@/utils/environment/isProd";

export default function TestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (isProd()) {
		notFound();
	}

	return <ContentLayout>{children}</ContentLayout>;
}
