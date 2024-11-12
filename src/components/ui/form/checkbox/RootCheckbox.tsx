import { Controller, useFormContext } from "react-hook-form";

import type { RootCheckboxProps } from "@/types/form/checkbox";

import Checkbox from "./Checkbox";

const RootCheckbox = ({ name, ...restProps }: RootCheckboxProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Checkbox errorMessage={error?.message} {...field} {...restProps} />
			)}
		/>
	);
};

export default RootCheckbox;
