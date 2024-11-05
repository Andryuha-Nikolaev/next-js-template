import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/input";

import Checkbox from "./Checkbox";

const RootCheckbox = ({ name, ...restProps }: RootInputProps) => {
	const {
		resetField,
		control,
		formState: { errors },
	} = useFormContext();

	const onReset = () => {
		resetField(name);
	};

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Checkbox
					errorMessage={errorMessage}
					onReset={onReset}
					{...field}
					{...restProps}
				/>
			)}
		/>
	);
};

export default RootCheckbox;
