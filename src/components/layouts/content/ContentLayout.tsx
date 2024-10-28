import type React from "react";

import clsx from "clsx";

import s from "./ContentLayout.module.scss";

interface ContentLayoutProps {
	children: React.ReactNode;
	className?: string;
}

const ContentLayout = ({ children, className }: ContentLayoutProps) => {
	return (
		<div className={clsx(s.block, className && s[className])}>{children}</div>
	);
};

export default ContentLayout;
