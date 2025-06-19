import type { Props } from "react-select";

import type { InputWrapperBaseProps } from "../../input-wrapper";

export type SelectProps = Props & InputWrapperBaseProps;

export type RHFSelectProps = SelectProps & {
	name: string;
};
