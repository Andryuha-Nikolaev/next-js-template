import { BurgerIcon } from "./burger-icon/BurgerIcon";
import s from "./BurgerButton.module.scss";

interface BurgerButtonProps {
	onClick: () => void;
}

export const BurgerButton = ({ onClick }: BurgerButtonProps) => {
	return (
		<button onClick={onClick} className={s.button} aria-label="Открыть меню">
			<BurgerIcon />
		</button>
	);
};
