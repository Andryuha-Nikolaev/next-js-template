import type { InputHTMLAttributes } from "react";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> &
	InputWrapperBaseProps & {
		items: {
			value: string;
			label: string | React.ReactNode;
			disabled?: boolean;
		}[];
		variant?: "vertical" | "horizontal";
	};

export type RHFRadioButtonProps = RadioButtonProps & {
	name: string;
};
