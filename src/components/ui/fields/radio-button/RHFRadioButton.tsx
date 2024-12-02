import { Controller, useFormContext } from "react-hook-form";

import type { RHFRadioButtonProps } from "@/types/form/radioButton";

import RadioButton from "./RadioButton";

const RHFRadioButton = ({ name, ...restProps }: RHFRadioButtonProps) => {
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

export default RHFRadioButton;
