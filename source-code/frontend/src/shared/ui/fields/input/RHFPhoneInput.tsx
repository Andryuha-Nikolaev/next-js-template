"use client";

import type { MaskitoOptions } from "@maskito/core";
import { useMaskito } from "@maskito/react";
import { Controller, useFormContext } from "react-hook-form";

import { FieldNames } from "@/shared/constants/fields";

import Input from "./Input";
import type { RHFInputProps } from "./types";

const RHFPhoneInput = ({ ...props }: RHFInputProps) => {
	const { control } = useFormContext();

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
		<Controller
			name={FieldNames.PHONE}
			control={control}
			render={({
				field: { onChange, ref, ...field },
				fieldState: { error },
			}) => {
				return (
					<Input
						type="tel"
						placeholder="+7 (___) ___ __ __"
						errorMessage={error?.message}
						ref={(el) => {
							maskedInputRef(el);
							ref(el);
						}}
						onChange={onChange}
						onInput={onChange}
						{...field}
						{...props}
					/>
				);
			}}
		/>
	);
};

export default RHFPhoneInput;
