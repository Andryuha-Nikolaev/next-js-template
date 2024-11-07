"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/form/input";

import Input from "./Input";

const RootInput = ({ name, ...restProps }: RootInputProps) => {
	const {
		resetField,
		control,
		formState: { errors },
	} = useFormContext();

	const onReset = () => {
		resetField(name, { keepError: false });
	};

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Input
					errorMessage={errorMessage}
					onReset={onReset}
					{...field}
					{...restProps}
				/>
			)}
		/>
	);
};

export default RootInput;
