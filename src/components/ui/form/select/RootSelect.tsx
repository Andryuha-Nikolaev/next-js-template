import { Controller, useFormContext } from "react-hook-form";

import type { RootSelectProps } from "@/types/form/select";

import ReactSelect from "./Select";

const RootSelect = ({ name, ...restProps }: RootSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<ReactSelect errorMessage={error?.message} {...field} {...restProps} />
			)}
		/>
	);
};

export default RootSelect;
