import { Controller, useFormContext } from "react-hook-form";

import type { RootDatePickerProps } from "@/types/form/datePicker";

import DatePicker from "./DatePicker";

const RootDatePicker = ({ name, ...props }: RootDatePickerProps) => {
	const { control, watch } = useFormContext();

	console.log(watch(name));

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
							value={field.value as Date | undefined}
							onChange={(value) => {
								console.log(value);

								field.onChange(value);
							}}
							ref={field.ref}
						/>
					)}
				/>
			)}
		</>
	);
};

export default RootDatePicker;
