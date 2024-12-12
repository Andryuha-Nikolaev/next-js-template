import type { InputWrapperProps } from "./input";

export type BaseDatePickerProps = InputWrapperProps;

export type SingleValue = Date | null;
export type RangeValue = { from: Date | undefined; to?: Date } | null;

export type DatePickerComponentProps = BaseDatePickerProps & {
	variant:
		| {
				mode: "single";
				value: SingleValue;
				onChange: (date: SingleValue) => void;
		  }
		| {
				mode: "range";
				value: RangeValue;
				onChange: (date: RangeValue) => void;
		  };

	time?: boolean;
};

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
