import { Controller, useFormContext } from "react-hook-form";

import type { RHFSelectProps } from "@/shared/ui/fields/select/types";

import ReactSelect from "./Select";

const RHFSelect = ({ name, ...restProps }: RHFSelectProps) => {
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

export default RHFSelect;
