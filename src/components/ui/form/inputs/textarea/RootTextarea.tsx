"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootTextareaProps } from "@/types/form/textarea";

import Textarea from "./Textarea";

const RootTextarea = ({ name, ...restProps }: RootTextareaProps) => {
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
					<Textarea
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

export default RootTextarea;
