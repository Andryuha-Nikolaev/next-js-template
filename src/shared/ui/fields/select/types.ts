import type { Props } from "react-select";

import type { InputWrapperProps } from "@/shared/ui/fields/input/types";

export interface RootSelectItem {
	value: string;
	label: string;
}
export interface SelectProps extends Props, InputWrapperProps {}

export interface RHFSelectProps extends SelectProps {
	name: string;
}
