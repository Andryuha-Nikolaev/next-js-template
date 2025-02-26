import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../input-wrapper";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		InputWrapperBaseProps {}

export interface RHFTextareaProps extends Omit<TextareaProps, "onChange"> {
	name: string;
}
