import { Controller, useFormContext } from "react-hook-form";

import { CheckboxGroup } from "./CheckboxGroup";

import type { RHFCheckboxGroupProps } from "../model/types";

export const RHFCheckboxGroup = ({
	name,
	...restProps
}: RHFCheckboxGroupProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<CheckboxGroup
					ref={field.ref}
					value={field.value as string[]}
					onChange={(e) => field.onChange(e)}
					errorMessage={error?.message}
					{...restProps}
				/>
			)}
		/>
	);
};
