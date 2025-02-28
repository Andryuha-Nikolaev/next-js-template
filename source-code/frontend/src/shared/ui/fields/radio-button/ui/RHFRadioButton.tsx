import { Controller, useFormContext } from "react-hook-form";

import type { RHFRadioButtonProps } from "@/shared/ui/fields/radio-button/model/types";

import { RadioButton } from "./RadioButton";

export const RHFRadioButton = ({ name, ...restProps }: RHFRadioButtonProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<RadioButton errorMessage={error?.message} {...field} {...restProps} />
			)}
		/>
	);
};
