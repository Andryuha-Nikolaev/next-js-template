import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../input-wrapper";

export interface RadioButtonProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperBaseProps {
	items: {
		value: string;
		label: string | React.ReactNode;
		disabled?: boolean;
	}[];
	variant?: "vertical" | "horizontal";
}

export interface RHFRadioButtonProps extends RadioButtonProps {
	name: string;
}
