"use client";

import type { ButtonHTMLAttributes } from "react";

import EyeClosed from "@/shared/ui/buttons/eye/icons/eye/EyeClosed";
import EyeOpened from "@/shared/ui/buttons/eye/icons/eye/EyeOpened";

import s from "./EyeButton.module.scss";

interface EyeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen: boolean;
}

const EyeButton = ({ isOpen, onClick, ...restProps }: EyeButtonProps) => {
	return (
		<button
			aria-label="Показать пароль"
			className={s.button}
			onClick={onClick}
			type="button"
			{...restProps}
		>
			{isOpen ? <EyeOpened /> : <EyeClosed />}
		</button>
	);
};

export default EyeButton;
