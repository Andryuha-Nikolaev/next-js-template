"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RHFInputProps } from "@/types/form/input";

import Input from "./Input";

const RHFInput = ({ name, ...restProps }: RHFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<Input errorMessage={error?.message} {...field} {...restProps} />
				);
			}}
		/>
	);
};

export default RHFInput;
