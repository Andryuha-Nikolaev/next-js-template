import type React from "react";
import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface CheckboxProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	isError?: boolean;
}

export interface RHFCheckboxProps extends CheckboxProps {
	name: string;
}

export interface CheckboxGroupProps extends InputWrapperProps {
	items: { value: string; label: string | React.ReactNode }[];
	onChange: (value: string[]) => void;
	value: string[];
	chooseAllCheckbox?: string;
}

export interface RHFCheckboxGroupProps
	extends Omit<CheckboxGroupProps, "errorMessage" | "onChange" | "value"> {
	name: string;
}
