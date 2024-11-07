import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		InputWrapperProps {
	onReset?: () => void;
}

export interface RootTextareaProps extends Omit<TextareaProps, "onReset"> {
	name: string;
}
