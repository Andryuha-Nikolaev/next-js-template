import { ContentLayout } from "@/shared/layouts/content-layout";

import s from "./TestPageWrapper.module.scss";

type TestPageWrapperProps = {
	children: React.ReactNode;
	title: string;
};

export const TestPageWrapper = ({ children, title }: TestPageWrapperProps) => {
	return (
		<ContentLayout>
			<div className={s.block}>
				<h2 className={s.title}>{title}</h2>

				{children}
			</div>
		</ContentLayout>
	);
};
