"use client";

import React, { forwardRef, useId, useState } from "react";

import clsx from "clsx";

import s from "./Input.module.scss";
import type { InputProps } from "./types";

import InputControls from "../input-controls/InputControls";
import InputWrapper from "../input-wrapper/InputWrapper";

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			errorMessage,
			label,
			type = "text",
			value,
			onChange = () => {},
			MaskedInputComponent,
			onOpenCalendar,
			isRequired,
			onResetField,
			hiddenReset,
			...restProps
		},
		ref
	) => {
		const isFilled = !!value;

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
			} else {
				const event = {
					target: { value: "" },
				} as unknown as React.ChangeEvent<HTMLInputElement>;

				onChange(event);
			}
		};

		const id = useId();

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
				id={id}
			>
				<div className={s.wrap}>
					{MaskedInputComponent ? (
						React.cloneElement(MaskedInputComponent, {
							id,
							inputRef: ref,
							className: inputClassNames,
							type: currentType,
							value,
							onAccept: (val: string) =>
								onChange({
									target: { value: val },
								} as React.ChangeEvent<HTMLInputElement>),
							autoComplete: "new-password",
							...restProps,
						})
					) : (
						<input
							id={id}
							ref={ref}
							className={inputClassNames}
							type={currentType}
							value={value}
							onChange={onChange}
							autoComplete="new-password"
							{...restProps}
						/>
					)}

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
