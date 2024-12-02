import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		InputWrapperProps {}

export interface RHFTextareaProps extends Omit<TextareaProps, "onChange"> {
	name: string;
}
