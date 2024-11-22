import type { TextareaHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface TextareaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">,
		InputWrapperProps {
	onChange: (value: string) => void;
}

export interface RootTextareaProps extends Omit<TextareaProps, "onChange"> {
	name: string;
}
