"use client";

import { forwardRef } from "react";

import { Input, type InputProps } from "../../input";

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
	({ onChange, ...props }, ref) => {
		return (
			<Input
				type="email"
				placeholder="Email"
				autoComplete="email"
				ref={ref}
				{...props}
			/>
		);
	}
);

EmailInput.displayName = "EmailInput";
