import type { InputWrapperProps } from "./input";

export type SingleValue = Date | null;
export type RangeValue = [Date | null, Date | null];

export type BaseDatePickerProps = InputWrapperProps & {
	time?: boolean;

	selectsStart?: boolean;
	selectsEnd?: boolean;
	startDate?: Date;
	endDate?: Date;
	minDate?: Date;
	maxDate?: Date;
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

export type DatePickerComponentProps = BaseDatePickerProps & {
	value: SingleValue;
	onChange: (date: SingleValue) => void;
};

export type RHFDatePickerComponentProps = BaseDatePickerProps & {
	name: string;
};
