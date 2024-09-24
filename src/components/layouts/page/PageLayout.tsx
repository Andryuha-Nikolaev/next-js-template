import type React from "react";

import s from "./PageLayout.module.scss";

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return <div className={s.block}>{children}</div>;
};

export default PageLayout;
