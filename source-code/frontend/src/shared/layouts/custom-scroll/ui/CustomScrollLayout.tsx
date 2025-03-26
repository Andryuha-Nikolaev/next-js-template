"use client";

import type React from "react";

import clsx from "clsx";
import SimpleBar from "simplebar-react";

type CustomScrollLayoutProps = {
	children: React.ReactNode;
	className: string;
};

export const CustomScrollLayout = ({
	children,
	className,
}: CustomScrollLayoutProps) => {
	return (
		<SimpleBar
			autoHide={false}
			className={clsx(className, "custom-scrollbar-layout")}
		>
			{children}
		</SimpleBar>
	);
};
