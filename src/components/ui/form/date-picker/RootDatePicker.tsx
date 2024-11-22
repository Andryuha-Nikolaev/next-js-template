import { Controller, useFormContext } from "react-hook-form";

import type { RootDatePickerProps } from "@/types/form/datePicker";

import DatePicker from "./DatePicker";

const RootDatePicker = ({
	name,

	...props
}: RootDatePickerProps) => {
	const { control } = useFormContext();

	return (
		<>
			{props.mode === "single" && (
				<Controller
					name={name ?? "date"}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<DatePicker
							errorMessage={error?.message}
							{...props}
							value={field.value as Date}
							onChange={field.onChange}
						/>
					)}
				/>
			)}
		</>
	);
};

export default RootDatePicker;
