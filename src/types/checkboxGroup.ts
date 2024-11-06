import type { InputWrapperProps } from "./input";

export interface CheckboxGroupProps extends InputWrapperProps {
	items: string[];
	onChange: (value: string[]) => void;
	value: string[];
	chooseAllCheckbox?: string;
}

export interface RootCheckboxGroupProps
	extends Omit<InputWrapperProps, "errorMessage"> {
	items: string[];
	name: string;
	chooseAllCheckbox?: string;
}
