"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RHFTextareaProps } from "@/shared/ui/fields/textarea/types";

import Textarea from "./Textarea";

const RHFTextarea = ({ name, ...restProps }: RHFTextareaProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<Textarea errorMessage={error?.message} {...field} {...restProps} />
				);
			}}
		/>
	);
};

export default RHFTextarea;
