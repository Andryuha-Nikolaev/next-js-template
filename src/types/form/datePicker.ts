import type { DateTimePickerProps } from "react-datetime-picker";

import type { InputWrapperProps } from "./input";

export type DatePickerComponentProps = DateTimePickerProps & InputWrapperProps;

export type RHFDatePickerComponentProps = DateTimePickerProps &
	InputWrapperProps & { name: string };
