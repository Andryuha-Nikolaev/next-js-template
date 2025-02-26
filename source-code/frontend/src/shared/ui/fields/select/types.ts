import type { Props } from "react-select";

import type { InputWrapperBaseProps } from "../input-wrapper";

export interface RootSelectItem {
	value: string;
	label: string;
}
export interface SelectProps extends Props, InputWrapperBaseProps {}

export interface RHFSelectProps extends SelectProps {
	name: string;
}
