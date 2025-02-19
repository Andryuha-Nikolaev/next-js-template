import type React from "react";
import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "../input/types";

export interface CheckboxProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	isError?: boolean;
	disabled?: boolean;
}

export interface RHFCheckboxProps extends CheckboxProps {
	name: string;
}

export interface CheckboxGroupProps extends InputWrapperProps {
	disabled?: boolean;
	items: {
		value: string;
		label: string | React.ReactNode;
		disabled?: boolean;
	}[];
	onChange: (value: string[]) => void;
	value: string[];
	chooseAllCheckbox?: string;
	chooseAllCheckboxDisabled?: boolean;
}

export interface RHFCheckboxGroupProps
	extends Omit<CheckboxGroupProps, "errorMessage" | "onChange" | "value"> {
	name: string;
}
