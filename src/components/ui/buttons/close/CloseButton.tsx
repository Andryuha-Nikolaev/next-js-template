import clsx from "clsx";

import CloseIcon from "@/icons/close/CloseIcon";

import s from "./CloseButton.module.scss";

interface CloseButtonProps {
	onClick: () => void;
	className?: string;
}

const CloseButton = ({ onClick, className }: CloseButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(s.button, className)}
			aria-label="Закрыть"
		>
			<CloseIcon />
		</button>
	);
};

export default CloseButton;
