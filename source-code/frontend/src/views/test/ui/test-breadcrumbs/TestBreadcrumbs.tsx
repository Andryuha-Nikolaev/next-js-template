import { Breadcrumbs } from "$shared/ui/breadcrumbs";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const TestBreadcrumbs = () => {
	return (
		<TestPageWrapper title="Breadcrumbs">
			<Breadcrumbs
				breadcrumbs={[
					{ name: "Тест", url: "/test" },
					{ name: "Тест1", url: "/test1" },
					{ name: "Тест2", url: "/test2" },
					{
						name: "ТестТестТестТестТестТестТестТестТестТестТестТестТест Тест Тест Тест Тест Тест Тест Тест Тест",
						url: "/test3",
					},
				]}
			/>
		</TestPageWrapper>
	);
};
