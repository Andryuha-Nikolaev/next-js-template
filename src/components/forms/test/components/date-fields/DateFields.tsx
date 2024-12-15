"use client";

import { useFormContext } from "react-hook-form";

import RHFDatePicker from "@/components/ui/fields/date-picker/RHFDatePicker";
import { FieldName } from "@/constants/fields";

const DateFields = () => {
	const { watch } = useFormContext();

	const startDate = watch(FieldName.START_DATE) as Date | undefined;
	const endDate = watch(FieldName.END_DATE) as Date | undefined;

	console.log(startDate);

	return (
		<>
			<RHFDatePicker label="Просто дата" name={FieldName.DATE} />
			<RHFDatePicker
				label="From"
				selectsStart
				startDate={startDate}
				endDate={endDate}
				maxDate={endDate}
				name={FieldName.START_DATE}
				time
				modalPositionY="top"
				modalPositionX="right"
			/>
			<RHFDatePicker
				label="To"
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
				name={FieldName.END_DATE}
				time
			/>
		</>
	);
};

export default DateFields;
