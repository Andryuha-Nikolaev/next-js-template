"use client";

import type React from "react";

import clsx from "clsx";
import SimpleBar from "simplebar-react";

import s from "./CustomScrollLayout.module.scss";

interface CustomScrollLayoutProps {
	children: React.ReactNode;
	className: string;
}

const CustomScrollLayout = ({
	children,
	className,
}: CustomScrollLayoutProps) => {
	return (
		<SimpleBar
			autoHide={false}
			className={clsx(s.wrapper, className, "custom-scrollbar-layout")}
		>
			{children}
		</SimpleBar>
	);
};

export default CustomScrollLayout;
