"use client";

import type { ButtonHTMLAttributes } from "react";

import s from "./EyeButton.module.scss";
import { EyeClosed } from "./icons/eye/EyeClosed";
import { EyeOpened } from "./icons/eye/EyeOpened";

interface EyeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isVisible: boolean;
}

export const EyeButton = ({
	isVisible,
	onClick,
	...restProps
}: EyeButtonProps) => {
	return (
		<button
			aria-label="Показать пароль"
			className={s.button}
			onClick={onClick}
			type="button"
			{...restProps}
		>
			{isVisible ? <EyeOpened /> : <EyeClosed />}
		</button>
	);
};
