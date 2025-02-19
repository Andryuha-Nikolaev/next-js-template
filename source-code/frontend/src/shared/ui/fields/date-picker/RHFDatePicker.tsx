import { Controller, useFormContext } from "react-hook-form";

import type {
	RHFDatePickerComponentProps,
	SingleValue,
} from "@/shared/ui/fields/date-picker/types";

import DatePickerComponent from "./DatePickerComponent";

const RHFDatePicker = ({ name, ...props }: RHFDatePickerComponentProps) => {
	const { control } = useFormContext();

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
				/>
			)}
		/>
	);
};

export default RHFDatePicker;
