"use client";

import { Controller, useFormContext } from "react-hook-form";

import { AutocompleteInput } from "./AutocopleteInput";

import type { RHFAutocompleteInputProps } from "../model/types";

export const RHFAutocompleteInput = ({
	name,
	onInputChange,
	...props
}: RHFAutocompleteInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, ...fieldProps },
				fieldState: { error },
			}) => {
				return (
					<AutocompleteInput
						errorMessage={error?.message}
						onChange={(e) => {
							onInputChange && onInputChange(e.target.value);
							onChange(e);
						}}
						{...fieldProps}
						{...props}
					/>
				);
			}}
		/>
	);
};
