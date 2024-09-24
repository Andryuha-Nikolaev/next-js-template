import type React from "react";

import s from "./ContentLayout.module.scss";

interface ContentLayoutProps {
	children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
	return <div className={s.block}>{children}</div>;
};

export default ContentLayout;
