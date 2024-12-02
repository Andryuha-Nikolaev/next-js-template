"use client";

import { forwardRef, useRef, useState } from "react";

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
			onLabelFocus = () => {},
			onLabelBlur = () => {},
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

		const [isFocused, setIsFocused] = useState(false);

		const inputClassNames = clsx(
			s.input,
			isFocused && s.focused,
			errorMessage && s.error,
			s[type]
		);

		const onReset = () => {
			if (restProps.onChange) {
				const event = {
					target: { value: "" },
				} as React.ChangeEvent<HTMLInputElement>;

				restProps.onChange(event);
			}
		};

		const inputRef = useRef<HTMLInputElement | null>(null);

		const handleRef = (ref: MaskedInput | null) => {
			if (ref && ref.inputElement) {
				inputRef.current = ref.inputElement as HTMLInputElement;
			}
		};

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<label
					onFocus={() => {
						if (inputRef) {
							inputRef.current?.focus();
						}
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
								ref={handleRef}
								mask={mask}
								guide={false}
								className={inputClassNames}
								type={currentType}
								autoComplete="new-password"
								{...restProps}
							/>
						) : (
							<input
								ref={inputRef}
								className={inputClassNames}
								type={currentType}
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
								togglePassword={togglePassword}
								onOpenCalendar={onOpenCalendar}
							/>
						)}
					</span>
				</label>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";

export default Input;
