import type { InputWrapperProps } from "./input";

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type BaseDatePickerProps = InputWrapperProps;

export type DatePickerComponentProps = BaseDatePickerProps & {
	value: Value;
	onChange: (value: Value) => void;
	time?: boolean;
};

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
