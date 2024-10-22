import clsx from "clsx";

import PrevNextIcon from "@/icons/prev-next/PrevNextIcon";

import s from "./PrevNextButton.module.scss";

interface PrevNextButtonProps {
	direction: "prev" | "next";
	onClick: () => void;
}

const PrevNextButton = ({ direction, onClick }: PrevNextButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={clsx(s.block, s[direction])}
			aria-label={direction === "prev" ? "Назад" : "Вперед"}
		>
			<PrevNextIcon />
		</button>
	);
};

export default PrevNextButton;
