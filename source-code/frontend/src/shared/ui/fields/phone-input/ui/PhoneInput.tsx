"use client";

import { forwardRef } from "react";

import type { MaskitoOptions } from "@maskito/core";
import { useMaskito } from "@maskito/react";

import { Input, type InputProps } from "../../input";

export const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
	({ onChange, ...props }, ref) => {
		const options: MaskitoOptions = {
			mask: [
				"+",
				"7",
				" ",
				"(",
				/\d/,
				/\d/,
				/\d/,
				")",
				" ",
				/\d/,
				/\d/,
				/\d/,
				" ",
				/\d/,
				/\d/,
				" ",
				/\d/,
				/\d/,
			],
		};

		const maskedInputRef = useMaskito({ options });

		return (
			<Input
				type="tel"
				placeholder="+7 (___) ___ __ __"
				ref={(el) => {
					maskedInputRef(el);
					if (typeof ref === "function") {
						ref(el);
					}
				}}
				autoComplete="tel"
				onChange={onChange}
				onInput={onChange}
				{...props}
			/>
		);
	}
);

PhoneInput.displayName = "PhoneInput";
