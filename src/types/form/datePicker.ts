import type { InputWrapperProps } from "./input";

export type SingleValue = Date | null;
export type RangeValue = [Date | null, Date | null];

export type BaseDatePickerProps = InputWrapperProps & {
	time?: boolean;
	modules?: {
		input?: {
			enabled?: boolean;
			readOnly?: boolean;
		};
		calendar?: {
			enabled?: boolean;
			inline?: boolean;
			heading?: boolean;
		};
	};
};

type Mode =
	| {
			mode: "single";
			value: SingleValue;
			onChange: (date: SingleValue) => void;
			selectsStart?: boolean;
			selectsEnd?: boolean;
			startDate?: Date;
			endDate?: Date;
			minDate?: Date;
			maxDate?: Date;
	  }
	| {
			mode: "range";
			value: RangeValue;
			onChange: (date: RangeValue) => void;
	  };

export type DatePickerComponentProps = BaseDatePickerProps & Mode;

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
