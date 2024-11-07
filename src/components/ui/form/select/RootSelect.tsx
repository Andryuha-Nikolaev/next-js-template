import { Controller, useFormContext } from "react-hook-form";

import type { RootSelectProps } from "@/types/form/select";

import ReactSelect from "./Select";

const RootSelect = ({ name, ...restProps }: RootSelectProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<ReactSelect errorMessage={errorMessage} {...field} {...restProps} />
			)}
		/>
	);
};

export default RootSelect;
