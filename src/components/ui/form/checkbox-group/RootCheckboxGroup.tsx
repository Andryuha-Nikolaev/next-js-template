import { Controller, useFormContext } from "react-hook-form";

import type { RootCheckboxGroupProps } from "@/types/form/checkbox";

import CheckboxGroup from "./CheckboxGroup";

const RootCheckboxGroup = ({
	items,
	name,
	isRequired,
	label,
	chooseAllCheckbox,
}: RootCheckboxGroupProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<CheckboxGroup
					ref={field.ref}
					items={items}
					value={field.value as string[]}
					onChange={(e) => field.onChange(e)}
					errorMessage={error?.message}
					isRequired={isRequired}
					label={label}
					chooseAllCheckbox={chooseAllCheckbox}
				/>
			)}
		/>
	);
};

export default RootCheckboxGroup;
