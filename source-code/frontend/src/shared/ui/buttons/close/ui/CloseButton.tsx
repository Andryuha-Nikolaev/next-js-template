import type { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import s from "./CloseButton.module.scss";
import { CloseIcon } from "./icons/close-icon/CloseIcon";

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	colorVariant?: "transparent" | "var1" | "var2" | "var3";
	size?: "sm" | "md" | "lg" | "auto";
};

export const CloseButton = ({
	onClick,
	className,
	children,
	colorVariant = "transparent",
	size = "auto",
	...restProps
}: CloseButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(s.button, className, s[colorVariant], s[size])}
			aria-label="Закрыть"
			type="button"
			{...restProps}
		>
			{children ?? <CloseIcon />}
		</button>
	);
};
