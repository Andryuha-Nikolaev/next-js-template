import type { DayPickerProps } from "react-day-picker";

import type { InputWrapperProps } from "./input";

export type DatePickerProps = InputWrapperProps & DayPickerProps;

export type RootDatePickerProps = DatePickerProps & {
	nameFrom?: string;
	nameTo?: string;
	name?: string;
};
