import { type PropsWithChildren } from "react";

import type { InputWrapperProps } from "@/types/form/input";

import s from "./InputWrapper.module.scss";

const InputWrapper = ({
	children,
	errorMessage,
	label,
	isRequired,
}: PropsWithChildren<InputWrapperProps>) => {
	return (
		<div className={s.block}>
			{label && (
				<p className={s.label}>
					{label}
					{isRequired && <span className={s.asterisk}>*</span>}
				</p>
			)}
			{children}
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</div>
	);
};

export default InputWrapper;
