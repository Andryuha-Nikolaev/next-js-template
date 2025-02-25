"use client";

import type React from "react";
import { forwardRef, useId, useState } from "react";

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
			onOpenCalendar,
			isRequired,
			onResetField,
			hiddenReset,
			...restProps
		},
		ref
	) => {
		console.log(value);

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
