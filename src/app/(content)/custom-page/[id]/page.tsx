import type { Metadata } from "next";

import HtmlContent from "@/components/global/html-content/HtmlContent";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { getPage } from "@/services/custom-page.service";
import type { IBreadcrumb } from "@/types/breadcrumbs";

interface CustomPageProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({
	params: { id },
}: CustomPageProps): Promise<Metadata> {
	const data = await getPage(id);

	const {
		data: { title, previewImage },
	} = data;

	console.log(previewImage);

	const meta: Metadata = previewImage
		? {
				title: title,
				openGraph: { images: previewImage },
			}
		: {
				title: title,
			};

	return meta;
}

export default async function CustomPage({ params: { id } }: CustomPageProps) {
	const data = await getPage(id);

	const {
		data: { title },
	} = data;

	const breadcrumbs: IBreadcrumb[] = [{ name: title, url: "" }];

	return (
		<>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<HtmlContent data={data} />
		</>
	);
}
