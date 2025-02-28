import type { Props } from "react-select";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type RootSelectItem = {
	value: string;
	label: string;
};
export type SelectProps = Props & InputWrapperBaseProps;

export type RHFSelectProps = SelectProps & {
	name: string;
};
