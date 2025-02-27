import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	InputWrapperBaseProps;

export type RHFTextareaProps = Omit<TextareaProps, "onChange"> & {
	name: string;
};
