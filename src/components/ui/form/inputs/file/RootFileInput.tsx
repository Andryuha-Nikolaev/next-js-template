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
				return (
					<FileInput
						errorMessage={error?.message}
						{...restProps}
						fileList={field.value as FileList}
						onChangeFileList={(event) => {
							field.onChange(event);
						}}
						ref={field.ref}
					/>
				);
			}}
		/>
	);
};

export default RootFileInput;
