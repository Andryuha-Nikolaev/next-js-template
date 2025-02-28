import type { HTMLInputTypeAttribute } from "react";

export type InputControlsProps = {
	type?: HTMLInputTypeAttribute;
	currentType?: HTMLInputTypeAttribute;
	togglePasswordVisibility?: () => void;
	onReset?: () => void;
	hiddenReset?: boolean;
	onOpenCalendar?: () => void;
	isFilled: boolean;
};
