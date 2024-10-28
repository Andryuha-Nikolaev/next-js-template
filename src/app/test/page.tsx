import type { Metadata } from "next";

import routesConstants from "@/constants/routes";

import TestContent from "./components/content/TestContent";

export const metadata: Metadata = {
	title: routesConstants.TEST.metaTitle,
};

export default function Test() {
	return <TestContent />;
}
