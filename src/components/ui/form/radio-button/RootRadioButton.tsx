import { Controller, useFormContext } from "react-hook-form";

import type { RootRadioButtonProps } from "@/types/form/radioButton";

import RadioButton from "./RadioButton";

const RootRadioButton = ({ name, ...restProps }: RootRadioButtonProps) => {
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

export default RootRadioButton;
