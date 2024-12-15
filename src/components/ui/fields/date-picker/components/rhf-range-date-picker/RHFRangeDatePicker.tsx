import { useEffect } from "react";

import { useFormContext } from "react-hook-form";

import type { RHFRangeDatePickerProps } from "@/types/form/datePicker";

import RHFDatePicker from "../../RHFDatePicker";

const RHFRangeDatePicker = ({
	startDateName,
	endDateName,
}: RHFRangeDatePickerProps) => {
	const {
		watch,
		setError,
		clearErrors,
		formState: { submitCount },
	} = useFormContext();

	const startDate = watch(startDateName) as Date | null;
	const endDate = watch(endDateName) as Date | null;

	useEffect(() => {
		if (submitCount > 0 && !!startDate && !!endDate) {
			if (startDate.getTime() > endDate.getTime()) {
				setError(endDateName, {
					message: "Дата начала не может быть позже даты окончания",
				});
			} else {
				clearErrors(endDateName);
			}
		}
	}, [submitCount, startDate, endDate, endDateName]);

	return (
		<>
			<RHFDatePicker
				label="From"
				selectsStart
				startDate={startDate ?? undefined}
				endDate={endDate ?? undefined}
				maxDate={endDate ?? undefined}
				name={startDateName}
				time
				modalPositionY="top"
				modalPositionX="right"
			/>
			<RHFDatePicker
				label="To"
				selectsEnd
				startDate={startDate ?? undefined}
				endDate={endDate ?? undefined}
				minDate={startDate ?? undefined}
				name={endDateName}
				time
			/>
		</>
	);
};

export default RHFRangeDatePicker;
