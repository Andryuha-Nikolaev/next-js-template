"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootFileInputProps } from "@/types/input";

import FileInput from "./FileInput";

const RootFileInput = ({ name, ...restProps }: RootFileInputProps) => {
	const {
		control,
		resetField,
		formState: { errors },
	} = useFormContext();

	const errorMessage = errors[name]?.message?.toString();

	const onReset = () => {
		resetField(name);
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const onDeleteFile = (fileName: string) => {
					const fileArray = Array.from(field.value as FileList);
					const filteredArray = fileArray.filter(
						(file) => file.name !== fileName
					);
					const dataTransfer = new DataTransfer();
					filteredArray.forEach((file) => dataTransfer.items.add(file));

					if (filteredArray.length < 1) {
						onReset();
					} else {
						field.onChange(dataTransfer.files);
					}
				};

				return (
					<FileInput
						errorMessage={errorMessage}
						{...restProps}
						fileList={field.value as FileList}
						onChangeFileList={(event) => {
							field.onChange(event);
						}}
						onDeleteFile={(fileName) => onDeleteFile(fileName)}
					/>
				);
			}}
		/>
	);
};

export default RootFileInput;
