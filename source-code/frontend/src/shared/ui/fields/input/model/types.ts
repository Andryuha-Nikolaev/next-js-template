import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
	InputWrapperBaseProps & {
		onOpenCalendar?: () => void;
		onResetField?: () => void;
		hiddenReset?: boolean;
	};

export type RHFInputProps = Omit<InputProps, "onChange"> & {
	name: string;
};
