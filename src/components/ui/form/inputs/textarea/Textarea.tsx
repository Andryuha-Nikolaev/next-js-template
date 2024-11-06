"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";

import type { TextareaProps } from "@/types/form/textarea";

import s from "./Textarea.module.scss";

import InputControls from "../components/controls/InputControls";
import InputWrapper from "../components/wrapper/InputWrapper";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ onReset, errorMessage, label, value, ...restProps }, ref) => {
		const isFilled = !!value;

		const [isFocused, setIsFocused] = useState(false);

		const wrapClassNames = clsx(
			s.wrap,
			isFocused && s.focused,
			errorMessage && s.error
		);

		return (
			<InputWrapper errorMessage={errorMessage} label={label}>
				<label
					onFocus={() => {
						setIsFocused(true);
					}}
					onBlur={() => setIsFocused(false)}
					className={s.label}
				>
					<span className={wrapClassNames}>
						<textarea
							ref={ref}
							className={s.input}
							value={value}
							{...restProps}
						/>

						<InputControls isFilled={isFilled} onReset={onReset} />
					</span>
				</label>
			</InputWrapper>
		);
	}
);

Textarea.displayName = "Textarea";

export default Textarea;
