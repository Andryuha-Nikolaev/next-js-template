import type { InputWrapperProps } from "./input";

export type DatePickerBaseProps = {
	isModal?: boolean;
	isCloseModalAfterSelect?: boolean;
	withInput?: boolean;
};

export type DatePickerProps = InputWrapperProps &
	DatePickerBaseProps & {
		mode: "single";
		value: Date | "";
		onChange: (date: Date | "") => void;
	};

export type RHFDatePickerProps = InputWrapperProps &
	DatePickerBaseProps & {
		mode: "single";
		name: string;
	};
