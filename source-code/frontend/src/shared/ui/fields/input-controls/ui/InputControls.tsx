import CloseButton from "@/shared/ui/buttons/close/CloseButton";
import EyeButton from "@/shared/ui/buttons/eye/EyeButton";

import CalendarIcon from "./icons/calendar-icon/CalendarIcon";
import s from "./InputControls.module.scss";

import type { InputControlsProps } from "../model/types";

export const InputControls = ({
	type,
	currentType,
	isFilled,
	togglePasswordVisibility,
	onOpenCalendar,
	onReset,
	hiddenReset,
}: InputControlsProps) => {
	return (
		<span className={s.buttons}>
			{type === "password" && !!togglePasswordVisibility && isFilled && (
				<EyeButton
					onMouseDown={(e) => {
						e.preventDefault();
						togglePasswordVisibility();
					}}
					isVisible={currentType === "text"}
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
