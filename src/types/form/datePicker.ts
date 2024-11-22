import type { InputWrapperProps } from "./input";

export type DatePickerProps = InputWrapperProps & {
	mode: "single";
	value: string;
	onChange: (date: string) => void;
};

export type RootDatePickerProps = InputWrapperProps & {
	mode: "single";
	name: string;
};
