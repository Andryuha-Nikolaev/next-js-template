import clsx from "clsx";

import { Spinner } from "$shared/ui/spinner";

import s from "./RootButton.module.scss";

import type { RootButtonProps } from "../model/types";

export const RootButton = <C extends React.ElementType = "button">({
	as,
	children,
	className,
	colorVariant = "var1",
	size = "md",
	isLoading,
	Icon,
	iconPosition = "left",
	...restProps
}: RootButtonProps<C>) => {
	const buttonContent = (
		<>
			{isLoading && (
				<span className={s.spinner}>
					<Spinner />
				</span>
			)}
			{Icon && <span className={clsx(s.icon, s[iconPosition])}>{Icon}</span>}
			{children}
		</>
	);

	const Component = as || "button";
	return (
		<Component
			className={clsx(
				s.button,
				s[colorVariant],
				s[size],
				isLoading && s.loading,
				className && className
			)}
			{...(as === "button" && { type: "button" })}
			{...(as === "a" && { target: "_blank", rel: "noreferrer" })}
			{...restProps}
		>
			{buttonContent}
		</Component>
	);
};
