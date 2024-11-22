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
	isFilled: boolean;
}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onReset?: () => void;
	mask?: MaskedInputProps["mask"];
	pipe?: MaskedInputProps["pipe"];
}

export interface RootInputProps extends Omit<InputProps, "onReset"> {
	name: string;
}
