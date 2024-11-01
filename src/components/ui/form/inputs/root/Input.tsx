"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";
import MaskedInput from "react-text-mask";

import CloseButton from "@/components/ui/buttons/close/CloseButton";
import EyeButton from "@/components/ui/buttons/eye/EyeButton";
import type { InputProps } from "@/types/input";

import s from "./Input.module.scss";

import InputWrapper from "../wrapper/InputWrapper";

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ mask, onReset, errorMessage, label, type = "text", value, ...restProps },
		ref
	) => {
		const setRef = (innerRef: HTMLInputElement | null) => {
			if (typeof ref === "function") {
				ref(innerRef);
			} else if (ref) {
				ref.current = innerRef;
			}
		};

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

		const inputClassnames = clsx(
			s.input,
			isFocused && s.focused,
			errorMessage && s.error
		);

		return (
			<InputWrapper errorMessage={errorMessage} label={label}>
				<label
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				>
					<span className={s.wrap}>
						{mask ? (
							<MaskedInput
								mask={mask}
								guide={false}
								ref={(innerRef) => {
									setRef((innerRef?.inputElement as HTMLInputElement) || null);
								}}
								className={inputClassnames}
								type={currentType}
								value={value}
								autoComplete="new-password"
								{...restProps}
							/>
						) : (
							<input
								ref={ref}
								className={inputClassnames}
								type={currentType}
								value={value}
								autoComplete="new-password"
								{...restProps}
							/>
						)}
						<span className={s.buttons}>
							{type === "password" && (
								<EyeButton
									onClick={togglePassword}
									isOpen={currentType === "text"}
								/>
							)}
							{!!onReset && isFilled && (
								<CloseButton className={s.reset} onClick={onReset} />
							)}
						</span>
					</span>
				</label>
			</InputWrapper>
		);
	}
);

Input.displayName = "Input";

export default Input;
