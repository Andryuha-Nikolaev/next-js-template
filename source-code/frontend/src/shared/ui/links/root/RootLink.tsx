// type AsProp<C extends React.ElementType> = {
// 	as?: C;
// };

// type PropsToElement<C extends React.ElementType, P> = P &
// 	AsProp<C> &
// 	Omit<React.ComponentProps<C>, keyof AsProp<C> | keyof P>;

// type RootLinkProps<C extends React.ElementType> = PropsToElement<
// 	C,
// 	{
// 		children: React.ReactNode;
// 	}
// >;

// const RootLink = <C extends React.ElementType = "button">({
// 	as,
// 	children,
// 	...restProps
// }: RootLinkProps<C>) => {
// 	const Component = as || "button";
// 	return <Component {...restProps}>{children}</Component>;
// };

// export default RootLink;

import type React from "react";

import clsx from "clsx";
import Link from "next/link";

import s from "./RootLink.module.scss";

type AsProp<C extends React.ElementType> = {
	as?: C;
};

type PropsToElement<C extends React.ElementType, P> = P &
	AsProp<C> &
	Omit<React.ComponentProps<C>, keyof AsProp<C> | keyof P>;

type RootLinkProps<C extends React.ElementType> = PropsToElement<
	C,
	{
		children: React.ReactNode;

		colorVariant?: "var1" | "var2" | "var3";
	}
>;

const RootLink = <C extends React.ElementType = typeof Link>({
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
			{...restProps}
		>
			{children}
		</Component>
	);
};

export default RootLink;
