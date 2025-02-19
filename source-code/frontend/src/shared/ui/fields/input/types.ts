import type { InputHTMLAttributes } from "react";

import type { MaskedInputProps } from "react-text-mask";

import type { InputWrapperProps } from "../input-wrapper/types";

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	onLabelFocus?: () => void;
	onLabelBlur?: () => void;
	onOpenCalendar?: () => void;
	onResetField?: () => void;
	hiddenReset?: boolean;
	mask?: MaskedInputProps["mask"];
	maskGuide?: boolean;
	pipe?: MaskedInputProps["pipe"];
}

export interface RHFInputProps extends Omit<InputProps, "onChange"> {
	name: string;
}
