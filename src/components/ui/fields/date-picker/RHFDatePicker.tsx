import { Controller, useFormContext } from "react-hook-form";

import type { RHFDatePickerComponentProps } from "@/types/form/datePicker";

import DatePickerComponent from "./DatePickerComponent";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

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
					value={field.value as Value}
					onChange={field.onChange}
					ref={field.ref}
				/>
			)}
		/>
	);
};

export default RHFDatePicker;
