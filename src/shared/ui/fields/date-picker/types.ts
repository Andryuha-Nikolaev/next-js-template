import type { InputWrapperProps } from "../input-wrapper/types";

export type SingleValue = Date | null;
export type RangeValue = [Date | null, Date | null];

export type BaseDatePickerProps = InputWrapperProps & {
	time?: boolean;
	modalPositionY?: "top" | "bottom";
	modalPositionX?: "left" | "right";
	inline?: boolean;
	withInput?: boolean;
	maskGuide?: boolean;
	disabled?: boolean;
};

export type SingleDatePickerProps = BaseDatePickerProps & {
	selectsStart?: boolean;
	selectsEnd?: boolean;
	startDate?: Date;
	endDate?: Date;
	minDate?: Date;
	maxDate?: Date;
};

export type DatePickerComponentProps = SingleDatePickerProps & {
	value: SingleValue;
	onChange: (date: SingleValue) => void;
};

export type RHFDatePickerComponentProps = SingleDatePickerProps & {
	name: string;
};

export type RHFRangeDatePickerProps = BaseDatePickerProps & {
	startDateName: string;
	endDateName: string;
	startLabel?: string;
	endLabel?: string;
};
