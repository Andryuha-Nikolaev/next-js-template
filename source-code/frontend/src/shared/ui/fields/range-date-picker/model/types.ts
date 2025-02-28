import type { BaseDatePickerProps } from "../../date-picker";

export type RHFRangeDatePickerProps = BaseDatePickerProps & {
	startDateName: string;
	endDateName: string;
	startLabel?: string;
	endLabel?: string;
};
