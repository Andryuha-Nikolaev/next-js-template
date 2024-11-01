"use client";

import { Controller, useFormContext } from "react-hook-form";

import Input, { type InputProps } from "./Input";

export interface RootInputProps extends InputProps {
	name: string;
}

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
			defaultValue=""
			rules={{ required: "aaaaaa" }}
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
