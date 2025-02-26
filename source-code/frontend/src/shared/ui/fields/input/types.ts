import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../input-wrapper";

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperBaseProps {
	onOpenCalendar?: () => void;
	onResetField?: () => void;
	hiddenReset?: boolean;
}

export interface RHFInputProps extends Omit<InputProps, "onChange"> {
	name: string;
}
