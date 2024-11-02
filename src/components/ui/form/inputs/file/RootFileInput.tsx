"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootFileInputProps } from "@/types/input";

import FileInput from "./FileInput";

const RootFileInput = ({ name, ...restProps }: RootFileInputProps) => {
	const {
		resetField,
		control,
		formState: { errors },
	} = useFormContext();

	// todo field key

	const onReset = () => {
		resetField(name);
	};

	const errorMessage = errors[name]?.message?.toString();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const fileNames = Array.from(field.value as FileList).map(
					(item) => item.name
				);

				return (
					<FileInput
						errorMessage={errorMessage}
						onReset={onReset}
						fileNames={fileNames}
						{...field}
						{...restProps}
						value={undefined}
						onChange={(event) => {
							console.log(event.target.files);

							return field.onChange(event.target.files);
						}}
					/>
				);
			}}
		/>
	);
};

export default RootFileInput;
