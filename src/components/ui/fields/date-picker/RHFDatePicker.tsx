import { Controller, useFormContext } from "react-hook-form";

import type {
	RHFDatePickerComponentProps,
	SingleValue,
} from "@/types/form/datePicker";

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
					value={field.value as SingleValue}
					onChange={field.onChange}
					ref={field.ref}
					mode="single"
				/>
			)}
		/>
	);
};

export default RHFDatePicker;
