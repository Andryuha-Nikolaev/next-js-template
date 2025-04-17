import type React from "react";

import clsx from "clsx";
import Link from "next/link";

import s from "./RootLink.module.scss";

import type { RootLinkProps } from "../model/types";

export const RootLink = <C extends React.ElementType = typeof Link>({
	as,
	children,
	href,
	className,
	colorVariant = "var1",
	...restProps
}: RootLinkProps<C>) => {
	const Component = as || Link;

	return (
		<Component
			className={clsx(s.link, s[colorVariant], className && className)}
			href={href}
			{...(as === "a" && { target: "_blank", rel: "noreferrer" })}
			{...restProps}
		>
			{children}
		</Component>
	);
};
