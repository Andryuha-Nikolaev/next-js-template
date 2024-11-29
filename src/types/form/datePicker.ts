import type { DatePickerProps } from "react-datepicker";

import type { InputWrapperProps } from "./input";

export type DatePickerComponentProps = DatePickerProps & InputWrapperProps;

export type RHFDatePickerComponentProps = DatePickerProps &
	InputWrapperProps & { name: string };
