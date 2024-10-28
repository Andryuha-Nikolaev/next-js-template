import type React from "react";

import clsx from "clsx";

import siteConstants from "@/constants/site";

import s from "./PageLayout.module.scss";

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div
			className={clsx(s.block, siteConstants.IS_FIXED_HEADER && s.fixedHeader)}
		>
			{children}
		</div>
	);
};

export default PageLayout;
