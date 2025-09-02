"use client";

import type { ForwardRefExoticComponent, InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";

import { EmailInput } from "./EmailInput";
import { Input } from "./Input";
import { PhoneInput } from "./PhoneInput";

import type { InputProps, RHFInputProps } from "../model/types";

export const withRHFInput = (
	Component: ForwardRefExoticComponent<
		InputHTMLAttributes<HTMLInputElement> & InputProps
	>
) => {
	return function WrappedRHFInput({ name, ...props }: RHFInputProps) {
		const { control } = useFormContext();

		return (
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<Component errorMessage={error?.message} {...field} {...props} />
				)}
			/>
		);
	};
};

export const RHFInput = withRHFInput(Input);
export const RHFEmailInput = withRHFInput(EmailInput);
export const RHFPhoneInput = withRHFInput(PhoneInput);
