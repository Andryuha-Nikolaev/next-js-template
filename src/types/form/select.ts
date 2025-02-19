import type { Props } from "react-select";

import type { InputWrapperProps } from "./input";

export interface RootSelectItem {
	value: string;
	label: string;
}
export interface SelectProps extends Props, InputWrapperProps {}

export interface RHFSelectProps extends SelectProps {
	name: string;
}
