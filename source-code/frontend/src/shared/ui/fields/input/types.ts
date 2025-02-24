import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "../input-wrapper/types";

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onOpenCalendar?: () => void;
	onResetField?: () => void;
	hiddenReset?: boolean;
	mask?: string;
	unmask?: boolean;
}

export interface RHFInputProps extends Omit<InputProps, "onChange"> {
	name: string;
}
