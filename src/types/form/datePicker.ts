import type { InputWrapperProps } from "./input";

type ValuePiece = Date | null;

export type Value = [ValuePiece, ValuePiece] | null;

export type BaseDatePickerProps = InputWrapperProps & {
	range?: boolean;
};

export type DatePickerComponentProps = BaseDatePickerProps & {
	value: Value;
	onChange: (value: Value) => void;
	time?: boolean;
};

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
