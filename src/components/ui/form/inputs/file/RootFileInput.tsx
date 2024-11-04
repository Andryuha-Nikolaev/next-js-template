"use client";

import { useFormContext } from "react-hook-form";

import type { RootFileInputProps } from "@/types/input";

import FileInput from "./FileInput";

const RootFileInput = ({ name, ...restProps }: RootFileInputProps) => {
	const {
		resetField,
		watch,
		register,
		formState: { errors },
	} = useFormContext();

	const onReset = () => {
		resetField(name);
	};

	const errorMessage = errors[name]?.message?.toString();

	const fileNames = Array.from(watch(name) as FileList).map(
		(item) => item.name
	);

	return (
		<FileInput
			errorMessage={errorMessage}
			onReset={onReset}
			fileNames={fileNames}
			{...register(name)}
			{...restProps}
		/>
	);
};

export default RootFileInput;
