import type { InputWrapperBaseProps } from "../../input-wrapper";

export type CheckboxGroupProps = InputWrapperBaseProps & {
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
};

export type RHFCheckboxGroupProps = Omit<
	CheckboxGroupProps,
	"errorMessage" | "onChange" | "value"
> & {
	name: string;
};
