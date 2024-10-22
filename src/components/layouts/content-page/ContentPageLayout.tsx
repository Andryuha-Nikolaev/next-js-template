import type React from "react";

import s from "./ContentPageLayout.module.scss";

import ContentLayout from "../content/ContentLayout";

interface ContentPageLayoutProps {
	children: React.ReactNode;
}

const ContentPageLayout = ({ children }: ContentPageLayoutProps) => {
	return (
		<div className={s.block}>
			<ContentLayout>{children}</ContentLayout>
		</div>
	);
};

export default ContentPageLayout;
