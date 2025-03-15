import type React from "react";

import clsx from "clsx";

import siteConstants from "@/shared/constants/site";

import s from "./PageLayout.module.scss";

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div
			className={clsx(s.block, siteConstants.IS_FIXED_HEADER && s.fixedHeader)}
		>
			{children}
		</div>
	);
};
