"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { FileInputProps, RootFileInputProps } from "@/types/input";

import FileInput from "./FileInput";

const RootFileInput = ({ name, ...restProps }: RootFileInputProps) => {
	const {
		resetField,
		watch,
		formState: { errors },
	} = useFormContext();

	const onReset = () => {
		resetField(name);
	};

	const errorMessage = errors[name]?.message?.toString();

	console.log(watch(name));

	return (
		<Controller
			name={name}
			render={({ field }) => (
				<FileInput
					errorMessage={errorMessage}
					onReset={onReset}
					{...field}
					{...restProps}
					value={field.value.filename}
					onChange={(event) => {
						return field.onChange(event.target.files);
					}}
				/>
			)}
		/>
	);
};

export default RootFileInput;
