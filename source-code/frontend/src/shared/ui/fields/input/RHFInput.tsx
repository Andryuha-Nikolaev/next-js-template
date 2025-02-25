"use client";

import { Controller, useFormContext } from "react-hook-form";

import Input from "./Input";
import type { RHFInputProps } from "./types";

const RHFInput = ({ name, ...props }: RHFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return <Input errorMessage={error?.message} {...field} {...props} />;
			}}
		/>
	);
};

export default RHFInput;
