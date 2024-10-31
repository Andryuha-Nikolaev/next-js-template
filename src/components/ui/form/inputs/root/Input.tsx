"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import MaskedInput, { type MaskedInputProps } from "react-text-mask";

import s from "./Input.module.scss";

export interface InputWrapperProps {
	label?: string;
	errorMessage?: string;
}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		InputWrapperProps {
	withClear?: boolean;
	mask?: MaskedInputProps["mask"];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			mask,
			withClear = true,
			errorMessage,
			label,
			type = "text",
			...restProps
		},
		ref
	) => {
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

Input.displayName = "Input";

export default Input;
