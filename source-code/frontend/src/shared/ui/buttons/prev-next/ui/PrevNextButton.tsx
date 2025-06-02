import clsx from "clsx";

import PrevNextIcon from "./icons/PrevNextIcon";
import s from "./PrevNextButton.module.scss";

interface PrevNextButtonProps {
	direction: "prev" | "next";
	onClick: () => void;
	disabled?: boolean;
}

export const PrevNextButton = ({
	direction,
	onClick,
	disabled,
}: PrevNextButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={clsx(s.button, s[direction])}
			aria-label={direction === "prev" ? "Назад" : "Вперед"}
			disabled={disabled}
		>
			<PrevNextIcon />
		</button>
	);
};
