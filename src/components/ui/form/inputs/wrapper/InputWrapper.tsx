import { type PropsWithChildren } from "react";

import type { InputWrapperProps } from "@/types/input";

import s from "./InputWrapper.module.scss";

// interface InputWrapperProp extends InputWrapperProps PropsWithChildren {
// children: React.ReactNode
// }

const InputWrapper = ({
	children,
	errorMessage,
	label,
}: PropsWithChildren<InputWrapperProps>) => {
	return (
		<div className={s.block}>
			{label && <p className={s.label}>{label}</p>}
			{children}
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</div>
	);
};

export default InputWrapper;
