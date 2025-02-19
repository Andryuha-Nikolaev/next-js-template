"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";
import MaskedInput from "react-text-mask";

import s from "./Input.module.scss";
import type { InputProps } from "./types";

import InputControls from "../components/controls/InputControls";
import InputWrapper from "../components/wrapper/InputWrapper";

const Input = forwardRef<HTMLLabelElement, InputProps>(
	(
		{
			mask,
			maskGuide = false,
			errorMessage,
			label,
			type = "text",
			onLabelFocus = () => {},
			onLabelBlur = () => {},
			onOpenCalendar,
			isRequired,
			onResetField,
			hiddenReset,
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
			if (onResetField) {
				onResetField();
			} else if (restProps.onChange) {
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
					<label
						ref={ref}
						onFocus={() => {
							onLabelFocus();
						}}
						onBlur={() => {
							onLabelBlur();
						}}
						className={s.label}
					>
						{mask ? (
							<MaskedInput
								mask={mask}
								guide={maskGuide}
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
							hiddenReset={hiddenReset}
							togglePassword={togglePassword}
							onOpenCalendar={onOpenCalendar}
						/>
					)}
				</div>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";

export default Input;
