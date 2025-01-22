import type { Metadata } from "next";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import { getDataWithCache } from "@/services/getDataWithCacheService";
import type { CustomPage } from "@/types/customPage";

interface CustomPageProps {
	params: {
		id: string;
	};
}

export const revalidate = 0;

export async function generateMetadata({
	params: { id },
}: CustomPageProps): Promise<Metadata> {
	const data = await getDataWithCache<CustomPage>(`/custom-page/${id}`);

	const {
		data: { title },
	} = data;

	const meta: Metadata = {
		title: title,
	};

	return meta;
}

export default async function TestCustomPage({
	params: { id },
}: CustomPageProps) {
	const data = await getDataWithCache<CustomPage>(`/custom-page/${id}`);

	return (
		<ContentLayout>
			<h1 style={{ textAlign: "center" }}>
				{data.data.title} id:{id}
			</h1>
		</ContentLayout>
	);
}
