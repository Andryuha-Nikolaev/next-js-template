import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface FileInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	fileSize?: string;
	fileFormat?: string;
	buttonText?: string;
	fileList: FileList;
	withPreview?: boolean;
	onChangeFileList: (fileList: FileList | null) => void;
	onDeleteFile: (name: string) => void;
}

export interface RootFileInputProps
	extends Omit<
		FileInputProps,
		"fileList" | "onChangeFileList" | "onDeleteFile"
	> {
	name: string;
}
