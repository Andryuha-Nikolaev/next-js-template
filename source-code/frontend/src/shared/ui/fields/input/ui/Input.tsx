"use client";

import type React from "react";
import { forwardRef, useId, useState } from "react";

import clsx from "clsx";

import s from "./Input.module.scss";

import { InputControls } from "../../input-controls";
import { InputWrapper } from "../../input-wrapper";
import type { InputProps } from "../model/types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
		const isFilled = !!value;

		const [currentType, setCurrentType] = useState(type);

		const togglePasswordVisibility = () => {
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
							togglePasswordVisibility={togglePasswordVisibility}
							onOpenCalendar={onOpenCalendar}
						/>
					)}
				</div>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";
