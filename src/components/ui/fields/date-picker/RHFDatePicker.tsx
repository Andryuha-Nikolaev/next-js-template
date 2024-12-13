import { Controller, useFormContext } from "react-hook-form";

import type { RHFDatePickerComponentProps } from "@/types/form/datePicker";

import DatePickerComponent from "./DatePickerComponent";

const RHFDatePicker = ({ name, ...props }: RHFDatePickerComponentProps) => {
	const { control, watch } = useFormContext();

	console.log(watch(name));

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<DatePickerComponent
					errorMessage={error?.message}
					{...props}
					variant={{
						mode: "single",
						value: field.value as Date,
						onChange: field.onChange,
					}}
					ref={field.ref}
				/>
			)}
		/>
	);
};

export default RHFDatePicker;
