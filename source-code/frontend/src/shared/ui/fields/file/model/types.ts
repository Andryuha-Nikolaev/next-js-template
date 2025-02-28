import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type FileInputProps = InputHTMLAttributes<HTMLInputElement> &
	InputWrapperBaseProps & {
		fileSize?: string;
		fileFormat?: string;
		buttonText?: string;
		fileList: FileList;
		withPreview?: boolean;
		onChangeFileList: (fileList: FileList | null | string) => void;
	};

export type RHFFileInputProps = Omit<
	FileInputProps,
	"fileList" | "onChangeFileList" | "onDeleteFile"
> & {
	name: string;
};
