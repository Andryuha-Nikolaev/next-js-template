import { useFormContext } from "react-hook-form";

import { RHFDatePicker } from "../../date-picker";
import type { RHFRangeDatePickerProps } from "../model/types";

export const RHFRangeDatePicker = ({
	startDateName,
	endDateName,
	startLabel = "Дата начала",
	endLabel = "Дата окончания",
	...restProps
}: RHFRangeDatePickerProps) => {
	const { watch } = useFormContext();

	const startDate = watch(startDateName) as Date | null;
	const endDate = watch(endDateName) as Date | null;

	return (
		<>
			<RHFDatePicker
				label={startLabel}
				selectsStart
				startDate={startDate ?? undefined}
				endDate={endDate ?? undefined}
				maxDate={endDate ?? undefined}
				name={startDateName}
				{...restProps}
			/>
			<RHFDatePicker
				label={endLabel}
				selectsEnd
				startDate={startDate ?? undefined}
				endDate={endDate ?? undefined}
				minDate={startDate ?? undefined}
				name={endDateName}
				{...restProps}
			/>
		</>
	);
};
