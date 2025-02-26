import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../input-wrapper";

export interface FileInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperBaseProps {
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
