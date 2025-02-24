import { type PropsWithChildren } from "react";

import s from "./InputWrapper.module.scss";
import InputWrapperLabel from "./label/InputWrapperLabel";
import type { InputWrapperProps } from "./types";

type InputWrapperAdvancedProps = InputWrapperProps & {
	id?: string;
};

const InputWrapper = ({
	children,
	errorMessage,
	label,
	isRequired,
	id,
}: PropsWithChildren<InputWrapperAdvancedProps>) => {
	return (
		<div className={s.block}>
			{label && (
				<InputWrapperLabel id={id} label={label} isRequired={isRequired} />
			)}
			{children}
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</div>
	);
};

export default InputWrapper;
