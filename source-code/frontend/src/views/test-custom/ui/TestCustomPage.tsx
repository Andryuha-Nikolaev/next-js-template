import parse from "html-react-parser";

import { ContentLayout } from "$shared/layouts/content-layout";

import type { CustomPage } from "./types";

type TestCustomPageProps = {
	data: CustomPage;
	slug: string;
};

export const TestCustomPage = ({
	data: { title, text },
	slug,
}: TestCustomPageProps) => {
	return (
		<ContentLayout>
			<h1 style={{ textAlign: "center" }}>
				{title} slug:{slug}
			</h1>
			<div>{parse(text)}</div>
		</ContentLayout>
	);
};
