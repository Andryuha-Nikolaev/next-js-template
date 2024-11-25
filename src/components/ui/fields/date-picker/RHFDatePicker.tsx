import type { DateRange } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

import type { RHFDatePickerProps } from "@/types/form/datePicker";

import DatePicker from "./DatePicker";

const RHFDatePicker = ({ name, ...props }: RHFDatePickerProps) => {
	const { control } = useFormContext();

	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<DatePicker
						errorMessage={error?.message}
						{...props}
						config={
							props.mode === "single"
								? {
										mode: props.mode,
										singleValue: field.value as Date,
										singleOnChange: field.onChange,
									}
								: {
										mode: props.mode,
										rangeValue: field.value as DateRange | "",
										rangeOnChange: field.onChange,
									}
						}
						ref={field.ref}
					/>
				)}
			/>
		</>
	);
};

export default RHFDatePicker;
