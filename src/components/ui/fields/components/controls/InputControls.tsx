import CalendarIcon from "@/components/icons/calendar/CalendarIcon";
import CloseButton from "@/components/ui/buttons/close/CloseButton";
import EyeButton from "@/components/ui/buttons/eye/EyeButton";
import type { InputControlsProps } from "@/types/form/input";

import s from "./InputControls.module.scss";

const InputControls = ({
	type,
	currentType,
	isFilled,
	togglePassword,
	onOpenCalendar,
	onReset,
}: InputControlsProps) => {
	return (
		<span className={s.buttons}>
			{type === "password" && !!togglePassword && isFilled && (
				<EyeButton
					onMouseDown={(e) => {
						e.preventDefault();
					}}
					onClick={togglePassword}
					isOpen={currentType === "text"}
				/>
			)}
			{!!onOpenCalendar && (
				<button
					className={s.calendar}
					aria-label="Календарь"
					onMouseDown={(e) => {
						e.preventDefault();
					}}
					onClick={() => {
						onOpenCalendar();
					}}
					type="button"
				>
					<CalendarIcon />
				</button>
			)}
			{!!onReset && isFilled && (
				<CloseButton
					onMouseDown={(e) => {
						e.preventDefault();
					}}
					className={s.reset}
					onClick={onReset}
				/>
			)}
		</span>
	);
};

export default InputControls;
