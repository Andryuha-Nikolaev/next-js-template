import { Controller, useFormContext } from "react-hook-form";

import { Checkbox } from "./Checkbox";

import type { RHFCheckboxProps } from "../model/types";

export const RHFCheckbox = ({ name, ...restProps }: RHFCheckboxProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Checkbox
					checked={field.value === true}
					errorMessage={error?.message}
					{...field}
					{...restProps}
				/>
			)}
		/>
	);
};
