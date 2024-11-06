import { Controller, useFormContext } from "react-hook-form";

import type { RootRadioButtonProps } from "@/types/form/radioButton";

import RadioButton from "./RadioButton";

const RootRadioButton = ({ name, ...restProps }: RootRadioButtonProps) => {
	const {
		control,
		watch,
		formState: { errors },
	} = useFormContext();

	const errorMessage = errors[name]?.message?.toString();

	console.log(watch(name));

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<RadioButton errorMessage={errorMessage} {...field} {...restProps} />
			)}
		/>
	);
};

export default RootRadioButton;
