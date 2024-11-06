import type { InputHTMLAttributes } from "react";

import type { InputWrapperProps } from "./input";

export interface RadioButtonProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	items: { value: string; label: string | React.ReactNode }[];
	variant?: "vertical" | "horizontal";
}

export interface RootRadioButtonProps extends RadioButtonProps {
	name: string;
}
