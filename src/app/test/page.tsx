import type { Metadata } from "next";

import routesConstants from "@/constants/routes";

export const metadata: Metadata = {
	title: routesConstants.TEST.title,
};

export default function Test() {
	return <div>test</div>;
}
