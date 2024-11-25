import { Controller, useFormContext } from "react-hook-form";

import type { RHFDatePickerProps } from "@/types/form/datePicker";

import DatePicker from "./DatePicker";

const RHFDatePicker = ({ name, ...props }: RHFDatePickerProps) => {
	const { control } = useFormContext();

	return (
		<>
			{props.mode === "single" && (
				<Controller
					name={name}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<DatePicker
							errorMessage={error?.message}
							{...props}
							value={field.value as Date}
							onChange={field.onChange}
							ref={field.ref}
						/>
					)}
				/>
			)}
		</>
	);
};

export default RHFDatePicker;
