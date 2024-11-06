import { Controller, useFormContext } from "react-hook-form";

import type { RootCheckboxGroupProps } from "@/types/checkboxGroup";

import CheckboxGroup from "./CheckboxGroup";

const RootCheckboxGroup = ({
	items,
	name,
	isRequired,
	label,
}: RootCheckboxGroupProps) => {
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
				<CheckboxGroup
					items={items}
					value={field.value as string[]}
					onChange={(e) => field.onChange(e)}
					errorMessage={errorMessage}
					isRequired={isRequired}
					label={label}
				/>
			)}
		/>
	);
};

export default RootCheckboxGroup;
