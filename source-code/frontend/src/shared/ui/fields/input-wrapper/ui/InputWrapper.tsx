import { type PropsWithChildren } from "react";

import s from "./InputWrapper.module.scss";
import InputWrapperLabel from "./label/InputWrapperLabel";

import type { InputWrapperBaseProps } from "../model/types";

type InputWrapperProps = InputWrapperBaseProps & {
	id?: string;
};

export const InputWrapper = ({
	children,
	errorMessage,
	label,
	isRequired,
	id,
}: PropsWithChildren<InputWrapperProps>) => {
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
