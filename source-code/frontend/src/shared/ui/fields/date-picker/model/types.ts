import type { InputWrapperBaseProps } from "../../input-wrapper";

export type SingleValue = Date | null;

export type BaseDatePickerProps = InputWrapperBaseProps & {
	time?: boolean;
	modalPositionY?: "top" | "bottom";
	modalPositionX?: "left" | "right";
	inline?: boolean;
	withInput?: boolean;
	maskGuide?: boolean;
	disabled?: boolean;
	isAutoCorrectMinMaxDate?: boolean;
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
