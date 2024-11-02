import type {
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
} from "react";

import type { MaskedInputProps } from "react-text-mask";

export interface InputWrapperProps {
	label?: string;
	errorMessage?: string;
}

export interface InputControlsProps {
	type?: HTMLInputTypeAttribute;
	currentType?: HTMLInputTypeAttribute;
	togglePassword?: () => void;
	onReset?: () => void;
	isFilled: boolean;
}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onReset?: () => void;
	mask?: MaskedInputProps["mask"];
}

export interface RootInputProps extends InputProps {
	name: string;
}

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		InputWrapperProps {
	onReset?: () => void;
}

export interface RootTextareaProps extends TextareaProps {
	name: string;
}

export interface FileInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	fileSize?: string;
	fileFormat?: string;
	fileNames?: string[];
	buttonText?: string;
	onReset?: () => void;
}

export interface RootFileInputProps extends FileInputProps {
	name: string;
}
