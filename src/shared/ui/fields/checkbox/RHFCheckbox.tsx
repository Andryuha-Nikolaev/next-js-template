import { Controller, useFormContext } from "react-hook-form";

import Checkbox from "./Checkbox";
import type { RHFCheckboxProps } from "./types";

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
