import type { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import CloseIcon from "@/shared/ui/buttons/close/icons/close-icon/CloseIcon";

import s from "./CloseButton.module.scss";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

const CloseButton = ({
	onClick,
	className,
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
			<CloseIcon />
		</button>
	);
};

export default CloseButton;
