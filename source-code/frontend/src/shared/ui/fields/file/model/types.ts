import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type FileInputProps = InputHTMLAttributes<HTMLInputElement> &
	InputWrapperBaseProps & {
		fileSize?: string;
		fileFormat?: string;
		buttonText?: string;
		fileList: FileList | string[];
		withPreview?: boolean;
		onChangeFileList: (fileList: FileList | string[]) => void;
	};

export type RHFFileInputProps = Omit<
	FileInputProps,
	"fileList" | "onChangeFileList" | "onDeleteFile"
> & {
	name: string;
};
