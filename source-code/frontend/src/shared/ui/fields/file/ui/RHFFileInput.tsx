"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { RHFFileInputProps } from "@/shared/ui/fields/file/model/types";

import { FileInput } from "./FileInput";

export const RHFFileInput = ({ name, ...restProps }: RHFFileInputProps) => {
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
