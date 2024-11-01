"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootInputProps } from "@/types/input";

import Input from "./Input";

const RootInput = ({ name, ...restProps }: RootInputProps) => {
	const {
		resetField,
		formState: { errors },
	} = useFormContext();

	const onReset = () => {
		resetField(name);
	};

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
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
