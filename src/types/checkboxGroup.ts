import type React from "react";

import type { InputWrapperProps } from "./input";

export interface CheckboxGroupProps extends InputWrapperProps {
	items: { value: string; label: string | React.ReactNode }[];
	onChange: (value: string[]) => void;
	value: string[];
	chooseAllCheckbox?: string;
}

export interface RootCheckboxGroupProps
	extends Omit<CheckboxGroupProps, "errorMessage" | "onChange" | "value"> {
	name: string;
}
