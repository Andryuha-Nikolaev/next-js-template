import type { Metadata } from "next";

import { getDataWithCache } from "@/shared/api/services";
import { TestCustomPage, type CustomPage } from "@/views/test-custom";

type CustomPageProps = {
	params: {
		id: string;
	};
};

export async function generateMetadata({
	params: { id },
}: CustomPageProps): Promise<Metadata> {
	const data = await getDataWithCache<{ data: CustomPage }>(
		`custom-page/${id}`
	);

	const {
		data: { title },
	} = data;

	const meta: Metadata = {
		title: title,
	};

	return meta;
}

export default async function CustomPage({ params: { id } }: CustomPageProps) {
	const data = await getDataWithCache<{ data: CustomPage }>(
		`custom-page/${id}`
	);

	return <TestCustomPage slug={id} {...data} />;
}
