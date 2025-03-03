"use client";

import { forwardRef } from "react";

import { Input, type InputProps } from "../../input";

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => {
		return (
			<Input
				label="Email"
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
