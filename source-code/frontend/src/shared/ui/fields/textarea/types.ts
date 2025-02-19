import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperProps } from "../input-wrapper/types";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		InputWrapperProps {}

export interface RHFTextareaProps extends Omit<TextareaProps, "onChange"> {
	name: string;
}
