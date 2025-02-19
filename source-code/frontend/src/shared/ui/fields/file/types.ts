import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "../input-wrapper/types";

export interface FileInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	fileSize?: string;
	fileFormat?: string;
	buttonText?: string;
	fileList: FileList;
	withPreview?: boolean;
	onChangeFileList: (fileList: FileList | null | string) => void;
}

export interface RHFFileInputProps
	extends Omit<
		FileInputProps,
		"fileList" | "onChangeFileList" | "onDeleteFile"
	> {
	name: string;
}
