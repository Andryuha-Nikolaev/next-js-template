"use client";

import { useFormContext } from "react-hook-form";

import RHFDatePicker from "@/components/ui/fields/date-picker/RHFDatePicker";
import { FieldName } from "@/constants/fields";

import type { FormSchemaType } from "../../schema";

const DateFields = () => {
	const { watch } = useFormContext<FormSchemaType>();

	const startDate = watch(FieldName.START_DATE) as Date | null;
	const endDate = watch(FieldName.END_DATE) as Date | null;

	return (
		<>
			<RHFDatePicker
				label="From"
				selectsStart
				startDate={startDate ?? undefined}
				endDate={endDate ?? undefined}
				maxDate={endDate ?? undefined}
				name={FieldName.START_DATE}
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
				name={FieldName.END_DATE}
				time
			/>
		</>
	);
};

export default DateFields;
