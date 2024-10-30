import type { Metadata } from "next";

import { getPage } from "@/services/customPageService";

import TestContent from "./components/content/TestContent";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
	const data = await getPage("1");

	const {
		data: { title },
	} = data;

	const meta: Metadata = {
		title: title,
	};

	return meta;
}

export default async function Test() {
	const data = await getPage("1");

	return (
		<>
			<div>{data.data.title}</div>
			<TestContent />
		</>
	);
}
