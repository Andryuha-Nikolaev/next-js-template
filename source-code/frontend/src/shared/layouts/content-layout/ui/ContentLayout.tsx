import type React from "react";

import clsx from "clsx";

import s from "./ContentLayout.module.scss";

type ContentLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export const ContentLayout = ({ children, className }: ContentLayoutProps) => {
	return <div className={clsx(s.block, className)}>{children}</div>;
};
