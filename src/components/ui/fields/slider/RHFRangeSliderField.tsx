import { Controller, useFormContext } from "react-hook-form";

import type { RHFSliderFieldProps } from "@/types/form/sliderField";

import SliderField from "./SliderField";

const RHFRangeSliderField = ({ name, ...props }: RHFSliderFieldProps) => {
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
						console.log(e);

						field.onChange(e);
					}}
					type="range"
					// ref={field.ref}
				/>
			)}
		/>
	);
};

export default RHFRangeSliderField;
