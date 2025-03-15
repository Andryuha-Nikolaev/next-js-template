"use client";

import { Controller, useFormContext } from "react-hook-form";

import { EmailInput } from "./EmailInput";

import type { RHFInputProps } from "../../input/model/types";

export const RHFEmailInput = ({ name, ...props }: RHFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<EmailInput errorMessage={error?.message} {...field} {...props} />
				);
			}}
		/>
	);
};
