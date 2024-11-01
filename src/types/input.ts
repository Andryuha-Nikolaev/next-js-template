import type { InputHTMLAttributes } from "react";

import type { MaskedInputProps } from "react-text-mask";

export interface InputWrapperProps {
	label?: string;
	errorMessage?: string;
}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onReset?: () => void;
	mask?: MaskedInputProps["mask"];
}

export interface RootInputProps extends InputProps {
	name: string;
}
