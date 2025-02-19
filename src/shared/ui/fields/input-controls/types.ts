import type { HTMLInputTypeAttribute } from "react";

export interface InputControlsProps {
	type?: HTMLInputTypeAttribute;
	currentType?: HTMLInputTypeAttribute;
	togglePassword?: () => void;
	onReset?: () => void;
	hiddenReset?: boolean;
	onOpenCalendar?: () => void;
	isFilled: boolean;
}
