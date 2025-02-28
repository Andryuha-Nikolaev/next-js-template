import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
	InputWrapperBaseProps & {
		isError?: boolean;
		disabled?: boolean;
	};

export type RHFCheckboxProps = CheckboxProps & {
	name: string;
};
