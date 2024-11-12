"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RootFileInputProps } from "@/types/form/fileInput";

import FileInput from "./FileInput";

const RootFileInput = ({ name, ...restProps }: RootFileInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const onDeleteFile = (fileName: string) => {
					const fileArray = Array.from(field.value as FileList);
					const filteredArray = fileArray.filter(
						(file) => file.name !== fileName
					);
					const dataTransfer = new DataTransfer();
					filteredArray.forEach((file) => dataTransfer.items.add(file));

					if (filteredArray.length < 1) {
						field.onChange("");
					} else {
						field.onChange(dataTransfer.files);
					}
				};

				return (
					<FileInput
						errorMessage={error?.message}
						{...restProps}
						fileList={field.value as FileList}
						onChangeFileList={(event) => {
							field.onChange(event);
						}}
						onDeleteFile={(fileName) => onDeleteFile(fileName)}
						ref={field.ref}
					/>
				);
			}}
		/>
	);
};

export default RootFileInput;
