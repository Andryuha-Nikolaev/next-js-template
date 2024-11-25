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
			value,
			onChange,
			onLabelFocus = () => {},
			onLabelBlur = () => {},
			onOpenCalendar,
			isRequired,
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

		const [isFocused, setIsFocused] = useState(false);

		const inputClassNames = clsx(
			s.input,
			isFocused && s.focused,
			errorMessage && s.error,
			s[type]
		);

		const onReset = () => {
			onChange("");
		};

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<label
					onFocus={() => {
						setIsFocused(true);
						onLabelFocus();
					}}
					onBlur={() => {
						setIsFocused(false);
						onLabelBlur();
					}}
					ref={ref}
					className={s.label}
				>
					<span className={s.wrap}>
						{mask ? (
							<MaskedInput
								mask={mask}
								guide={false}
								className={inputClassNames}
								type={currentType}
								value={value}
								onChange={(e) => onChange(e.target.value)}
								autoComplete="new-password"
								{...restProps}
							/>
						) : (
							<input
								className={inputClassNames}
								type={currentType}
								value={value}
								onChange={(e) => onChange(e.target.value)}
								autoComplete="new-password"
								{...restProps}
							/>
						)}

						<InputControls
							type={type}
							currentType={currentType}
							isFilled={isFilled}
							onReset={onReset}
							togglePassword={togglePassword}
							onOpenCalendar={onOpenCalendar}
						/>
					</span>
				</label>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";

export default Input;
