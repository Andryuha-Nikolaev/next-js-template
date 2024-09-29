import CloseIcon from "@/icons/close/CloseIcon";

import s from "./CloseButton.module.scss";

interface CloseButtonProps {
	onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
	return (
		<button onClick={onClick} className={s.button} aria-label="Закрыть">
			<CloseIcon />
		</button>
	);
};

export default CloseButton;
