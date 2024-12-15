import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPage } from "@/services/customPageService";
import { isProd } from "@/utils/environment/isProd";

import TestContent from "./components/content/TestContent";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
	if (isProd()) {
		notFound();
	}

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
			<h1 style={{ textAlign: "center" }}>{data.data.title}</h1>
			<TestContent />
		</>
	);
}
