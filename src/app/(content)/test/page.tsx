import type { Metadata } from "next";

import routesConstants from "@/constants/routes";
import TestBlock from "@/sheets/test/TestBlock";

export const metadata: Metadata = {
	title: routesConstants.TEST.metaTitle,
};

export default function Test() {
	return (
		<div>
			<TestBlock />
		</div>
	);
}
