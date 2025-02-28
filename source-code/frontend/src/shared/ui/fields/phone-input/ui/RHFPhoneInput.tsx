"use client";

import { Controller, useFormContext } from "react-hook-form";

import { FieldNames } from "@/shared/constants/fields";

import { PhoneInput } from "./PhoneInput";

import type { RHFInputProps } from "../../input/model/types";

export const RHFPhoneInput = ({ ...props }: RHFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={FieldNames.PHONE}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<PhoneInput errorMessage={error?.message} {...field} {...props} />
				);
			}}
		/>
	);
};
