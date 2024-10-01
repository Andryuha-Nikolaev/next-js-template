import BurgerIcon from "@/icons/burger/BurgerIcon";

import s from "./BurgerButton.module.scss";

interface BurgerButtonProps {
	onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
	return (
		<button onClick={onClick} className={s.button} aria-label="Открыть меню">
			<BurgerIcon />
		</button>
	);
};

export default BurgerButton;
