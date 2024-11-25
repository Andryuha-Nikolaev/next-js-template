import type { DateRange } from "react-day-picker";

import type { InputWrapperProps } from "./input";

export type DatePickerBaseProps = {
	isModal?: boolean;
	isCloseModalAfterSelect?: boolean;
	withInput?: boolean;
	modalPosition?: "top" | "bottom";
};

export type DatePickerProps = InputWrapperProps &
	DatePickerBaseProps & {
		config:
			| {
					mode: "single";
					singleValue: Date | "";
					singleOnChange: (date: Date | "") => void;
			  }
			| {
					mode: "range";
					rangeValue: DateRange | "";
					rangeOnChange: (date: DateRange | "") => void;
			  };
	};

export type RHFDatePickerProps = InputWrapperProps &
	DatePickerBaseProps & {
		mode: "single" | "range";
		name: string;
	};
