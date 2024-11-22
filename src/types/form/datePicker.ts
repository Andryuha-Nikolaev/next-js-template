import type { InputWrapperProps } from "./input";

export type DatePickerProps = InputWrapperProps & {
	mode: "single";
	value: Date | "";
	onChange: (date: Date | "") => void;
};

export type RHFDatePickerProps = InputWrapperProps & {
	mode: "single";
	name: string;
};
