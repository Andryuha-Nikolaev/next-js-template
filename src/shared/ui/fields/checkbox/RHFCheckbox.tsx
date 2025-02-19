import { Controller, useFormContext } from "react-hook-form";

import type { RHFCheckboxProps } from "@/types/form/checkbox";

import Checkbox from "./Checkbox";

const RHFCheckbox = ({ name, ...restProps }: RHFCheckboxProps) => {
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

export default RHFCheckbox;
