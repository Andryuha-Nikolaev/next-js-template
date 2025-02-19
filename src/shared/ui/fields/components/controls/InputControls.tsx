import CloseButton from "@/shared/ui/buttons/close/CloseButton";
import EyeButton from "@/shared/ui/buttons/eye/EyeButton";
import CalendarIcon from "@/shared/ui/fields/components/controls/icons/calendar-icon/CalendarIcon";
import type { InputControlsProps } from "@/types/form/input";

import s from "./InputControls.module.scss";

const InputControls = ({
	type,
	currentType,
	isFilled,
	togglePassword,
	onOpenCalendar,
	onReset,
	hiddenReset,
}: InputControlsProps) => {
	return (
		<span className={s.buttons}>
			{type === "password" && !!togglePassword && isFilled && (
				<EyeButton
					onMouseDown={(e) => {
						e.preventDefault();
						togglePassword();
					}}
					isOpen={currentType === "text"}
				/>
			)}
			{!!onOpenCalendar && (
				<button
					className={s.calendar}
					aria-label="Календарь"
					onMouseDown={(e) => {
						e.preventDefault();
						onOpenCalendar();
					}}
					type="button"
				>
					<CalendarIcon />
				</button>
			)}
			{!!onReset && isFilled && !hiddenReset && (
				<CloseButton
					onMouseDown={(e) => {
						e.preventDefault();
						onReset();
					}}
					className={s.reset}
				/>
			)}
		</span>
	);
};

export default InputControls;
