import { Controller, useFormContext } from "react-hook-form";

import { DatePickerComponent } from "./DatePickerComponent";

import type { RHFDatePickerComponentProps, SingleValue } from "../model/types";

export const RHFDatePicker = ({
	name,
	...props
}: RHFDatePickerComponentProps) => {
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
