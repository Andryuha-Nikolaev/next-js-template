"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootTextareaProps } from "@/types/input";

import Textarea from "./Textarea";

const RootTextarea = ({ name, ...restProps }: RootTextareaProps) => {
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
				<Textarea
					errorMessage={errorMessage}
					onReset={onReset}
					{...field}
					{...restProps}
				/>
			)}
		/>
	);
};

export default RootTextarea;
