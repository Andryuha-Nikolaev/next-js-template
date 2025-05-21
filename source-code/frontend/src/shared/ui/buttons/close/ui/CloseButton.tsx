import type { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import s from "./CloseButton.module.scss";
import { CloseIcon } from "./icons/close-icon/CloseIcon";

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

export const CloseButton = ({
	onClick,
	className,
	children,
	...restProps
}: CloseButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(s.button, className)}
			aria-label="Закрыть"
			type="button"
			{...restProps}
		>
			{children ?? <CloseIcon />}
		</button>
	);
};
