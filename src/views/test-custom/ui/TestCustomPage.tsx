import parse from "html-react-parser";

import ContentLayout from "@/components/layouts/content/ContentLayout";

import s from "./TestCustomPage.module.scss";
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
			<div className={s.content}>{parse(text)}</div>
		</ContentLayout>
	);
};
