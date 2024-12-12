import type { InputWrapperProps } from "./input";

export type BaseDatePickerProps = InputWrapperProps;

export type DatePickerComponentProps = BaseDatePickerProps & {
	variant: {
		mode: "single";
		value: Date | null;
		onChange: (date: Date | null) => void;
	};
	time?: boolean;
};

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
