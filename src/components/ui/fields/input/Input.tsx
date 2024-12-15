"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";
import MaskedInput from "react-text-mask";

import type { InputProps } from "@/types/form/input";

import s from "./Input.module.scss";

import InputControls from "../components/controls/InputControls";
import InputWrapper from "../components/wrapper/InputWrapper";

const Input = forwardRef<HTMLLabelElement, InputProps>(
	(
		{
			mask,
			errorMessage,
			label,
			type = "text",

			onOpenCalendar,
			isRequired,
			...restProps
		},
		ref
	) => {
		const isFilled = !!restProps.value;

		const [currentType, setCurrentType] = useState(type);

		const togglePassword = () => {
			if (currentType === "password") {
				setCurrentType("text");
			} else {
				setCurrentType("password");
			}
		};

		const inputClassNames = clsx(s.input, errorMessage && s.error, s[type]);

		const onReset = () => {
			if (restProps.onChange) {
				const event = {
					target: { value: "" },
				} as React.ChangeEvent<HTMLInputElement>;

				restProps.onChange(event);
			}
		};

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.wrap}>
					<label ref={ref} className={s.label}>
						{mask ? (
							<MaskedInput
								mask={mask}
								guide={false}
								className={inputClassNames}
								type={currentType}
								autoComplete="new-password"
								{...restProps}
							/>
						) : (
							<input
								className={inputClassNames}
								type={currentType}
								autoComplete="new-password"
								{...restProps}
							/>
						)}
					</label>
					{!restProps.disabled && (
						<InputControls
							type={type}
							currentType={currentType}
							isFilled={isFilled}
							onReset={onReset}
							togglePassword={togglePassword}
							onOpenCalendar={() => {
								if (onOpenCalendar) {
									onOpenCalendar();
								}
							}}
						/>
					)}
				</div>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";

export default Input;
