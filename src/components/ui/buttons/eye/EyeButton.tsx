"use client";

import EyeClosed from "@/components/icons/eye/EyeClosed";
import EyeOpened from "@/components/icons/eye/EyeOpened";

import s from "./EyeButton.module.scss";

interface EyeButtonProps {
	onClick: () => void;
	isOpen: boolean;
}

const EyeButton = ({ isOpen, onClick }: EyeButtonProps) => {
	return (
		<button
			aria-label="Показать пароль"
			className={s.button}
			onClick={onClick}
			type="button"
		>
			{isOpen ? <EyeOpened /> : <EyeClosed />}
		</button>
	);
};

export default EyeButton;
