"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/form/input";

import Input from "./Input";

const RootInput = ({ name, ...restProps }: RootInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const onReset = () => {
					field.onChange("");
				};

				return (
					<Input
						errorMessage={error?.message}
						onReset={onReset}
						{...field}
						{...restProps}
					/>
				);
			}}
		/>
	);
};

export default RootInput;
