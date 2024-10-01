import type React from "react";
import { type ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import s from "./RootButton.module.scss";

interface RootButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	colorVariant?: "var1" | "var2" | "var3";
	size?: "small" | "middle" | "large";
	Icon?: React.ReactNode;
}

const RootButton = (props: RootButtonProps) => {
	const {
		className,
		colorVariant = "var1",
		size = "large",
		type = "button",
		children,
		Icon,
		...buttonProps
	} = props;

	return (
		<button
			{...buttonProps}
			type={type}
			className={clsx(s.button, s[colorVariant], s[size], className)}
		>
			{Icon && <span className={s.icon}>{Icon}</span>} {children}
		</button>
	);
};

export default RootButton;
