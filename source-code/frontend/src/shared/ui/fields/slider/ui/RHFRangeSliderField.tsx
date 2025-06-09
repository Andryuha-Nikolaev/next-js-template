import { Controller, useFormContext } from "react-hook-form";

import type { RHFSliderFieldProps } from "$shared/ui/fields/slider/model/types";

import { SliderField } from "./SliderField";

export const RHFRangeSliderField = ({
	name,
	...props
}: RHFSliderFieldProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<SliderField
					errorMessage={error?.message}
					{...props}
					value={field.value as number[]}
					onChange={(e) => {
						field.onChange(e);
					}}
					type="range"
				/>
			)}
		/>
	);
};
