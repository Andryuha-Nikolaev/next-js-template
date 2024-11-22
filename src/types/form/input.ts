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
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
		InputWrapperProps {
	onChange: (value: string) => void;
	mask?: MaskedInputProps["mask"];
	pipe?: MaskedInputProps["pipe"];
}

export interface RootInputProps extends Omit<InputProps, "onChange"> {
	name: string;
}
