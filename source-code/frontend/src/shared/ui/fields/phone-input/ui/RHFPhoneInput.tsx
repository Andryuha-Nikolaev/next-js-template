"use client";

import { Controller, useFormContext } from "react-hook-form";

import { PhoneInput } from "./PhoneInput";

import type { RHFInputProps } from "../../input/model/types";

export const RHFPhoneInput = ({ name, ...props }: RHFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<PhoneInput errorMessage={error?.message} {...field} {...props} />
				);
			}}
		/>
	);
};
