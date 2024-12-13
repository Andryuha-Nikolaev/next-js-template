import { Controller, useFormContext } from "react-hook-form";

import type {
	RangeValue,
	RHFDatePickerComponentProps,
} from "@/types/form/datePicker";

import DatePickerComponent from "./DatePickerComponent";

const RHFRangeDatePicker = ({
	name,
	...props
}: RHFDatePickerComponentProps) => {
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
					value={field.value as RangeValue}
					onChange={field.onChange}
					ref={field.ref}
					mode="range"
				/>
			)}
		/>
	);
};

export default RHFRangeDatePicker;
