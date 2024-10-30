"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import MaskedInput, { type MaskedInputProps } from "react-text-mask";

import s from "./RootInput.module.scss";

export interface InputWrapperProps {
	label?: string;
	errorMessage?: string;
}

export interface RootInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	withClear?: boolean;
	mask?: MaskedInputProps["mask"];
}

const RootInput = forwardRef<HTMLInputElement, RootInputProps>(
	({ mask, withClear = true, type, label, ...restProps }, ref) => {
		const setRef = (innerRef: HTMLInputElement | null) => {
			if (typeof ref === "function") {
				ref(innerRef);
			} else if (ref) {
				ref.current = innerRef;
			}
		};

		return (
			<>
				{mask ? (
					<MaskedInput
						mask={mask}
						guide={false}
						type={type}
						ref={(innerRef) => {
							setRef((innerRef?.inputElement as HTMLInputElement) || null);
						}}
						className={s.input}
						{...restProps}
					/>
				) : (
					<input type={type} ref={ref} className={s.input} {...restProps} />
				)}
			</>
		);
	}
);

RootInput.displayName = "RootInput";

export default RootInput;
