import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/input";

import Radio from "./Radio";

const RootRadio = ({ name, ...restProps }: RootInputProps) => {
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
				<Radio errorMessage={errorMessage} {...field} {...restProps} />
			)}
		/>
	);
};

export default RootRadio;
