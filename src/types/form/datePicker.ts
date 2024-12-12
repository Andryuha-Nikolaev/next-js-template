import type { CalendarProps } from "react-calendar";

import type { InputWrapperProps } from "./input";

export type DatePickerComponentProps = CalendarProps & InputWrapperProps;

export type RHFDatePickerComponentProps = CalendarProps &
	InputWrapperProps & { name: string };
