import { Controller, useFormContext } from "react-hook-form";

import type { RootCheckboxGroupProps } from "@/types/checkboxGroup";

import CheckboxGroup from "./CheckboxGroup";

const RootCheckboxGroup = ({
	items,
	name,
	isRequired,
	label,
	chooseAllCheckbox,
}: RootCheckboxGroupProps) => {
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
				<CheckboxGroup
					items={items}
					value={field.value as string[]}
					onChange={(e) => field.onChange(e)}
					errorMessage={errorMessage}
					isRequired={isRequired}
					label={label}
					chooseAllCheckbox={chooseAllCheckbox}
				/>
			)}
		/>
	);
};

export default RootCheckboxGroup;
