import CloseButton from "@/components/ui/buttons/close/CloseButton";
import EyeButton from "@/components/ui/buttons/eye/EyeButton";
import type { InputControlsProps } from "@/types/input";

import s from "./InputControls.module.scss";

const InputControls = ({
	type,
	currentType,
	isFilled,
	togglePassword,
	onReset,
}: InputControlsProps) => {
	return (
		<span className={s.buttons}>
			{type === "password" && !!togglePassword && (
				<EyeButton onClick={togglePassword} isOpen={currentType === "text"} />
			)}
			{!!onReset && isFilled && (
				<CloseButton className={s.reset} onClick={onReset} />
			)}
		</span>
	);
};

export default InputControls;
