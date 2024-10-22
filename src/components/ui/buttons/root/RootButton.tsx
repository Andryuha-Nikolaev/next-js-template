import type React from "react";
import { type ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import s from "./RootButton.module.scss";

import Spinner from "../../spinners/Spinner";

interface RootButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: "div";
	colorVariant?: "var1" | "var2" | "var3";
	size?: "small" | "middle" | "large";
	isLoading?: boolean;
	Icon?: React.ReactNode;
}

const RootButton = (props: RootButtonProps) => {
	const {
		as,
		className,
		colorVariant = "var1",
		size = "large",
		type = "button",
		children,
		Icon,
		isLoading,
		...buttonProps
	} = props;

	const buttonContent = (
		<>
			{isLoading && (
				<span className={s.spinner}>
					<Spinner />
				</span>
			)}
			{Icon && <span className={s.icon}>{Icon}</span>} {children}
		</>
	);

	const buttonClassNames = clsx(
		s.button,
		s[colorVariant],
		s[size],
		isLoading && s.loading,
		className
	);

	return (
		<>
			{as === "div" ? (
				<div className={buttonClassNames}>{buttonContent}</div>
			) : (
				<button {...buttonProps} type={type} className={buttonClassNames}>
					{buttonContent}
				</button>
			)}
		</>
	);
};

export default RootButton;
