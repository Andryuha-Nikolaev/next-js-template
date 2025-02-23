"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";
import { IMaskInput } from "react-imask";

import s from "./Input.module.scss";
import type { InputProps } from "./types";

import InputControls from "../input-controls/InputControls";
import InputWrapper from "../input-wrapper/InputWrapper";

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			mask,
			unmask = true,
			errorMessage,
			label,
			type = "text",
			value,
			onChange = () => {},
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

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.wrap}>
					<label
						onFocus={() => {
							onLabelFocus();
						}}
						onBlur={() => {
							onLabelBlur();
						}}
						className={s.label}
					>
						{mask ? (
							<IMaskInput
								mask={mask}
								className={inputClassNames}
								unmask={unmask}
								inputRef={ref}
								type={currentType}
								autoComplete="new-password"
								value={value as string}
								onAccept={(value) => {
									onChange({
										target: { value },
									} as unknown as React.ChangeEvent<HTMLInputElement>);
								}}
								{...restProps}
							/>
						) : (
							<input
								ref={ref}
								className={inputClassNames}
								type={currentType}
								value={value}
								onChange={onChange}
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
