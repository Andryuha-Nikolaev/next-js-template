"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/form/input";

import Input from "./Input";

const RootInput = ({ name, ...restProps }: RootInputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const onReset = () => {
					field.onChange("");
				};

				return (
					<Input
						errorMessage={errorMessage}
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
