import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "../input-wrapper/types";

export interface RadioButtonProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
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
