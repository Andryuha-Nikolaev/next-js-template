import type { Metadata } from "next";
import Link from "next/link";

import routesConstants from "@/constants/routes";

export const metadata: Metadata = {
	title: routesConstants.TEST.metaTitle,
};

export default function Test() {
	return (
		<div>
			TEST
			<Link href={"/"}>HOME</Link>
		</div>
	);
}
