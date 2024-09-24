import type { Metadata } from "next";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import routesConstants from "@/constants/routes";

export const metadata: Metadata = {
	title: routesConstants.TEST.title,
};

export default function Test() {
	return (
		<div>
			<ContentLayout>test</ContentLayout>
		</div>
	);
}
