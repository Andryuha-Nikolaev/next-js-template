import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import type { MaskedInputProps } from "react-text-mask";

export interface InputWrapperProps {
	label?: string;
	errorMessage?: string;
	isRequired?: boolean;
}

export interface InputControlsProps {
	type?: HTMLInputTypeAttribute;
	currentType?: HTMLInputTypeAttribute;
	togglePassword?: () => void;
	onReset?: () => void;
	onOpenCalendar?: () => void;
	isFilled: boolean;
}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onLabelFocus?: () => void;
	onLabelBlur?: () => void;
	onOpenCalendar?: () => void;
	mask?: MaskedInputProps["mask"];
	pipe?: MaskedInputProps["pipe"];
}

export interface RHFInputProps extends Omit<InputProps, "onChange"> {
	name: string;
}
